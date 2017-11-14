import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Calendar extends Component {

    static PropTypes = {
        persons: PropTypes.array,
        weeks: PropTypes.array
    }

    _renderTimelineRows = () => {
        let result = [];
        let isTotal = false;
        this.props.persons.map((person, index) => {
            let rows = [];
            for (let j = 0; j < person.tasks.length + 1; j++) {
                j === 0 ? isTotal = true : isTotal = false;
                rows.push(<div key={person.name + j} className={"Calendar-person__timeline-row"}> {this._countTotalScore(index, isTotal,j)}</div>)
            }
            result.push(<div key={index} className="Calendar-person__timeline-rows">{rows}</div>);

        });
        return result;
    };

    _countTotalScore = (index, isTotal, taskNum) => {
        let weeksNum = this.props.weeks.length;
        let tasks = this.props.persons[index].tasks;
        let blocks = [];

        // top total line
        if (isTotal) {
            for (let i = 0; i < weeksNum; i++) {
                let total = 0;
                let isVacation;
                let k;
                for (let j = 0; j < tasks.length; j++) {
                    k = j;
                    isVacation = false;
                    if (tasks[j].weeks.includes(i)) {
                        total += tasks[j].done;
                    }

                    // if there was a vacation
                    if (tasks[j].tag === 'vacation' && tasks[j].weeks.includes(i)) {
                        isVacation = true;
                    }
                }

                let style;
                if ( isVacation) {
                    style = {background: 'lightgray'}
                } else if (index % 2 === 0) {
                    style = {background: "rgba(255, 153, 153, " + total / 100 + ")"}
                } else {
                    style = {background: "rgba(179, 217, 255, " + total / 100 + ")"};
                }

                blocks.push(<div key={ i + '-' + k} className="Calendar-person__timeline-block" style={style}></div>)

            }
        } else {
            let counter = 0;
            for (let j = 0; j < weeksNum; j++) {

                // if there's a vacation
                if ((tasks[taskNum - 1].tag === 'vacation')&& (tasks[taskNum - 1].weeks.includes(j)) ) {
                    let style = {background: 'lightgray'}
                    blocks.push(<div className={"Calendar-person__timeline-block"} key={j + '-' +  (taskNum - 1)} style={style}></div>)
                // tasks with color
                } else if (tasks[taskNum - 1].weeks.includes(j)) {
                    counter++;
                    let order;
                    if ((counter === 1) && (tasks[taskNum - 1].weeks.length === 1)) {
                        order = 'first-of last-of'
                    } else if (counter === tasks[taskNum - 1].weeks.length) {
                        order = 'last-of'
                    } else if (counter === 1){
                        order = 'first-of'
                    }
                    let opacity = tasks[taskNum - 1].done / 100;
                    let style = index % 2 === 0 ? {background: "rgba(255, 153, 153, " + opacity + ")"} : {background: "rgba(179, 217, 255, " + opacity + ")"};
                    blocks.push(<div key={j + '-' + (taskNum - 1)}
                                     className={"Calendar-person__timeline-block " + order}
                                     style={style}></div>)
                // tasks without color
                } else {
                    let style = {background: 'white'}
                    blocks.push(<div key={j + '-' +  (taskNum - 1)} className={"Calendar-person__timeline-block"}
                                     style={style}></div>)
                }
            }
        }
        return blocks;
    }

    _renderWeeks = () => {

        return this.props.weeks.map((week, index) =>
            <div key={index} className="Calendar__header-week">{week} окт.</div>)
    };

    _updateTotalScore = (personIndex, weekIndex, totalScore) => {


    }

    render() {
        return(
            <div className="Calendar">
                <div className="Calendar__header">{this._renderWeeks()}</div>
                {this._renderTimelineRows()}
            </div>

        )
    }
}

export default Calendar;