import React, { Component } from 'react';
import { Container } from 'flux/utils';
// import GeneralStore from '../stores/GeneralStore';
import List from '../List';
import Calendar from '../Calendar';

class TableContainer extends Component {
    // state = {}
    //
    // static getStores() {
    //     return [GeneralStore];
    // }
    //
    // static calculateState(prevState) {
    //     const generalStoreState = GeneralStore.getState();
    //
    //     return {
    //         one: generalStoreState.get('one')
    //     }
    // }

    render() {
        return <div className="Table">
            <List {...this.state}/>
            <Calendar {...this.state}/>
        </div>;
    }
}

// export default Container.create(TableContainer);
export default TableContainer;