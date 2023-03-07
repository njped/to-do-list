// Global Variables
const addTask = document.querySelector('.addTask');
const editTask = document.querySelector('.editTask')
const deleteList = document.querySelector('.deleteList');
const deleteTask = document.querySelector('.deleteTask');
const createListBtn = document.querySelector('.createListBtn');

const tasksArray = [];
const listTitleArray = [];

// Global AddEventListener
addTask.addEventListener('click', addTaskFunction);
editTask.addEventListener('click', editCurrentTask)
deleteList.addEventListener('click', deleteListFunction);
deleteTask.addEventListener('click', deleteTaskFunction);
createListBtn.addEventListener('click', createList);

function addTaskFunction() {
    // plus sign is add empty task under the previous task
    
    // make a string that copies the parent taskContainer class and it's children's classes and elements
    let node = document.querySelector('.taskContainer')
    let newInnerHTML = `
    <div class="taskContainer">
        <div class="leftTask">
            <input type="checkbox" name="Tasks" class="checkbox">
            <input type="text" name="Tasks" class="taskList" placeholder="Type Tasks Here">
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

function deleteTaskFunction () {
    // trash inside task is to delete the current task
        // when deleting task check which index it is inside the array of tasks 
        // tasks will be put inside an array

}

function createList()
{
    console.log('hello')
    let listName = document.querySelector('.lists').value;
    let addListName = document.querySelector('.addList');
    let title = document.getElementById('title').value;
    title = listName;
    addListName.outerHTML += `<div class ="listTitle">${listName}</div>`
}

function checkCheckBox() {
    // checkbox is marked put a line through text or change color to show it has been completed

}

function showCurrentList() {
    // when clicking on the title name in the side bar print out that lists data
        // current list in side bar will have its background color changed to darker gray
}