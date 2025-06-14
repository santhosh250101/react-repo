import { useReducer } from "react"

function App() {
  
  const countReducer = (state,action)=>{


    switch(action.type){
      case "INCREMENT":
        return {
          ...state,
          count: state.count+1
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count-1
        };
      default:
        return {...state}
    }
  }

  const initialState = {
    count: 1
  }
  const [state,dispatch] = useReducer(countReducer,initialState);

  return (
    <>
      <div className="container">
        Count is {state.count}
      </div>
      <div className="btn-region">
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Add</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Sub</button>
      </div>
    </>

  )
}

export default App
