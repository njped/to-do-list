// Global Variables
const addTask = document.querySelector('.addTask');
const editTask = document.querySelector('editTask')
const deleteList = document.querySelector('.deleteList');
const deleteTask = document.querySelector('.deleteTask');
const createListBtn = document.querySelector('.createListBtn');
const lookAtList = document.querySelector('.lists');

let tasksArray = [];
let listTitleArray = [];

// Global AddEventListener
addTask.addEventListener('click', addTaskFunction);
editTask.addEventListener('click', editCurrentTask)
deleteList.addEventListener('click', deleteListFunction);
deleteTask.addEventListener('click', deleteTaskFunction);
createListBtn.addEventListener('click', createList);
lookAtList.addEventListener('click', showClickedList);

function addTaskFunction() {
    // plus sign is add empty task under the previous task
    
    // make a string that copies the parent taskContainer class and it's children's classes and elements 
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
    `

    
        //append it after the latest task

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
    // button is to grab all the data in the list
        // put the title of the list into the side bar by creating a new span with the class of lists
        // while bringing a new blank to-do list in the main area
        

}

function checkCheckBox() {
    // checkbox is marked put a line through text to show it has been completed

}

function showClickedList() {
    // when clicking on the title name in the side bar print out that lists data
        // current list in side bar will have its background color changed to darker gray
}

    