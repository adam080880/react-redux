const initialState = {
  value: 0
}

const counter = (state=initialState, action) => {
  switch(action.type) {
    case 'INCREASE': {
      return {
        ...initialState,
        value: state.value + 1
      }
    }
    case 'DECREASE': {
      return {
        ...initialState,
        value: state.value - 1
      }
    }
    case 'RESET': {
      return {
        ...initialState,
        value: 0
      }
    }
    default: {
      return {
        ...state
      }
    }
      
  }
}

export default counter
