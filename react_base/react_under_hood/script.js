
function Counter(){
  
  // return React.createElement("div",null,"Hello world");
  return <div>Hello World</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter/>);