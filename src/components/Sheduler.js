import React, {Component} from "react";
import Timetable from "./Timetable";

class Sheduler extends Component{
    constructor(props){
        super(props);

        this.state = {data:{}, isFetching: true, error: null}
    }

    componentDidMount() {
        fetch('https://ruz.fa.ru/api/schedule/group/8892?start=2020.03.09&finish=2020.03.15&lng=1')
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
            <Timetable days={schedule}/>
        );



    }

        // let response = fetch('https://ruz.fa.ru/api/schedule/group/8892?start=2020.03.09&finish=2020.03.15&lng=1');
        // let json = response.json
        // alert(json);
        // return (
        //     <p>{response.catch()}</p>
        // )
}

export default Sheduler;