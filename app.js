// Global Variables
const addTask = document.querySelector('.addTask');
const editTask = document.querySelector('.editTask')
const deleteList = document.querySelector('.deleteList');
const deleteTask = document.querySelector('.deleteTask');
const createListBtn = document.querySelector('.createListBtn');

const tasksArray = [];
const listArray = [];

// Global AddEventListener
createListBtn.addEventListener('click', createList);
deleteList.addEventListener('click', deleteListFunction);
// addTask.addEventListener('click', addTaskFunction);
// editTask.addEventListener('click', editCurrentTask)
// deleteTask.addEventListener('click', deleteTaskFunction);

function addTaskFunction() {
    // plus sign is add empty task under the previous task
    console.log('hello')
    // make a string that copies the parent taskContainer class and it's children's classes and elements
    let node = document.querySelector('.addTaskContainer')
    let task = document.querySelector('.taskList').value
    let newInnerHTML = `
    <div class="taskContainer">
        <div class="leftTask">
            <input type="checkbox" name="Tasks" class="checkbox">
            <span>${task}</span>
        </div>
        <div class="rightTask">
            <button class="editTask">Edit</button>
            <i class="fa fa-trash-o deleteTask" style="font-size:24px;"></i>
        </div>
    </div>
    `;
    // show and append it after the latest task
    node.outerHTML += newInnerHTML;

}

function editCurrentTask() {
    // on click grab the current task's input 
    // when leave input text box save the edit
}

function deleteListFunction() {
    // trash can by plus sign is to delete the currentList
    // promt/alert the user if the user wants to delete the current list
    // have two buttons that say Yes or No

}

function deleteTaskFunction() {
    // trash inside task is to delete the current task
    // when deleting task check which index it is inside the array of tasks 
    // tasks will be put inside an array

}

function createList() {
    console.log('hello')
    let count = 0;
    let renderTask = document.querySelector('.col-9');
    let listName = document.querySelector('.lists').value;
    let addListName = document.querySelector('.addList');
    listArray[count] = listName;
    count++;
    let newInnerHTML =
    `
        <header class="header">
            <div class="leftHeader">
                <h2>${listName}</h2>
            </div>
        </header>
        <div class="greyline"></div>
        <!--Input Checkboxes go here=-->
        <main class="listContainer">
            <div class="addTaskContainer">
                <div class="leftTask">
                    <input type="text" name="Tasks" class="taskList" placeholder="Type Tasks Here">
                </div>
                <div class="rightTask">
                    <button class="addTask">Add Task</button>
                </div>
            </div>
            <button class="deleteCheckedTasks">Delete Completed Tasks</button>
        </main>
    `
    addListName.outerHTML += `<div class ="listTitle">${listName}</div>`
    renderTask.innerHTML += newInnerHTML;
}

function checkCheckBox() {
    // checkbox is marked put a line through text or change color to show it has been completed

}

function showCurrentList() {
    // when clicking on the title name in the side bar print out that lists data
    // current list in side bar will have its background color changed to darker gray
}