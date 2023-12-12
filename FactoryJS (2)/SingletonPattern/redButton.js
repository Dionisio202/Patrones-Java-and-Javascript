import singletonCounter from "./counter.js";

const button = document.getElementById("red").addEventListener("click", function (evt) {
    console.log("Total count: "+singletonCounter.increment());
});