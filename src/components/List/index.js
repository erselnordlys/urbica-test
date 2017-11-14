import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class List extends Component {

    static PropTypes = {
        persons: PropTypes.array,
        weeks: PropTypes.array
    }

    _renderPersonBlock = () => {
        return this.props.persons.map((person, index) => {
            let tasks = person.tasks.map((task, index) => {
                return (
                    <div key={index} className="List-person__task">
                        <div key={task.done.toString()}
                             className="List-person__task-percent">{task.done} %
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