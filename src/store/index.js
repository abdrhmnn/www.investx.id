import {createStore} from 'redux'

const initialState = {
    number : 5,
    activeTab: "profile"
}

const reducer = (state = initialState, action ) =>{
    if (action.type === 'HAHA') {
        console.log('yiiihaaa')
        return 'hahaha'
    }

    if (action.type === 'CHANGE_TAB') {
        console.log('ACTAB')
        return {
            ...state,
            activeTab : action.data
        }
    }
    return state
}

const store = createStore(reducer)

export default store