function reducer(state = {theme : 'gray'}, action) {
    console.log('REDUCER CALLED >>>', action)
    switch(action.type) {
        case 'UPDATED_THEME' : {
            return { ...state, theme : action.data}
        }
        case 'REMOVED_THEME' : {
            return { ...state, theme : null}
        }
        default : {
            return state
        }
    }

}
export default reducer