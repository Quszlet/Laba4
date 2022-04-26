class question_textbox{
    #number_question;
    #head_question;
    #value_text = "";

    constructor(number,head_question) {
        this.#number_question = number;
        this.#head_question = head_question;
    }
    get number(){
        return this.#number_question;
    }
    set change_number(number){
        this.#number_question = number;
    }
    get value_textbox(){
        return this.#value_text;
    }
    create_headline(page){
        let headline = document.createElement("div");
        headline.id = "headline_question";
        headline.innerHTML = this.#head_question;
        page.appendChild(headline);
    }
    create_textbox(page){
        let textbox = document.createElement("input");
        let button_textbox = document.createElement("button");
        button_textbox.innerHTML = "Подтвердить";
        button_textbox.id = "button_textbox";
        textbox.id = "textbox";
        button_textbox.setAttribute("type", "submit");
        button_textbox.setAttribute("onclick", "button_textbox2()");
        textbox.setAttribute("type", "text");
        page.appendChild(textbox);
        page.appendChild(button_textbox);
    }
    check_value(){
        let button = document.getElementById("button_question" + this.#number_question);
        this.#value_text = textbox.value;
        if(textbox.value === ""){
            button.style.backgroundColor = "red";
        } else button.style.backgroundColor = "green";
    }
    delete_headline(){
        let headline = document.getElementById("headline_question");
        headline.remove();
    }
    delete_textbox(){
        let textbox = document.getElementById("textbox");
        let button_textbox = document.getElementById("button_textbox");
        textbox.remove();
        button_textbox.remove();
    }
}