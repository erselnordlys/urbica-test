import React, { Component } from 'react';
import { Container } from 'flux/utils';
import GeneralStore from '../../stores/GeneralStore';
import Calendar from '../Calendar';

class CalendarContainer extends Component {

    state = {}

    static getStores() {
        return [GeneralStore];
    }

    static calculateState(prevState) {
        const generalStoreState = GeneralStore.getState();

        return {
            persons: generalStoreState.get('persons'),
            weeks: generalStoreState.get('weeks')

        }
    }

    render() {
        return <Calendar {...this.state} />;
    }
}

export default Container.create(CalendarContainer);
