console.log("======tasks======")
/**When working on a TS project one of the first things you will do is start
 * by setting up the shape of your data
 */

const taskForm = document.querySelector<HTMLFormElement>(".form");

const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

//Setting up a type for a task
type Task = {
    description:string,
    isCompleted:boolean,
}
//setting up an array to store tasks
const tasks: Task[] = loadTasks()

tasks.forEach(renderTask)

//function to add a task to our tasks list
function addTask(task:Task):void{
    tasks.push(task)
}

//function to render tasks
function renderTask(task:Task):void{
    //task li element
    const taskElement = document.createElement("li");
    taskElement.textContent = task.description;
    //checkbox input element
    //now we also want to add a checkbox to the task
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox"
    taskCheckbox.checked = task.isCompleted

    //toggle checkbox
    taskCheckbox.addEventListener("change", ()=>{
        task.isCompleted = !task.isCompleted;
        updateLocalStorage()
    })


    taskElement.appendChild(taskCheckbox)

    taskListElement?.appendChild(taskElement)
}

//function to update local storage when we add a task
function updateLocalStorage():void{
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

//function to load tasks
function loadTasks():Task[]{
    //first we grab tasks from local storage
    const storedTasks = localStorage.getItem("tasks")
    //if there are storedTasks, we parse it and return the array of tasks
    //otherwise we return an empty array
    return storedTasks? JSON.parse(storedTasks):[]
}


// function to create a task
function createTask(event:SubmitEvent){
    event.preventDefault();
    const taskDescription = formInput?.value;
    
    if(taskDescription){
        //add task to list
        const task: Task = {
            description:taskDescription,
            isCompleted:false}

            addTask(task)
            //render tasks
            renderTask(task)

            //update local storage
            updateLocalStorage()
      
    
            //Finally we set the from input back to an empty string
            formInput.value = "";

        return
    }
    //if the task form input is empty we alert the user to enter a task
    alert("Please enter a task description")
}

taskForm?.addEventListener("submit", createTask)