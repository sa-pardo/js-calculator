import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "=":
        // eslint-disable-next-line no-eval
        setInput(eval(input.replace(/([+\-/*])([+\-/*]*)([+/*])/g,"$3")));
        break;
      case "AC":
        setInput("0");
        break;
      case ".":
        let terms = input.split(/[+\-/*]/g);
        if (!terms.pop().includes(".")) {
          setInput(input + e.target.textContent);
        }
        break;
      default:
        if (input === "0") {
          setInput(e.target.textContent);
        } else {
          setInput(input + e.target.textContent);
        }
        break;
    }
  };

  return (
    <div className="App">
      <div id="display">{input}</div>
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

const Button = (props) => {
  return (
    <button id={props.id} onClick={props.handleClick}>
      {props.value}
    </button>
  );
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
    value: "*",
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
