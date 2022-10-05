export const InicialState = {
    modal:false,
    refrescar:''
}

export function Reducer(state, action){
    if(action.type === 'ModalData'){
        return{
            ...state,
             data:action.payload
        }
    }
    if(action.type === 'open'){
        return{
            ...state,
            modal:true
        }
    }
    if(action.type === 'close'){
        return{
            ...state,
            modal:false
        }
    }
    if(action.type === 'Peticion'){
        return{
            ...state,
            portafolio:[...InicialState.portafolio,action.payload]
        }
    }
    if(action.type === 'refrescar'){
        return{
            ...state,
            refrescar:'refrescando'
        }
    }
    return state
}

