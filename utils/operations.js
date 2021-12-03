import symbols from "../constants";
import { evaluate } from "mathjs";

export const resolve = (operation) => {
  try {
    let reg = new RegExp(symbols.percent, "g");
    let res = operation.replace(reg, "/100");
    res = evaluate(res);
    console.log(res);
    if (isNaN(res)) {
      return "Error";
    } else {
      return res;
    }
  } catch (error) {
    return "error";
  }
};
export const rotate = (str) => {
  let arr = str.split("");
  arr.push(arr.shift());
  return arr.join("");
};
