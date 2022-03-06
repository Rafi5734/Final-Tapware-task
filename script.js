// 
//delivery start
window.onload = () => {
    const form1 = document.querySelector("#addForm");
  
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
  
    let editItem = null;
  
    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};
  
function addItem(e) {
    e.preventDefault();
  
    if (submit.value != "Submit") {
        console.log("Hello");
  
        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;
  
        submit.value = "Submit";
        document.getElementById("item").value = "";
  
        document.getElementById("lblsuccess").innerHTML
            = "Text edited successfully";
  
        document.getElementById("lblsuccess")
                        .style.display = "block";
  
        setTimeout(function() {
            document.getElementById("lblsuccess")
                            .style.display = "none";
        }, 3000);
  
        return false;
    }

    var counter = [];
  
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
  
    let li = document.createElement("li");
    counter.push();
    
    li.className = "list-group-item";
    li.style.contentEditable = "true";
  
    let deleteButton = document.createElement("button");
  
    deleteButton.className = 
        "btn-danger btn btn-sm float-right delete";
    
    deleteButton.style.marginLeft = "50px";
    deleteButton.style.marginRight = "20px";
  
    deleteButton.appendChild(document.createTextNode("Delete"));
  
    let editButton = document.createElement("button");
  
    editButton.className = 
            "btn-success btn btn-sm float-right edit";
  
    editButton.appendChild(document.createTextNode("Edit"));
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    items.appendChild(li);
}
  
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML
                = "Text deleted successfully";
  
            document.getElementById("lblsuccess")
                        .style.display = "block";
  
            setTimeout(function() {
                document.getElementById("lblsuccess")
                        .style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}
  
function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}


//attention start

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname" contenteditable="true">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
      document.querySelector('#newtask input').value = "";
    }
  
}


// active start


const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks(); 
addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("New Todo"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData);  
  }
  listArray.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}


deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
}


