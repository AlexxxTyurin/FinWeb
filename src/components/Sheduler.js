import React, {Component} from "react";
import Timetable from "./Timetable";
import {Header, Segment} from "semantic-ui-react";

var num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


class Scheduler extends Component{
    constructor(props){
        super(props);

        this.state = {data:{}, isFetching: true, error: null, group_id: null}
        this.start_date = null;
        this.finish_date = null;
        this.group_name = this.props.group_name;
        this.group_id = null;

        if (this.group_name === "ПИ17-2"){
            this.group_id = 8892;
        }

        else if (this.group_name === "ПИ17-1"){
            this.group_id = 8891;
        }
    }

    componentDidMount() {
        var today = new Date();
        var date = today.getDate();
        var month = String(today.getMonth() + 1).padStart(2, '0');
        var year = String(today.getFullYear());
        var day_of_week = today.getDay();


        var start_date = year + "." + month + "." + String(date).padStart(2, "0");
        var finish_date = year + "." + month + "." + String((date + 7) % num_days[today.getMonth()]).padStart(2, "0");

        this.finish_date = finish_date;
        this.start_date = start_date;

        var str = 'https://ruz.fa.ru/api/schedule/group/' + String(this.group_id) + '?start=' + start_date + "&" + finish_date + "&lng=1";


        fetch(str)
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false}));
    }

    render(){
        var {data, isFetching, error} = this.state;
        var days = [];

        for (var key in data){
            if (days.indexOf(data[key].dayOfWeekString) === -1){
                days.push(data[key].dayOfWeekString);
            }
        }


        var schedule = [];

        for (var i in days){
            var s = [];
            for (var j in data){
                if(data[j].dayOfWeekString === days[i]){
                    s.push(data[j]);
                }
            }
            schedule.push({day: days[i], classes: s});
        }


        return(
            <div>
                <Segment
                    style={{width: "60%", marginLeft: "20%", marginTop: "1%", fontSize: "20px"}}
                    textAlign={"center"}
                >
                    Расписание на период с {this.start_date} по {this.finish_date}
                </Segment>
                <Timetable days={schedule}/>
            </div>
        );



    }

        // let response = fetch('https://ruz.fa.ru/api/schedule/group/8892?start=2020.03.09&finish=2020.03.15&lng=1');
        // let json = response.json
        // alert(json);
        // return (
        //     <p>{response.catch()}</p>
        // )
}

export default Scheduler;