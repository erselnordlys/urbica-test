import { ReduceStore } from 'flux/utils';
import { Map } from 'immutable';

class MyReduceStore extends ReduceStore {

    getInitialState() {
        return Map({});
    }

    updateState(state, payload = {}) {
        return state.withMutations(state => {
            for (let key in payload) {
                let value = payload[key];
                state.set(key, value);
            }

            // Drop errors to default
            if (state.has('errors')) {
                state.set('errors', Map({}));
            }
        });
    }

    isIncludeAttrInNormalizedState(attrType, attrValue) {
        switch (attrType) {
            case 'list':
            case 'checkbox':
                if (attrValue === 0) {
                    return false;
                }
                break;
            case 'text':
                if (attrValue === 0 || attrValue === '') {
                    return false;
                }
                break;
        }

        return true;
    }

    relateErrorsWithStore(state, errors = {}) {
        let relatedErrors = {};

        Object
            .keys(errors)
            .forEach((name, index) => {
                if (!state.has(name)) {
                    return false;
                }

                relatedErrors[name] = errors[name];
            });

        return relatedErrors;
    }

    denormalizeState(state, normalizedState) {
        state = state.withMutations(state => {
            Object
                .keys(normalizedState)
                .forEach((name, index) => {
                    let value = normalizedState[name];

                    if (value === null) {
                        return false;
                    }

                    if (typeof normalizedState[name] === 'object') {
                        value = Map(value);
                    }

                    if (!state.has(name)) {
                        return false;
                    }

                    state = state.set(name, value);
                });
        });

        if (typeof normalizedState.common_attributes === 'object' &&
            Object.keys(normalizedState.common_attributes).length > 0) {
            state = state.withMutations(state => {
                for (let id in normalizedState.common_attributes) {
                    const value = normalizedState.common_attributes[id];
                    const attr = this.getAttrDataById('common_attributes', id);

                    if (attr && state.has(attr.name)) {
                        state.set(attr.name, value);
                    }
                }
            });
        }

        return state;
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
}

export default MyReduceStore;
