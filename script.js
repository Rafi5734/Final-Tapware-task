
//delivery start

const task1Id = document.getElementById("task1Id");

document.getElementById("push1").onclick = function(){
    if(task1Id.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname" contenteditable="true">
                    ${task1Id.value}
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
        task1Id.value = "";
    }
  
}


//attention start

const task2Id = document.getElementById("task2Id");

document.querySelector('#push2').onclick = function(){
    if(task2Id.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks1').innerHTML += `
            <div class="task">
                <span id="taskname" contenteditable="true">
                    ${task2Id.value}
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
        task2Id.value = "";
    }
  
}


// active start



const task3Id = document.getElementById("task3Id");

document.querySelector('#push3').onclick = function(){
    if(task3Id.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks2').innerHTML += `
            <div class="task">
                <span id="taskname" contenteditable="true">
                    ${task3Id.value}
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
        task3Id.value = "";
    }
  
}
 
