const initialState = {
  datas: []
}

const todos = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      const datas = initialState.datas
      datas.push({task: action.payload, id: action.payload + "-" + Math.floor(Math.random() * 1000), success: false})
      return {
        ...initialState,
        datas
      }
    }
    case 'UPDATE_TODO': {
      const datas = initialState.datas
      datas.map((val) => {
        if (val.id === action.payload) val.success = !val.success
        return val
      })
      return {
        ...initialState,
        datas
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default todos