// I want when u click the BTN the circle background color changes to the blue
// I want when I refresh the circle keeps blue

// 1. 1 select the circle by class. circle
// 2. select the BTN by its id #circleBTN

const circle = document.querySelector(".circle");
const circleActionBtn = document.querySelector("#circleBTN");



// 3.when I click on the BTN i show a message

// Get the bgColor and changes my circle color
const bgColor = localStorage.getItem("bgColor");

circleActionBtn.addEventListener("click", function (){
    // we are setting color on the localStorage
    localStorage.setItem("bgColor","#f2c381");

    // 4. I want to change the background color of the circle to #f2c381

    circle.style.backgroundColor = "#f2c381";
});

// localStorage

// 1. localStorage

// localStorage.setItem("name","Uzo");

// const name = localStorage.getItem("name");

// console.log("The name is:", name);name