const btnDOM = document.querySelector("#liveToastBtn");
const listDOM = document.getElementById('list');

const nodeList = document.body.childNodes[2].childNodes[1];

const inputTask = document.getElementById('task');


btnDOM.addEventListener('click',addTask);



function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}





const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

function addTask(){
    
    if(!(inputTask.value.trim())){
        $(".error").toast("show");
    }
    else{    
        $(".success").toast("show");  
    }
    const createLiElement = document.createElement('li');
    listDOM.appendChild(createLiElement);
    createLiElement.textContent = inputTask.value;


    inputTask.value='';

    createLiElement.onclick = check;
    const closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick=removeButton;

    createLiElement.append(closeButton);
    listDOM.append(createLiElement);
    inputTask.value="";
    

}







