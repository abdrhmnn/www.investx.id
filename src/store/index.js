import {createStore} from 'redux'

const initialState = {
    number : 5
}

const reducer = (state = initialState, action ) =>{
    if (action.type === 'INCREAMENT') {
        return 'hahaha'
    }

    return state
}

const store = createStore(reducer)

export default store