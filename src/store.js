import {createStore, combineReducers} from 'redux';
import {reducers as formReducer} from 'redux-form';

const rootReducers = combineReducers({
    form : formReducer
})

const store = createStore(rootReducers);
