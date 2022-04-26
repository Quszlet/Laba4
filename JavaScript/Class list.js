class list{
    #number_question;
    #head_question;
    #all_text = [];
    #value = "";
    #answer_order = [1, 2, 3, 4];

    constructor(number_question,head_question,text1,text2,text3,text4) {
        this.#number_question = number_question;
        this.#head_question = head_question;
        this.#all_text[0] = text1;
        this.#all_text[1] = text2;
        this.#all_text[2] = text3;
        this.#all_text[3] = text4;
    }

    get number(){
        return this.#number_question;
    }

    get value_list(){
        return this.#value;
   }

    set change_number(number){
        this.#number_question = number;
    }

    set change_answer_order(arr){
        this.#answer_order = arr;
        this.#all_text = arr;
    }


    create_headline(page){
        let headline = document.createElement("div");
        headline.id = "headline_question";
        headline.innerHTML = this.#head_question;
        page.appendChild(headline);
    }

    create_list(page){
        let list = document.createElement("select")
        let button = document.createElement("button");
        button.id = "button_list";
        list.id = "list";
        let list_value1 = document.createElement("option");
        let list_value2 = document.createElement("option");
        let list_value3 = document.createElement("option");
        let list_value4 = document.createElement("option");
        button.setAttribute("type", "submit");
        button.setAttribute("onclick", "button_list12()");
        list_value1.setAttribute("value", "" + this.#all_text[0]);
        list_value2.setAttribute("value", "" + this.#all_text[1]);
        list_value3.setAttribute("value", "" + this.#all_text[2]);
        list_value4.setAttribute("value", "" + this.#all_text[3]);
        button.innerHTML = "Подтвердить";
        list_value1.innerHTML = this.#all_text[0];
        list_value2.innerHTML = this.#all_text[1];
        list_value3.innerHTML = this.#all_text[2];
        list_value4.innerHTML = this.#all_text[3];
        list.appendChild(list_value1);
        list.appendChild(list_value2);
        list.appendChild(list_value3);
        list.appendChild(list_value4);
        page.appendChild(button);
        page.appendChild(list);
    }

    delete_headline(){
        let headline = document.getElementById("headline_question");
        headline.remove();
    }

    delete_list(){
        let list = document.getElementById("list");
        let button = document.getElementById("button_list");
        button.remove();
        list.remove();
    }

    check_value(){
        let button = document.getElementById("button_question" + this.#number_question);
        let list = document.getElementById("list");
        this.#value = list.value;
        console.log(this.#value);
        if(this.#value != ""){
            button.style.backgroundColor = "green";
        } else button.style.backgroundColor = "red";
    }

}