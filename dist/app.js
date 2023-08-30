const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");
const add = (v1, v2) => v1 + v2;
addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
const LogAge = (age) => {
    return (console.log(`hej mam ${age} lat`));
};
LogAge(30);
LogAge("dwa");
let test;
test = "test";
test = 2;
test = true;
test = [];
