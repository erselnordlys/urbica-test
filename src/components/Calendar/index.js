import React, { Component } from 'react';
// import ActionCreators from 'actions/ActionCreators';
import './style.css';

class Calendar extends Component {

    state = {
        weeks: ['11 - 18', '20 - 27', '29 - 06', '08 - 25', '11 - 18', '20 - 27', '29 - 06', '08 - 25'],
        persons: [{
            'name': 'Тая',
            'tasks': [{'title': 'Стили карты: анализ требований', 'percent-done': 25},
                    {'title': 'Музей: визуализация данных', 'percent-done': 50},
                    {'title': 'Платформа: тестовые слои', 'percent-done': 25}]
            },
            {
                'name': 'Степан',
                'tasks': [{'title': 'Стили карты: анализ требований', 'percent-done': 75},
                    {'title': 'Музей: визуализация данных', 'percent-done': 100},
                    {'title': 'Платформа: тестовые слои', 'percent-done': 25}]
            }],
    };

    _renderTimelineRows = () => {

        let blocks = [];
        for (let i = 0; i < this.state.weeks.length; i++) {
            blocks.push(<div key={i} className="Calendar-person__timeline-block"></div>)
        }

        let rows = [];
        this.state.persons.map((person) => {
            for (let j = 0; j < person.tasks.length + 1; j++) {
                rows.push( <div key={person.name + j} className="Calendar-person__timeline-row"> {blocks} </div>)
            }
        });

        return rows;
    };

    _renderWeeks = () => {

        return this.state.weeks.map((week, index) =>
            <div key={index} className="Calendar__header-week">{week} окт.</div>)
    };

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