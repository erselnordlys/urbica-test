import React, { Component } from 'react';
import { Container } from 'flux/utils';
import GeneralStore from '../../stores/GeneralStore';
import List from '../List';

class ListContainer extends Component {

    state = {}

    static getStores() {
        return [GeneralStore];
    }

    static calculateState(prevState) {
        const generalStoreState = GeneralStore.getState();

        return {
            persons: generalStoreState.get('persons')
        }
    }

    render() {
        return <List {...this.state} />;
    }
}

export default Container.create(ListContainer);
