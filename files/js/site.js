let questions = [{
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Preload Unit",
            "None of these",
            "Central Processing Unit"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "HTML stands for -",
        answer: "HyperText Markup Language",
        options: [
            "HighText Machine Language",
            "HyperText and links Markup Language",
            "HyperText Markup Language",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answer: "HTML, Head, Title, Body",
        options: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "HTML, Head, Title, script"
        ]
    },
    {
        id: 6,
        question: "Which of the following tag is used to insert a line-break in HTML?",
        answer: "br tag",
        options: [

            "anchor tag",
            "pre tag",
            "b tag",
            "br tag"
        ]
    },
    {
        id: 7,
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answer: "ul tag",
        options: [
            "ul tag",
            "ol tag",
            "li tag",
            "None of these"
        ]
    },
    {
        id: 8,
        question: "Which character is used to represent the closing of a tag in HTML?",
        answer: "/",
        options: [
            "? ",
            "!",
            "/",
            "."
        ]
    },
    {
        id: 9,
        question: "input tag is -",
        answer: "an empty tag.",
        options: [
            "a format tag.",
            "an empty tag.",
            "All of the above",
            "None of these"
        ]
    },
    {
        id: 10,
        question: "The hr tag in HTML is used for -",
        answer: "horizontal ruler",
        options: [
            "header ruler",
            "vertical ruler",
            "new paragraph",
            "horizontal ruler"
        ]
    }
];

let question_count = 0;
let points = 0;

window.onload = function() {
    show(question_count);

};

function next() {


    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
    }


    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }


    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}