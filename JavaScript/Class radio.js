class question_radio{
    #number_question;
    #head_question;
    #radio1_text;
    #radio2_text;
    #radio3_text;
    #radio4_text;
    value = 0;
    #answer_order = [1, 2, 3, 4];
    results = [];

    constructor(number,headline,text1,text2,text3,text4) {
        this.#number_question = number;
        this.#head_question = headline;
        this.#radio1_text = text1;
        this.#radio2_text = text2;
        this.#radio3_text = text3;
        this.#radio4_text = text4;
    }

    get number(){
        return this.#number_question;
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

        chouse1.setAttribute("type", "radio");
        chouse2.setAttribute("type", "radio");
        chouse3.setAttribute("type", "radio");
        chouse4.setAttribute("type", "radio");

        chouse1.setAttribute("name", "th");
        chouse2.setAttribute("name", "th");
        chouse3.setAttribute("name", "th");
        chouse4.setAttribute("name", "th");

        chouse1.setAttribute("value", "" + this.#answer_order[0]);
        chouse2.setAttribute("value", "" + this.#answer_order[1]);
        chouse3.setAttribute("value", "" + this.#answer_order[2]);
        chouse4.setAttribute("value", "" + this.#answer_order[3]);

        chouse1.setAttribute("onclick", "check_radio" + this.#answer_order[0] + "()");
        chouse2.setAttribute("onclick", "check_radio" + this.#answer_order[1] + "()");
        chouse3.setAttribute("onclick", "check_radio" + this.#answer_order[2] + "()");
        chouse4.setAttribute("onclick", "check_radio" + this.#answer_order[3] + "()");

        chouse1.id = "radio" + this.#answer_order[0];
        chouse2.id = "radio" + this.#answer_order[1];
        chouse3.id = "radio" + this.#answer_order[2];
        chouse4.id = "radio" + this.#answer_order[3];
        let text1 = document.createElement("div");
        let text2 = document.createElement("div");
        let text3 = document.createElement("div");
        let text4 = document.createElement("div");
        text1.id = "radio" + this.#answer_order[0] + "_text";
        text2.id = "radio" + this.#answer_order[1] + "_text";
        text3.id = "radio" + this.#answer_order[2] + "_text";
        text4.id = "radio" + this.#answer_order[3] + "_text";
        text1.innerHTML = this.#radio1_text;
        text2.innerHTML = this.#radio2_text;
        text3.innerHTML = this.#radio3_text;
        text4.innerHTML = this.#radio4_text;

        page.appendChild(chouse1);
        page.appendChild(chouse2);
        page.appendChild(chouse3);
        page.appendChild(chouse4);
        page.appendChild(text1);
        page.appendChild(text2);
        page.appendChild(text3);
        page.appendChild(text4);
    }

    delete_headline(){
        let headline = document.getElementById("headline_question");
        headline.remove();
    }

    delete_choices(){
        let chouse1 = document.getElementById("radio1");
        let chouse2 = document.getElementById("radio2");
        let chouse3 = document.getElementById("radio3");
        let chouse4 = document.getElementById("radio4");
        let text1 = document.getElementById("radio1_text");
        let text2 = document.getElementById("radio2_text");
        let text3 = document.getElementById("radio3_text");
        let text4 = document.getElementById("radio4_text");
        chouse1.remove();
        chouse2.remove();
        chouse3.remove();
        chouse4.remove();
        text1.remove();
        text2.remove();
        text3.remove();
        text4.remove();
    }

    check_value(){
        let button = document.getElementById("button_question" + this.#number_question);
        switch (this.value){
            case 1:
                let radio1 = document.getElementById("radio1");
                radio1.checked = true;
                this.results[0] = this.#answer_order[0];
                break;
            case 2:
                let radio2 = document.getElementById("radio2");
                radio2.checked = true;
                this.results[0] = this.#answer_order[1];
                break;
            case 3:
                let radio3 = document.getElementById("radio3");
                radio3.checked = true;
                this.results[0] = this.#answer_order[2];
                break;
            case 4:
                let radio4 = document.getElementById("radio4");
                radio4.checked = true;
                this.results[0] = this.#answer_order[3];
                break;
        }
        if (this.value != 0) {
            button.style.backgroundColor = "green";
        } else button.style.backgroundColor = "red";
    }
}