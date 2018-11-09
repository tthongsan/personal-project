const initialState = {
    user: null,
    loggedIn: false,
    loggedOut: true
};


const USER_LOGIN = "USER_LOGIN";
const UPDATE_LOGGIN = "UPDATE_LOGGIN";
const UPDATE_LOGOUT = "UPDATE_LOGOUT";


export default function reducer(state=initialState, action){
    switch (action.type) {
        case USER_LOGIN: 
            return {...state, user: action.payload};
        case UPDATE_LOGGIN:
            return {...state, loggedIn: action.payload};
        case UPDATE_LOGOUT: 
            return {...state, loggedOut: action.payload};
        
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

export function updateLogout(bool){
    return {
        type: UPDATE_LOGOUT,
        payload: bool
    }
}

