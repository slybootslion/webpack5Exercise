import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

const t = require("./test.txt");

console.log(t.default);
const span = document.createElement("span");
span.innerHTML = t.default;
document.body.appendChild(span);

ReactDOM.render(<h1>hello</h1>, document.querySelector("#root"));

const sum = (n1, n2) => n1 + n2;

function readonly(target, key, descriptor) {
  descriptor.writable = false;
}

class Person {
  @readonly PI = 3.14;
}

const p = new Person();
p.PI = 3.15;
console.log(p);

console.log("err");

const promise = new Promise((resolve) => resolve(1));
