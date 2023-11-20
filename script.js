const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value ===''){
        alert("Please write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ""

        let span = document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    savData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function savData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();