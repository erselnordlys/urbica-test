import React, { Component } from 'react';
// import ActionCreators from 'actions/ActionCreators';
import './style.css';

class Calendar extends Component {

    state = {
        computedPersonsData: {},
        weeks: ['11 - 18', '20 - 27', '29 - 06', '08 - 25', '28-06'],
        persons: [{
            'name': 'Тая',
            'tasks': [{'title': 'Стили карты: анализ требований', 'done': 25, 'weeks': [0, 1] },
                    {'title': 'Музей: визуализация данных', 'done': 50, 'weeks': [1 , 2]},
                    {'title': 'Платформа: тестовые слои', 'done': 25, 'weeks': [2, 3]}]
            },
            {
                'name': 'Степан',
                'tasks': [{'title': 'Стили карты: анализ требований', 'done': 75},
                    {'title': 'Музей: визуализация данных', 'done': 100},
                    {'title': 'Платформа: тестовые слои', 'done': 25}]
            }],
    };

    _renderTimelineRows = () => {
        let result = [];
        let isTotal = false;
        let paddingRow = {};
        this.state.persons.map((person, index) => {
            let rows = [];

            for (let j = 0; j < person.tasks.length + 1; j++) {
                j === 0 ? isTotal = true : isTotal = false;
                j === person.tasks.length  ? paddingRow = {paddingBottom: 20} : paddingRow = null;
                rows.push(<div key={person.name + j} className={"Calendar-person__timeline-row"} style={paddingRow}> {this._countTotalScore(index, isTotal,j)}</div>)
            }
            result.push(<div className="Calendar-person__timeline-rows">{rows}</div>);

        });


        return result;
    };

    _countTotalScore = (index, isTotal, taskNum) => {
        let weeksNum = this.state.weeks.length;
        let tasks = this.state.persons[0].tasks;
        console.log('b')
        let blocks = []
        if (isTotal) {
            for (let i = 0; i < weeksNum; i++) {
                let total = 0;
                for (let j = 0; j < tasks.length; j++) {
                    if (tasks[j].weeks.includes(i)) {
                        total += tasks[j].done;
                    }
                }
                let style = {opacity: total/100}
                blocks.push(<div key={i} className="Calendar-person__timeline-block" style={style}></div>)
            }
        } else {
                for (let j = 0; j < weeksNum; j++) {
                    console.log(tasks[taskNum - 1].weeks)
                    if (tasks[taskNum - 1].weeks.includes(j)) {
                        let style = {opacity: tasks[taskNum - 1].done / 100};
                        let colorful =  style.opacity > 0 ? 'Calendar-person__timeline-block--color' : '';
                        blocks.push(<div key={taskNum - 1} className={"Calendar-person__timeline-block " + colorful} style={style}></div>)
                    } else {
                        blocks.push(<div key={taskNum - 1} className={"Calendar-person__timeline-block"}></div>)
                    }
                }
        }
        return blocks;
    }

    _renderWeeks = () => {

        return this.state.weeks.map((week, index) =>
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