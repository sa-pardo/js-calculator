import React from 'react'

function App() {
  return (
    <div className="App">
      {buttons.map((button) => {
        return <Button id={button.id} value={button.value}/>;
      })}
    </div>
  );
}

export default App;

const Button = (props) => {
return <button id={props.id}>{props.value}</button>;
};

const buttons = [
  {
    id: "zero",
    value: "0",
    color: "",
  },
  {
    id: "one",
    value: "1",
    color: "",
  },
  {
    id: "two",
    value: "2",
    color: "",
  },
  {
    id: "three",
    value: "3",
    color: "",
  },
  {
    id: "four",
    value: "4",
    color: "",
  },
  {
    id: "five",
    value: "5",
    color: "",
  },
  {
    id: "six",
    value: "6",
    color: "",
  },
  {
    id: "seven",
    value: "7",
    color: "",
  },
  {
    id: "eight",
    value: "8",
    color: "",
  },
  {
    id: "nine",
    value: "9",
    color: "",
  },
  {
    id: "equals",
    value: "=",
    color: "",
  },
  {
    id: "add",
    value: "+",
    color: "",
  },
  {
    id: "subtract",
    value: "-",
    color: "",
  },
  {
    id: "divide",
    value: "/",
    color: "",
  },
  {
    id: "multiply",
    value: "x",
    color: "",
  },
  {
    id: "decimal",
    value: ".",
    color: "",
  },
  {
    id: "clear",
    value: "AC",
    color: "",
  },
];
