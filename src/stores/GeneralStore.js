import Dispatcher from '../core/Dispatcher';
import MyReduceStore from '../core/MyReduceStore';
import { Map, List } from 'immutable';


class GeneralStore extends MyReduceStore {
    getInitialState() {
        return Map({
            persons: [{
                'name': 'Тая',
                'tasks': [{'title': 'Стили карты: анализ требований', 'done': 25, 'weeks': [0, 1, 2] },
                    {'title': 'Музей: визуализация данных', 'done': 50, 'weeks': [1 , 2]},
                    {'title': 'Платформа: тестовые слои', 'done': 25, 'weeks': [2, 3]}]
            },
                {
                    'name': 'Степан',
                    'tasks': [{'title': 'Стили карты: анализ требований', 'done': 100, 'weeks': [0]},
                        {'title': 'Код ревью карты музей', 'done': 20, 'weeks': [3, 4]},
                        {'title': 'Отпуск', 'done': 100, 'weeks': [1, 2], 'tag': 'vacation', 'longitude': '20 окт - 06 ноя'}],
                }],
            weeks: ['11 - 18', '20 - 27', '29 - 06', '08 - 25', '28-06'],

        })
    }

    reduce(state, action) {

        return state;
    }
}

export default new GeneralStore(Dispatcher);
