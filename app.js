// Global Variables
const addTaskEl = document.querySelector('.addTask');
const editTaskEl = document.querySelector('.editTask')
const deleteListEl = document.querySelector('.deleteList');
const deleteTaskEl = document.querySelector('.deleteTask');
const createListBtn = document.querySelector('.createListBtn');

let lists = {};

// Global AddEventListener
createListBtn.addEventListener('click', addList);
deleteListEl.addEventListener('click', deleteList);
addTaskEl.addEventListener('click', addTask);
editTaskEl.addEventListener('click', editTask)
deleteTaskEl.addEventListener('click', deleteTask);

function addTask() {
    // plus sign is add empty task under the previous task
    console.log('hello')
    // make a string that copies the parent taskContainer class and it's children's classes and elements
    // show and append it after the latest task
    
    
}

function renderTaskElement(task) {
    let node = document.querySelector('.addTaskElContainer')
    let newInnerHtml = `
    <div class="taskContainer">
    <div class="leftTask">
    <input type="checkbox" name="Tasks" class="checkbox">
    <span>${task}</span>
    </div>
    <div class="rightTask">
    <button class="editTaskEl">Edit</button>
    <i class="fa fa-trash-o deleteTaskEl" style="font-size:24px;"></i>
    </div>
    </div>
    `;
    node.appendChild(newInnerHtml);
}

function editTask() {
    // on click grab the current task's input 
    // when leave input text box save the edit
}

function deleteTask() {
    // trash inside task is to delete the current task
    // when deleting task check which index it is inside the array of tasks 
    // tasks will be put inside an array

}

function addList() {
    const newList = document.querySelector('.lists');
    const listName = newList.value
    lists[listName] = {};
    updateListsList();
    showCurrentList(listName)
    newList.value = '';
}

function deleteList(listName) {
    // trash can by plus sign is to delete the currentList
    // promt/alert the user if the user wants to delete the current list
    // have two buttons that say Yes or No
    delete lists[listName]
    updateListsList()
}

function updateListsList() {
    const listContainer = document.querySelector('.listContainer');
    // for in loop of the lists object, render an li for each key
    listContainer.innerHTML = '';
    for(key in lists) {
        const li = document.createElement('li');
        li.innerText = key;
        listContainer.appendChild(li);
    }
}

function saveLists() {
    // localStorage.setItem('lists', JSON.stringify(lists))
}

function getLists() {
    // localStorage.getItem(JSON.parse('lists'))
    // update lists object with recieved data
}

function dropLists(){
    // clear lists object
    // localStorage.removeItem('lists')
}

function checkCheckBox() {
    // checkbox is marked put a line through text or change color to show it has been completed

}

function showCurrentList(listName) {
    // when clicking on the title name in the side bar print out that lists data
    // current list in side bar will have its background color changed to darker gray
    const title = document.getElementById('title')
    title.innerText = listName
    lists[listName]

}