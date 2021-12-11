import * as educationActions from '.../actions/acions'
import initialState from './initialState.json'

const educationReducer=(state=initialState.education,actions)=>{
    switch(action.type)
    {
        case educationActions.SET_EDUCATION:
            return {...action.payload}
            case documentActions.UPDATE_:EDUCATION
                return {...action.payload}
        default:return state
    }
}
export default educationReducer;
