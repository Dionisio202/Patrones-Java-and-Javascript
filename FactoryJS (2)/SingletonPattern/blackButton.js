import singletonCounter from "./counter.js";

const button = document.getElementById("black").addEventListener("click", function (evt) {
    console.log("Total count: "+singletonCounter.decrement());
});