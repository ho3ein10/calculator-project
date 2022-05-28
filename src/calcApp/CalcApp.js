import React, { useState } from "react";
import "./reset.css";
import "./calcStyle.css";

let op;
let setPoint = false;
let firstNumber;
let secNumber;
let result;
let setOp = false;

const CalcApp = () => {
  const [number, setInput] = useState("");
  console.log(number);

  return (
    <div className="main">
      <div className="calcFrame">
        <div className="textBox">
          <p id="textResult">{number}</p>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              setInput((last) => last + "7");
              setOp = false;
            }}
          >
            7
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "8");
              setOp = false;
            }}
          >
            8
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "9");
              setOp = false;
            }}
          >
            9
          </button>

          <button
            onClick={() => {
              if (setOp === false) {
                op = "/";
                firstNumber = Number(number);
                setPoint = false;
                setInput("");
                setOp = true;
              }
            }}
          >
            &#xf7;
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "4");
              setOp = false;
            }}
          >
            4
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "5");
              setOp = false;
            }}
          >
            5
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "6");
              setOp = false;
            }}
          >
            6
          </button>

          <button
            onClick={() => {
              if (setOp === false) {
                op = "*";
                firstNumber = Number(number);
                setPoint = false;
                setInput("");
                setOp = true;
              }
            }}
          >
            &#xd7;
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "1");
              setOp = false;
            }}
          >
            1
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "2");
              setOp = false;
            }}
          >
            2
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "3");
              setOp = false;
            }}
          >
            3
          </button>

          <button
            onClick={() => {
              if (setOp === false) {
                op = "-";
                firstNumber = Number(number);
                setPoint = false;
                setInput("");
                setOp = true;
              }
            }}
          >
            -
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "0");
              setOp = false;
            }}
          >
            0
          </button>

          <button
            onClick={() => {
              if (setPoint === false) {
                setInput((last) => last + ".");
                setPoint = true;
                setOp = false;
              }
            }}
          >
            .
          </button>

          <button
            onClick={() => {
              secNumber = Number(number);
              switch (op) {
                case "+":
                  result = firstNumber + secNumber;
                  break;
                case "-":
                  result = firstNumber - secNumber;
                  break;
                case "*":
                  result = firstNumber * secNumber;
                  break;
                case "/":
                  result = firstNumber / secNumber;
                  break;
                default:
                  result = number;
              }

              setPoint = true;
              setOp = false;
              op = "";
              setInput(result.toString());
            }}
          >
            =
          </button>

          <button
            onClick={() => {
              if (setOp === false) {
                op = "+";
                firstNumber = Number(number);
                setPoint = false;
                setInput("");
                setOp = true;
              }
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              setInput((last) => last + "00");
              setOp = false;
            }}
          >
            00
          </button>

          <button
            id="del"
            onClick={() => {
              let len = number.length;
              let lastDigit = number.toString().substr(len - 1, len);
              lastDigit === "." && (setPoint = false);
              if (typeof number === "string") {
                len > 1
                  ? setInput(
                      (last) => (last = number.toString().substr(0, len - 1))
                    )
                  : setInput(0);
              }
            }}
          >
            DEL
          </button>
          <button
            id="ac"
            onClick={() => {
              setPoint = false;
              op = "";
              firstNumber = 0;
              secNumber = 0;
              result = 0;
              setOp = false;
              setInput("");
            }}
          >
            AC
          </button>

          <button
            onClick={() => {
              setInput((last) => last * -1 + "");
            }}
          >
            &#xb1;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalcApp;
