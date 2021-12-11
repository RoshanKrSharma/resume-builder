import * as contactActions from '.../actions/acions'
import initialState from './initialState.json'

const contactReducer=(state=initialState.contact,actions)=>{
    switch(action.type)
    {
        case contactActions.SET_CONTACT:
            return {...actions.payload}
            case contactActions.UPDATE_CONTACT:
                return {...action.payload}
        default:return state
    }
}
export default contactReducer;
