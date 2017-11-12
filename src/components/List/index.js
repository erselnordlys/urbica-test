import React, { Component } from 'react';
// import ActionCreators from 'actions/ActionCreators';
import './style.css';

class List extends Component {

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

    _renderPersonBlock = () => {
        return this.state.persons.map((person, index) => {
            let tasks = person.tasks.map((task, index) => {
                return (
                    <div key={index} className="List-person__task">
                        <div key={task['percent-done'].toString()}
                             className="List-person__task-percent">{task['percent-done']} %
                        </div>
                        <div key={task.title} className="List-person__task-title">{task.title}</div>
                    </div>
                )
            });

            return(
                <div key={index} className="List__person">
                    <div className="List-person__name">{person.name}</div>
                    {tasks}
                </div>
            )
        });
    };

    render() {
        return(
            <div className="List">

                <div className="List__header">
                        <div className="List__header-projects"><span className="List__header-title">Проекты</span></div>
                        <div className="List__header-people"><span className="List__header-title List__header-title--active">Люди</span></div>
                </div>
                {this._renderPersonBlock()}
            </div>

        )
    }
}

export default List;