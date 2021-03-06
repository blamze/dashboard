import React from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export class Clock extends React.Component {
    constructor(props) {
        super(props)
        const current = new Date();
        this.state = {
            seconds: current.getSeconds(),
            minutes: current.getMinutes(),
            hours: current.getHours(),
            day: days[current.getDay()],
            date: `${months[current.getMonth()]} ${current.getDate()}`,
        }
    }

    componentDidMount() {
        const oneSec = 1000
        window.setInterval(this.getTime, oneSec);
        window.setInterval(this.getDate, oneSec);
    }

    getTime = () => {
        const current = new Date();
        let hours = current.getHours();
        let minutes = current.getMinutes();
        let seconds = current.getSeconds();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        this.setState({seconds, minutes, hours})

    }

    getDate = () => {
        const current = new Date();
        let day = current.getDay();
        let month = current.getMonth();
        let date = current.getDate();
        day = days[day];
        month = `${months[month]} ${date}`;
        this.setState({day, month})
    }


    render() {
        const {seconds, minutes, hours, day, date} = this.state
        return (
            <div className="clock-container">
                <div className="clock-time">
                    <span>{hours}</span>:<span>{minutes}</span>
                    <span className="clock-time-second">{seconds}</span>
                </div>
                <div className="clock-date"><span>{day}</span>, <span>{date}</span></div>
            </div>
        )
    }
}