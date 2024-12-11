let container = document.querySelector('.first');
// let next_button = document.getElementById('nxt_btn');
// let prev_button = document.getElementById('prev_btn');
const qst_navigation = document.querySelector('.qst_nav')
let sub_ans = document.querySelector('.sub_ans')
let index = 0;
let score = 0;
const questions = [
    {
        question: "What is the capital of Malawi?",
        answer_1: "Blantyre",
        answer_2: "Lilongwe",
        answer_3: "Balaka",
        answer_4: "Kasungu",
        sumbitted_ans: "none",
        correct_ans: 2
    },
    {
        question: "What is the staple food in Malawi?",
        answer_1: "Nsima",
        answer_2: "Rice",
        answer_3: "Chiponde",
        answer_4: "Sweet Potatoes",
        sumbitted_ans: "none",
        correct_ans: 1
    },
    {
        question: "What is the Mother language of Malawians?",
        answer_1: "Chitumbuka",
        answer_2: "English",
        answer_3: "Chichewa",
        answer_4: "French",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "What is the tallest mountain in Malawi?",
        answer_1: "Mulanje Mountain",
        answer_2: "Kilimanjaro Mountain",
        answer_3: "Nyika Platue",
        answer_4: "Zomba Mountain",
        sumbitted_ans: "none",
        correct_ans: 1
    },
    {
        question: "Who was the first president of Malawi?",
        answer_1: "Lazarus Chakwera",
        answer_2: "John Chilembwe",
        answer_3: "Hastings Kamuzu Banda",
        answer_4: "Bingu Mutharika",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "Which is the longest river in Malawi?",
        answer_1: "Nyasa River",
        answer_2: "Dwangwa River",
        answer_3: "Bua River",
        answer_4: "Shire River",
        sumbitted_ans: "none",
        correct_ans: 4
    },
    {
        question: "In which year did Malawi get independece?",
        answer_1: "1988",
        answer_2: "2024",
        answer_3: "1964",
        answer_4: "1891",
        sumbitted_ans: "none",
        correct_ans: 3
    },
    {
        question: "What is the currency of Malawi?",
        answer_1: "Malawi Dollar",
        answer_2: "US Dollar",
        answer_3: "Malawi Rand",
        answer_4: "Malawi Kwacha",
        sumbitted_ans: "none",
        correct_ans: 4
    },
    {
        question: "What is the name of Malawi's Lake?",
        answer_1: "Lake Malawi",
        answer_2: "Lake Tanzania-Malawi",
        answer_3: "Lake Shire",
        answer_4: "2Lake Nyasa",
        sumbitted_ans: "none",
        correct_ans: 1
    },
    {
        question: "In which continent is Malawi Found?",
        answer_1: "Asia",
        answer_2: "Africa",
        answer_3: "South America",
        answer_4: "Australia",
        sumbitted_ans: "none",
        correct_ans: 2
    }
];

let score_array = questions.map(x => 0 );


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
        // btn_state(index);

        container.innerHTML= my_html;
        edit_qst_nav();
        
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


function submission(){
    sum();
    container.innerHTML= `the score is: ${score}`;
    qst_navigation.innerHTML = ""
}


function edit_qst_nav(){
    if(index == 0){
        qst_navigation.innerHTML = 
        `
        <button id="nxt_btn"> Next</button>
        `
        
    } else if( index == score_array.length-1){
        qst_navigation.innerHTML = 
        `
        <button id="prev_btn">Previous</button>
        <button id="sub_btn">Submit</button>

        `
        let prev_button = document.getElementById('prev_btn');
        let sub_button = document.getElementById('sub_btn');
        prev_button.addEventListener('click', prev_question);
        sub_button.addEventListener('click', submission);
    } else{
        qst_navigation.innerHTML = 
        `
        <button id="prev_btn">Previous</button>
        <button id="nxt_btn"> Next</button>
        `
    }
    
    add_events();
        
    
}

function add_events(){
    let next_button = document.getElementById('nxt_btn');
    let prev_button = document.getElementById('prev_btn');
    next_button.addEventListener('click', next_question);
    prev_button.addEventListener('click', prev_question);
}


function sum(){
    sum = 0
    for(i of score_array){
        sum += i;
    }
    score = sum;
}



load_question(index);