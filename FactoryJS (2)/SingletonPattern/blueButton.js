import singletonCounter from "./counter.js";

const button = document.getElementById("blue").addEventListener("click", function (evt) {
    console.log("Total count: "+singletonCounter.increment());
});