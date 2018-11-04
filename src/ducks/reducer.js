const initialState = {
    user: null,
    loggedIn: false
};


const USER_LOGIN = "USER_LOGIN";
const UPDATE_LOGGIN = "UPDATE_LOGGIN";


export default function reducer(state=initialState, action){
    switch (action.type) {
        case USER_LOGIN: 
            return {...state, user: action.payload};
        case UPDATE_LOGGIN:
            return {...state, loggedIn: action.payload};
        
        default:
            return state;
    }
}

export function userLogin(user) {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

export function updateLoggin(bool) {
    return {
        type: UPDATE_LOGGIN,
        payload: bool
    }
}