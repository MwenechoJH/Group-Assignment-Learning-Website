let container = document.querySelector('.first');
const next_button = document.getElementById('nxt_btn');
const prev_button = document.getElementById('prev_btn');
let sub_ans = document.querySelector('.sub_ans')
let index = 0;
let score = 0;
const questions = [
    {
        question: "What is the capital of Malawi",
        answer_1: "Blantyre",
        answer_2: "Lilongwe",
        answer_3: "Balaka",
        answer_4: "Kasungu",
        sumbitted_ans: "none",
        correct_ans: 2
    },
    {
        question: "What is your name?",
        answer_1: "1",
        answer_2: "1",
        answer_3: "1",
        answer_4: "1",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "Is malawi a cuountry?",
        answer_1: "2",
        answer_2: "2",
        answer_3: "2",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 2
    },
    {
        question: "What is your age?",
        answer_1: "1",
        answer_2: "32",
        answer_3: "16",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 1
    },
    {
        question: "What is your name?",
        answer_1: "1",
        answer_2: "1",
        answer_3: "1",
        answer_4: "1",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "Is malawi a cuountry?",
        answer_1: "2",
        answer_2: "2",
        answer_3: "2",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 2
    },
    {
        question: "What is your age?",
        answer_1: "1",
        answer_2: "32",
        answer_3: "16",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 1
    },
    {
        question: "What is your name?",
        answer_1: "1",
        answer_2: "1",
        answer_3: "1",
        answer_4: "1",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "Is malawi a cuountry?",
        answer_1: "2",
        answer_2: "2",
        answer_3: "2",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 2
    },
    {
        question: "Is malawi a cuountry?",
        answer_1: "2",
        answer_2: "2",
        answer_3: "2",
        answer_4: "2",
        sumbitted_ans: "none",
        correct_ans: 2
    }
];

const score_array = questions.map(x => 0 );

// score_array[0] = 1;



function sum(){
    sum = 0
    for(i of score_array){
        sum += i;
    }
    score = sum;
}

function load_question(qst_num){
    const my_html = 
        `
            <div class="second">
                <h1> ${questions[qst_num].question}</h1>
                <div class="ans_container">
                    <button class="ans_btn" onclick="check_ans(1)"> ${questions[qst_num].answer_1}</button>
                    <button class="ans_btn" onclick="check_ans(2)"> ${questions[qst_num].answer_2}</button>
                    <button class="ans_btn" onclick="check_ans(3)"> ${questions[qst_num].answer_3}</button>
                    <button class="ans_btn" onclick="check_ans(4)"> ${questions[qst_num].answer_4}</button>
                    <div class="sub_ans"> Selected: ${questions[qst_num].sumbitted_ans}</div>

                </div>
            </div>

        `
        
        container.innerHTML= my_html;
        
}
function check_ans(ans){
    switch(ans){
        case 1:
            questions[index].sumbitted_ans = questions[index].answer_1;
            break;
        case 2:
            questions[index].sumbitted_ans = questions[index].answer_2;
            break;
        case 3:
            questions[index].sumbitted_ans = questions[index].answer_3;
            break;
        case 4:
            questions[index].sumbitted_ans = questions[index].answer_4;
            break;    
    }
    if(ans === questions[index].correct_ans){
        score_array[index] = 1;
    }
    else {
        score_array[index] = 0;
    }
    load_question(index);
}


function next_question(){
    if(index < questions.length-1){
        index ++;
    load_question(index);
    }
    else{
        alert("There are no more questions, Please Submit")
    };
}


function prev_question(){
    if(index > 0){
        index --;
        load_question(index);
    }
    else{
        alert("There's no previous question");
    }
}
next_button.addEventListener('click', next_question);
prev_button.addEventListener('click', prev_question);

load_question(index);

