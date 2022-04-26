let text_1 = "К основным параметрам условий труда относят следующие параметры:";
let text1_q1 = "Интенсивность нагревания организма";
let text2_q1 = "Атмосферное давление";
let text3_q1 = "Деньги";
let text4_q1 = "Настроение";
let question1 = new question_checkbox(1,text_1,text1_q1,text2_q1,text3_q1,text4_q1);

let text_2 = "Температура воздуха в помещении должна иметь следющие значения:";
let text1_q2 = "В теплый период года от 25 до 30 градусов по Цельсию";
let text2_q2 = "В холодный период года от -10 до 0 градусов по Цельсию";
let text3_q2 = "В теплый период года от 18 до 22 градусов по Цельсию";
let text4_q2 = "В холодный период года от 20 до 22 градусов по Цельсию";
let question2 = new question_checkbox(2,text_2,text1_q2,text2_q2,text3_q2,text4_q2);

let text_3 = "Максимальная температура(в градусах) при которой может работать человек:";
let question3 = new question_textbox(3,text_3);

let text_4 = "Температура воздуха на откытом воздухе в теплый период времени во время работы:";
let text1_q4 = "от 0 до 7";
let text2_q4 = "от 7 до 10";
let text3_q4 = "от 18 до 22";
let text4_q4 = "от 33 до 66";
let question4 = new list(4, text_4, text1_q4, text2_q4, text3_q4, text4_q4);

let text_5 = "Выберите правильное определение";
let text1_q5 = "Это отдых человека";
let text2_q5 = "Это жизнь";
let text3_q5 = "Это просто существование";
let text4_q5 = "Это кажднодневная деятельность и отдых человека";
let question5 = new question_radio(5,text_5, text1_q5,text2_q5,text3_q5,text4_q5);

let obj1 = question1.number;
let obj2 = question2.number;
let obj3 = question3.number;
let obj4 = question4.number;
let obj5 = question5.number;

let obj_number;

let arr = [obj1,obj2,obj3, obj4, obj5];

function mixing_questions(){
    arr.sort(() => Math.random() - 0.5);
    question1.change_number = arr[0];
    question2.change_number = arr[1];
    question3.change_number = arr[2];
    question4.change_number = arr[3];
    question5.change_number = arr[4];
    console.log(arr);
}

let arr2 = [1, 2, 3, 4];
let arr_for_q5 = [text1_q4, text2_q4, text3_q4, text4_q4];
function mixing_anwers(){
    arr2.sort(() => Math.random() - 0.5);
    console.log(arr2);
    question1.change_answer_order = arr2;
    question2.change_answer_order = arr2;
    question5.change_answer_order = arr2;
    arr_for_q5.sort(() => Math.random() - 0.5);
    question4.change_answer_order = arr_for_q5;
}


function creating_page2(){
    let block = document.getElementById("block1");
    block.remove();

    let body = document.getElementById("body_td");
    let page2 = document.createElement("div");
    page2.id = "page_2";
    let timer = document.createElement("div");
    timer.id = "timer";


    let buttons = document.createElement("div");
    buttons.id = "buttons";
    let question_button1 = document.createElement("button");
    let question_button2 = document.createElement("button");
    let question_button3 = document.createElement("button");
    let question_button4 = document.createElement("button");
    let question_button5 = document.createElement("button");

    question_button1.id = "button_question1";
    question_button2.id = "button_question2";
    question_button3.id = "button_question3";
    question_button4.id = "button_question4";
    question_button5.id = "button_question5";

    question_button1.setAttribute("type","submit");
    question_button2.setAttribute("type","submit");
    question_button3.setAttribute("type","submit");
    question_button4.setAttribute("type","submit");
    question_button5.setAttribute("type","submit");

    question_button1.setAttribute("onclick","button1()");
    question_button2.setAttribute("onclick","button2()");
    question_button3.setAttribute("onclick","button3()");
    question_button4.setAttribute("onclick","button4()");
    question_button5.setAttribute("onclick","button5()");

    question_button1.innerHTML = "1";
    question_button2.innerHTML = "2";
    question_button3.innerHTML = "3";
    question_button4.innerHTML = "4";
    question_button5.innerHTML = "5";

    question_button1.style.backgroundColor = "red";

   if(question1.number === 1){
       question1.create_headline(page2);
       question1.create_choices(page2);
       obj_number = question1.number;
   }

    if(question2.number === 1){
        question2.create_headline(page2);
        question2.create_choices(page2);
        obj_number = question2.number;
    }

    if(question3.number === 1){
        question3.create_headline(page2);
        question3.create_textbox(page2);
        obj_number = question3.number;
    }

    if(question4.number === 1){
        question4.create_headline(page2);
        question4.create_list(page2);
        obj_number = question4.number;
    }

    if(question5.number === 1){
        question5.create_headline(page2);
        question5.create_choices(page2);
        obj_number = question5.number;
    }


    let finish = document.createElement("button");
    finish.id = "button_page2";
    finish.setAttribute("type","submit");
    finish.setAttribute("onclick","complete()");
    finish.innerHTML = "Завершить тест";
    buttons.appendChild(question_button1);
    buttons.appendChild(question_button2);
    buttons.appendChild(question_button3);
    buttons.appendChild(question_button4);
    buttons.appendChild(question_button5);
    page2.appendChild(buttons);
    page2.appendChild(timer);
    body.appendChild(page2);
    body.appendChild(finish);
}

function checkbox1(){
        switch (obj_number){
            case question1.number:
                question1.check_checkbox1();
                break;
            case question2.number:
                question2.check_checkbox1();
                break;
        }
}

function checkbox2(){
    switch (obj_number){
        case question1.number:
            question1.check_checkbox2();
            break;
        case question2.number:
            question2.check_checkbox2();
            break;
    }
}

function checkbox3(){
    switch (obj_number){
        case question1.number:
            question1.check_checkbox3();
            break;
        case question2.number:
            question2.check_checkbox3();
            break;
    }
}

function checkbox4(){
    switch (obj_number){
        case question1.number:
            question1.check_checkbox4();
            break;
        case question2.number:
            question2.check_checkbox4();
            break;
    }
}

function button_textbox2(){
    question3.check_value();
}

function button_list12(){
    question4.check_value();
}

function check_radio1(){
    question5.value = document.getElementById("radio1").value * 1;
    question5.check_value();
}

function check_radio2(){
    question5.value = document.getElementById("radio2").value * 1;
    question5.check_value();
}

function check_radio3(){
    question5.value = document.getElementById("radio3").value * 1
    question5.check_value();
}

function check_radio4(){
    question5.value = document.getElementById("radio4").value * 1;
    question5.check_value();
}

function delete_question(){
    switch (obj_number){
        case question1.number:
            question1.delete_headline();
            question1.delete_choices();
            break;
        case question2.number:
            question2.delete_headline();
            question2.delete_choices();
            break;
        case question3.number:
            question3.delete_headline();
            question3.delete_textbox();
            break;
        case question4.number:
            question4.delete_headline();
            question4.delete_list();
            break;
        case question5.number:
            question5.delete_headline();
            question5.delete_choices();
            break;
    }
}

function compliant_question(number){
    let page2 = document.getElementById("page_2");

    if(question1.number === number){
        delete_question();
        question1.create_headline(page2);
        question1.create_choices(page2);

        if(question1.checkbo1 == 0 && question1.checkbo2 == 0 && question1.checkbo3 == 0 && question1.checkbo4 == 0){
            let button = document.getElementById("button_question" + question1.number);
            button.style.backgroundColor = "red";
        }
        question1.check_results();
        obj_number = question1.number;
    }

    if(question2.number === number){
        delete_question();
        question2.create_headline(page2);
        question2.create_choices(page2);

        if(question2.checkbo1 == 0 && question2.checkbo2 == 0 && question2.checkbo3 == 0 && question2.checkbo4 == 0){
            let button = document.getElementById("button_question" + question2.number);
            button.style.backgroundColor = "red";
        }
        question2.check_results();
        obj_number = question2.number;
    }

    if(question3.number === number){
        delete_question();
        question3.create_headline(page2);
        question3.create_textbox(page2);
        textbox.value = question3.value_textbox;
        question3.check_value();
        obj_number = question3.number;
    }

    if(question4.number === number){
        delete_question();
        question4.create_headline(page2);
        question4.create_list(page2);
        let list = document.getElementById("list");
        list.value = question4.value_list;
        question4.check_value();
        obj_number = question4.number;
    }

    if(question5.number === number){
        delete_question();
        question5.create_headline(page2);
        question5.create_choices(page2);
        question5.check_value();
        obj_number = question5.number;
    }
}


function button1(){
    compliant_question(1);
}

function button2(){
    compliant_question(2);
}

function button3(){
    compliant_question(3);
}

function button4(){
    compliant_question(4);
}

function button5(){
    compliant_question(5);
}


function complete(){
    let page2 = document.getElementById("page_2");
    let finish = document.getElementById("button_page2");

    page2.remove();
    finish.remove();

    let body = document.getElementById("body_td")
    let block_table = document.createElement("div");
    block_table.id ="block_table"
    let table = document.createElement("tables");
    table.id = "tables";
    let headline_row = document.createElement("tr");
    let headline_nq = document.createElement("th");
    let headline_your_answers = document.createElement("th");
    let headline_right_answers = document.createElement("th");
    let row1 = document.createElement("tr");
    let row2 = document.createElement("tr");
    let row3 = document.createElement("tr");
    let row4 = document.createElement("tr");
    let row5 = document.createElement("tr");
    let number_question1 = document.createElement("td");
    let number_question2 = document.createElement("td");
    let number_question3 = document.createElement("td");
    let number_question4 = document.createElement("td");
    let number_question5 = document.createElement("td");
    let your_answer1 = document.createElement("td")
    let your_answer2 = document.createElement("td");
    let your_answer3 = document.createElement("td");
    let your_answer4 = document.createElement("td");
    let your_answer5 = document.createElement("td");
    let right_answer1 = document.createElement("td");
    let right_answer2 = document.createElement("td");
    let right_answer3 = document.createElement("td");
    let right_answer4 = document.createElement("td");
    let right_answer5 = document.createElement("td");

    headline_nq.innerHTML = "Номер вопроса";
    headline_your_answers.innerHTML = "Ваш ответ";
    headline_right_answers.innerHTML = "Правильный ответ";
    number_question1.innerHTML = "1";
    number_question2.innerHTML = "2";
    number_question3.innerHTML = "3";
    number_question4.innerHTML = "4";
    number_question5.innerHTML = "5";

    switch (arr[0]){
        case 1:
            right_answer1.innerHTML = "1,2";
            let arr_result1 = [];
            let j = 0;

            for(let i = 0; i < 4; i++){
                if(question1.result[i] != 0){
                    arr_result1[j++] = question1.result[i];
                }
            }

            if(arr_result1[0] === undefined && arr_result1[1] === undefined){
                your_answer1.innerHTML = "";
            } else{
                your_answer1.innerHTML = "" + arr_result1[0] + "," + arr_result1[1];
            }

            if(arr_result1.includes(1) && arr_result1.includes(2)){
                row1.setAttribute("bgcolor","green");
            } else row1.setAttribute("bgcolor","red");

            break;
        case 2:
            right_answer1.innerHTML = "3,4";
            let arr_result2 = [];
            let k = 0;

            for(let i = 0; i < 4; i++){
                if(question2.result[i] != 0){
                    arr_result2[k++] = question2.result[i];
                }
            }

            if(arr_result2[0] === undefined && arr_result2[1] === undefined){
                your_answer1.innerHTML = "";
            } else{
                your_answer1.innerHTML = "" + arr_result2[0] + "," + arr_result2[1];
            }

            if(arr_result2.includes(3) && arr_result2.includes(4)){
                row1.setAttribute("bgcolor","green");
            } else row1.setAttribute("bgcolor","red");

            break;
        case 3:
            right_answer1.innerHTML = "28";
            your_answer1.innerHTML = question3.value_textbox;

            if(question3.value_textbox === "28" ){
                row1.setAttribute("bgcolor","green");
            } else row1.setAttribute("bgcolor","red");
            break;
        case 4:
            right_answer1.innerHTML = "от 18 до 22";
            your_answer1.innerHTML = question4.value_list;

            if(question4.value_list === "от 18 до 22"){
                row1.setAttribute("bgcolor","green");
            } else row1.setAttribute("bgcolor","red");
            break;
        case 5:
            right_answer1.innerHTML = "4";
            if(question5.results[0] === undefined){
                your_answer1.innerHTML = "";
            } else{
                your_answer1.innerHTML = "" + question5.results[0];
            }

            if (question5.results[0] === 4){
                row1.setAttribute("bgcolor","green");
            } else row1.setAttribute("bgcolor","red");
            break;
    }

    switch (arr[1]){
        case 1:
            right_answer2.innerHTML = "1,2";
            let arr_result1 = [];
            let j = 0;

            for(let i = 0; i < 4; i++){
                if(question1.result[i] != 0){
                    arr_result1[j++] = question1.result[i];
                }
            }

            if(arr_result1[0] === undefined && arr_result1[1] === undefined){
                your_answer2.innerHTML = "";
            } else{
                your_answer2.innerHTML = "" + arr_result1[0] + "," + arr_result1[1];
            }

            if(arr_result1.includes(1) && arr_result1.includes(2)){
                row2.setAttribute("bgcolor","green");
            } else row2.setAttribute("bgcolor","red");

            break;
        case 2:
            right_answer2.innerHTML = "3,4";
            let arr_result2 = [];
            let k = 0;

            for(let i = 0; i < 4; i++){
                if(question2.result[i] != 0){
                    arr_result2[k++] = question2.result[i];
                }
            }

            if(arr_result2[0] === undefined && arr_result2[1] === undefined){
                your_answer2.innerHTML = "";
            } else{
                your_answer2.innerHTML = "" + arr_result2[0] + "," + arr_result2[1];
            }

            if(arr_result2.includes(3) && arr_result2.includes(4)){
                row2.setAttribute("bgcolor","green");
            } else row2.setAttribute("bgcolor","red");

            break;
        case 3:
            right_answer2.innerHTML = "28";
            your_answer2.innerHTML = question3.value_textbox;

            if(question3.value_textbox === "28" ){
                row2.setAttribute("bgcolor","green");
            } else row2.setAttribute("bgcolor","red");
            break;
        case 4:
            right_answer2.innerHTML = "от 18 до 22";
            your_answer2.innerHTML = question4.value_list;

            if(question4.value_list === "от 18 до 22"){
                row2.setAttribute("bgcolor","green");
            } else row2.setAttribute("bgcolor","red");
            break;
        case 5:
            right_answer2.innerHTML = "4";
            if(question5.results[0] === undefined){
                your_answer2.innerHTML = "";
            } else{
                your_answer2.innerHTML = "" + question5.results[0];
            }

            if (question5.results[0] === 4){
                row2.setAttribute("bgcolor","green");
            } else row2.setAttribute("bgcolor","red");
            break;
    }

    switch (arr[2]){
        case 1:
            right_answer3.innerHTML = "1,2";
            let arr_result1 = [];
            let j = 0;

            for(let i = 0; i < 4; i++){
                if(question1.result[i] != 0){
                    arr_result1[j++] = question1.result[i];
                }
            }

            if(arr_result1[0] === undefined && arr_result1[1] === undefined){
                your_answer3.innerHTML = "";
            } else{
                your_answer3.innerHTML = "" + arr_result1[0] + "," + arr_result1[1];
            }

            if(arr_result1.includes(1) && arr_result1.includes(2)){
                row3.setAttribute("bgcolor","green");
            } else row3.setAttribute("bgcolor","red");

            break;
        case 2:
            right_answer3.innerHTML = "3,4";
            let arr_result2 = [];
            let k = 0;

            for(let i = 0; i < 4; i++){
                if(question2.result[i] != 0){
                    arr_result2[k++] = question2.result[i];
                }
            }

            if(arr_result2[0] === undefined && arr_result2[1] === undefined){
                your_answer3.innerHTML = "";
            } else{
                your_answer3.innerHTML = "" + arr_result2[0] + "," + arr_result2[1];
            }

            if(arr_result2.includes(3) && arr_result2.includes(4)){
                row3.setAttribute("bgcolor","green");
            } else row3.setAttribute("bgcolor","red");

            break;
        case 3:
            right_answer3.innerHTML = "28";
            your_answer3.innerHTML = question3.value_textbox;

            if(question3.value_textbox === "28" ){
                row3.setAttribute("bgcolor","green");
            } else row3.setAttribute("bgcolor","red");
            break;
        case 4:
            right_answer3.innerHTML = "от 18 до 22";
            your_answer3.innerHTML = question4.value_list;

            if(question4.value_list === "от 18 до 22"){
                row3.setAttribute("bgcolor","green");
            } else row3.setAttribute("bgcolor","red");
            break;
        case 5:
            right_answer3.innerHTML = "4";
            if(question5.results[0] === undefined){
                your_answer3.innerHTML = "";
            } else{
                your_answer3.innerHTML = "" + question5.results[0];
            }

            if (question5.results[0] === 4){
                row3.setAttribute("bgcolor","green");
            } else row3.setAttribute("bgcolor","red");
            break;
    }

    switch (arr[3]){
        case 1:
            right_answer4.innerHTML = "1,2";
            let arr_result1 = [];
            let j = 0;

            for(let i = 0; i < 4; i++){
                if(question1.result[i] != 0){
                    arr_result1[j++] = question1.result[i];
                }
            }

            if(arr_result1[0] === undefined && arr_result1[1] === undefined){
                your_answer4.innerHTML = "";
            } else{
                your_answer4.innerHTML = "" + arr_result1[0] + "," + arr_result1[1];
            }

            if(arr_result1.includes(1) && arr_result1.includes(2)){
                row4.setAttribute("bgcolor","green");
            } else row4.setAttribute("bgcolor","red");

            break;
        case 2:
            right_answer4.innerHTML = "3,4";
            let arr_result2 = [];
            let k = 0;

            for(let i = 0; i < 4; i++){
                if(question2.result[i] != 0){
                    arr_result2[k++] = question2.result[i];
                }
            }

            if(arr_result2[0] === undefined && arr_result2[1] === undefined){
                your_answer4.innerHTML = "";
            } else{
                your_answer4.innerHTML = "" + arr_result2[0] + "," + arr_result2[1];
            }

            if(arr_result2.includes(3) && arr_result2.includes(4)){
                row4.setAttribute("bgcolor","green");
            } else row4.setAttribute("bgcolor","red");

            break;
        case 3:
            right_answer4.innerHTML = "28";
            your_answer4.innerHTML = question3.value_textbox;

            if(question3.value_textbox === "28" ){
                row4.setAttribute("bgcolor","green");
            } else row4.setAttribute("bgcolor","red");
            break;
        case 4:
            right_answer4.innerHTML = "от 18 до 22";
            your_answer4.innerHTML = question4.value_list;

            if(question4.value_list === "от 18 до 22"){
                row4.setAttribute("bgcolor","green");
            } else row4.setAttribute("bgcolor","red");
            break;
        case 5:
            right_answer4.innerHTML = "4";
            if(question5.results[0] === undefined){
                your_answer4.innerHTML = "";
            } else{
                your_answer4.innerHTML = "" + question5.results[0];
            }

            if (question5.results[0] === 4){
                row4.setAttribute("bgcolor","green");
            } else row4.setAttribute("bgcolor","red");
            break;
    }

    switch (arr[4]){
        case 1:
            right_answer5.innerHTML = "1,2";
            let arr_result1 = [];
            let j = 0;

            for(let i = 0; i < 4; i++){
                if(question1.result[i] != 0){
                    arr_result1[j++] = question1.result[i];
                }
            }

            if(arr_result1[0] === undefined && arr_result1[1] === undefined){
                your_answer5.innerHTML = "";
            } else{
                your_answer5.innerHTML = "" + arr_result1[0] + "," + arr_result1[1];
            }

            if(arr_result1.includes(1) && arr_result1.includes(2)){
                row5.setAttribute("bgcolor","green");
            } else row5.setAttribute("bgcolor","red");

            break;
        case 2:
            right_answer5.innerHTML = "3,4";
            let arr_result2 = [];
            let k = 0;

            for(let i = 0; i < 4; i++){
                if(question2.result[i] != 0){
                    arr_result2[k++] = question2.result[i];
                }
            }

            if(arr_result2[0] === undefined && arr_result2[1] === undefined){
                your_answer5.innerHTML = "";
            } else{
                your_answer5.innerHTML = "" + arr_result2[0] + "," + arr_result2[1];
            }

            if(arr_result2.includes(3) && arr_result2.includes(4)){
                row5.setAttribute("bgcolor","green");
            } else row5.setAttribute("bgcolor","red");

            break;
        case 3:
            right_answer5.innerHTML = "28";
            your_answer5.innerHTML = question3.value_textbox;

            if(question3.value_textbox === "28" ){
                row5.setAttribute("bgcolor","green");
            } else row5.setAttribute("bgcolor","red");
            break;
        case 4:
            right_answer5.innerHTML = "от 18 до 22";
            your_answer5.innerHTML = question4.value_list;

            if(question4.value_list === "от 18 до 22"){
                row5.setAttribute("bgcolor","green");
            } else row5.setAttribute("bgcolor","red");
            break;
        case 5:
            right_answer5.innerHTML = "4";
            if(question5.results[0] === undefined){
                your_answer5.innerHTML = "";
            } else{
                your_answer5.innerHTML = "" + question5.results[0];
            }

            if (question5.results[0] === 4){
                row5.setAttribute("bgcolor","green");
            } else row5.setAttribute("bgcolor","red");
            break;
    }


    headline_row.appendChild(headline_nq);
    headline_row.appendChild(headline_your_answers);
    headline_row.appendChild(headline_right_answers);
    row1.appendChild(number_question1);
    row1.appendChild(your_answer1);
    row1.appendChild(right_answer1);
    row2.appendChild(number_question2);
    row2.appendChild(your_answer2);
    row2.appendChild(right_answer2);
    row3.appendChild(number_question3);
    row3.appendChild(your_answer3);
    row3.appendChild(right_answer3);
    row4.appendChild(number_question4);
    row4.appendChild(your_answer4);
    row4.appendChild(right_answer4);
    row5.appendChild(number_question5);
    row5.appendChild(your_answer5);
    row5.appendChild(right_answer5);
    table.appendChild(headline_row);
    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);
    table.appendChild(row5);
    block_table.appendChild(table);
    body.appendChild(block_table);
}
