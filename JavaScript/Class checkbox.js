class question_checkbox{
    #number_question;
    #head_question;
    #checkbox1 = 0;
    #checkbox2 = 0;
    #checkbox3 = 0;
    #checkbox4 = 0;
    #checkbox1_text;
    #checkbox2_text;
    #checkbox3_text;
    #checkbox4_text;
    #answer_order = [1, 2, 3, 4];
    result = [0, 0, 0, 0];
    constructor(number, head_question, text1, text2, text3, text4) {
        this.#number_question = number;
        this.#head_question = head_question;
        this.#checkbox1_text = text1;
        this.#checkbox2_text = text2;
        this.#checkbox3_text = text3;
        this.#checkbox4_text = text4;
    }
    get number(){
        return this.#number_question;
    }

    get checkbo1(){
        return this.#checkbox1;
    }

    get checkbo2(){
        return this.#checkbox2;
    }

    get checkbo3(){
        return this.#checkbox3;
    }

    get checkbo4(){
        return this.#checkbox4;
    }


    set change_number(number){
        this.#number_question = number;
    }

    set change_answer_order(arr){
        this.#answer_order = arr;
    }

    create_headline(page){
        let headline = document.createElement("div");
        headline.id = "headline_question";
        headline.innerHTML = this.#head_question;
        page.appendChild(headline);
    }
    create_choices(page){
        let chouse1 = document.createElement("input");
        let chouse2 = document.createElement("input");
        let chouse3 = document.createElement("input");
        let chouse4 = document.createElement("input");

        chouse1.setAttribute("type", "checkbox");
        chouse2.setAttribute("type", "checkbox");
        chouse3.setAttribute("type", "checkbox");
        chouse4.setAttribute("type", "checkbox");


        chouse1.setAttribute("onclick", "checkbox" + this.#answer_order[0] + "()");
        chouse2.setAttribute("onclick", "checkbox" + this.#answer_order[1] + "()");
        chouse3.setAttribute("onclick", "checkbox" + this.#answer_order[2] + "()");
        chouse4.setAttribute("onclick", "checkbox" + this.#answer_order[3] + "()");

        chouse1.id = "checkbox_page2_" + this.#answer_order[0];
        chouse2.id = "checkbox_page2_" + this.#answer_order[1];
        chouse3.id = "checkbox_page2_" + this.#answer_order[2];
        chouse4.id = "checkbox_page2_" + this.#answer_order[3];
        let text1 = document.createElement("div");
        let text2 = document.createElement("div");
        let text3 = document.createElement("div");
        let text4 = document.createElement("div");
        text1.id = "checkbox_text_page2_" + this.#answer_order[0];
        text2.id = "checkbox_text_page2_" + this.#answer_order[1];
        text3.id = "checkbox_text_page2_" + this.#answer_order[2];
        text4.id = "checkbox_text_page2_" + this.#answer_order[3];
        text1.innerHTML = this.#checkbox1_text;
        text2.innerHTML = this.#checkbox2_text;
        text3.innerHTML = this.#checkbox3_text;
        text4.innerHTML = this.#checkbox4_text;

        page.appendChild(chouse1);
        page.appendChild(chouse2);
        page.appendChild(chouse3);
        page.appendChild(chouse4);
        page.appendChild(text1);
        page.appendChild(text2);
        page.appendChild(text3);
        page.appendChild(text4);
    }
    #check(){
        let button = document.getElementById("button_question" + this.#number_question);
        let count = this.#checkbox1 + this.#checkbox2 + this.#checkbox3 + this.#checkbox4;
        if(count > 1){
            button.style.backgroundColor = "green";
        } else button.style.backgroundColor = "red";

    }
    check_checkbox1(){
        if(this.#checkbox1 === 1){
            this.#checkbox1 = 0;
            this.result[0] = 0;
        } else {
            this.#checkbox1 = 1;
            this.result[0] = this.#answer_order[0];
        }
        this.#check();
    }
    check_checkbox2(){
        if(this.#checkbox2 === 1){
            this.#checkbox2 = 0;
            this.result[1] = 0;
        } else {
            this.#checkbox2 = 1;
            this.result[1] = this.#answer_order[1];
        }
        this.#check();
    }
    check_checkbox3(){
        if(this.#checkbox3 === 1){
            this.#checkbox3 = 0;
            this.result[2] = 0;
        } else {
            this.#checkbox3 = 1;
            this.result[2] = this.#answer_order[2];
        }
        this.#check();
    }
    check_checkbox4(){
        if(this.#checkbox4 === 1){
            this.#checkbox4 = 0;
            this.result[3] = 0;
        } else {
            this.#checkbox4 = 1;
            this.result[3] = this.#answer_order[3];
        }
        this.#check();
    }
    delete_headline(){
        let headline = document.getElementById("headline_question");
        headline.remove();
    }
    delete_choices(){
        let chouse1 = document.getElementById("checkbox_page2_1");
        let chouse2 = document.getElementById("checkbox_page2_2");
        let chouse3 = document.getElementById("checkbox_page2_3");
        let chouse4 = document.getElementById("checkbox_page2_4");
        let text1 = document.getElementById("checkbox_text_page2_1");
        let text2 = document.getElementById("checkbox_text_page2_2");
        let text3 = document.getElementById("checkbox_text_page2_3");
        let text4 = document.getElementById("checkbox_text_page2_4");
        chouse1.remove();
        chouse2.remove();
        chouse3.remove();
        chouse4.remove();
        text1.remove();
        text2.remove();
        text3.remove();
        text4.remove();
    }
    check_results(){
        let chouse1 = document.getElementById("checkbox_page2_1");
        let chouse2 = document.getElementById("checkbox_page2_2");
        let chouse3 = document.getElementById("checkbox_page2_3");
        let chouse4 = document.getElementById("checkbox_page2_4");

        if(this.#checkbox1 === 1){
            chouse1.checked = true;

        } else chouse1.checked = false;

        if(this.#checkbox2 === 1){
            chouse2.checked = true;
        }
        else chouse2.checked = false;

        if(this.#checkbox2 === 1){
            chouse2.checked = true;
        }
        else chouse2.checked = false;

        if(this.#checkbox3 === 1){
            chouse3.checked = true;
        }
        else chouse3.checked = false;

        if(this.#checkbox4 === 1){
            chouse4.checked = true;
        }
        else chouse4.checked = false;
    }
}

