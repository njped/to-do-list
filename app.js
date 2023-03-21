// Global Variables
const addTaskEl = document.querySelector('.addTask');
const editTaskEl = document.querySelector('.editTask')
const deleteListEl = document.querySelector('.deleteList');
const deleteTaskEl = document.querySelector('.deleteTask');
const deleteCheckedTasks = document.querySelector('.deleteCheckedTasks');
const createListBtn = document.querySelector('.createListBtn');
const listContainer = document.querySelector('.listContainer');
const taskContainer = document.querySelector('.taskContainer')
const mainContainer = document.querySelector('main');
const title = document.getElementById('title')

let lists = getLists() || {} ;
let currentList = Object.keys(lists)[0] || '';

// Global AddEventListener
createListBtn.addEventListener('click', addList);
deleteListEl.addEventListener('click', deleteList);
deleteCheckedTasks.addEventListener('click', function() {
    for(const task in lists[currentList]){
        if (lists[currentList][task].complete){
            deleteTask(task)
        }
    }
})
addTaskEl.addEventListener('click', addTask);
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'li'){
        const listName = e.target.innerText;
        showCurrentList(listName)
    }
})
taskContainer.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'input') {
        const checked = e.target.checked;
        const siblings = [...e.target.parentElement.children];
        const taskName = siblings[siblings.length-1].innerText;
        lists[currentList][taskName].complete = checked;
        saveLists()
        checkCheckBox()
    }
})
// editTaskEl.addEventListener('click', editTask)
// deleteTaskEl.addEventListener('click', deleteTask);

function addTask() {
    // make a string that copies the parent taskContainer class and it's children's classes and elements
    // show and append it after the latest task
    const newTask = document.querySelector('.taskList');
    const taskName = newTask.value;
    newTask.value = '';
    const task = {
        id: Date.now(),
        name: taskName,
        complete: false,
    };

    lists[currentList][taskName] = task
    renderTaskElement(task);
    saveLists();
}

function renderTaskElement({id, name, complete}) {
    let newInnerHtml = `
    <div id="${id}" class="task">
        <div class="leftTask">
            <input type="checkbox" name="Tasks" class="checkbox" ${complete ? 'checked' : ''}>
            <span>${name}</span>
        </div>
        <div class="rightTask">
            <button class="editTaskEl">Edit</button>
            <i class="fa fa-trash-o deleteTask" style="font-size:24px;"></i>
        </div>
    </div>
    `;
    taskContainer.innerHTML += newInnerHtml;
}

function editTask() {
    // Split into two functions (one to show input, one to save the change and convert input back to span)
    // On click of taskContainer, only continue if the element clicked was an edit button
    // find the taskName (see checkCheckbox for potential example)
    // convert the task span to an input

    // new function
    // on input submit change the old key to the new taskname to the list.currentList
    // hide input and convert to span
}

function deleteTask(taskName) {
    // create deleteCompleteTasks, for each loop through all of the tasks, see if they are complete
    // if complete call deleteTask


    // delete taskName from lists.currentList
    // save to local
    // showCurrentList
}

function addList() {
    const newList = document.querySelector('.lists');
    const listName = newList.value
    const listError = document.getElementById('listError');
    if(!listName) {
        listError.innerText = 'Please provide a list name'
        return
    }
    listError.innerText = ''

    newList.value = '';
    lists[listName] = {};
    mainContainer.style.display = 'block'
    updateListsList();
    showCurrentList(listName)
    saveLists()
}

function deleteList() {
    // trash can by plus sign is to delete the currentList
    // promt/alert the user if the user wants to delete the current list
    // have two buttons that say Yes or No
    delete lists[currentList]
    currentList = Object.keys(lists)[0] || '';
    updateListsList()
    if(currentList.length) {
        showCurrentList(currentList);
    } else {
        hideList()
    }
}

function updateListsList() {
    // for in loop of the lists object, render an li for each key
    listContainer.innerHTML = '';
    for(key in lists) {
        const li = document.createElement('li');
        li.innerText = key;
        listContainer.appendChild(li);
    }
}

function saveLists() {
    localStorage.setItem('lists', JSON.stringify(lists))
}

function getLists() {
    return JSON.parse(localStorage.getItem('lists'))
    // update lists object with recieved data
}

function checkCheckBox() {
    // TODO: Change this to only update the class for a single task
    [...taskContainer.children].forEach(child => {
        const input = child.firstElementChild.firstElementChild
        const text = child.firstElementChild.lastElementChild
        if(input.checked){
            text.classList.add("completedTask")
        }
        else {
            text.classList.remove('completedTask')
        }
    });
}

function showCurrentList(listName) {
    // when clicking on the title name in the side bar print out that lists data
    // current list in side bar will have its background color changed to darker gray
    currentList = listName;
    [...listContainer.children].forEach(child => {
        if(child.innerText === currentList){
            child.classList.add("selectedList")
        }
        else {
            child.classList.remove('selectedList')
        }
    });
    taskContainer.innerHTML = '';
    title.innerText = listName
    lists[listName]
    for(const task in lists[currentList]) {
        renderTaskElement(lists[currentList][task]);
    }
    checkCheckBox()
}

function onPageLoad() {
    updateListsList();
    hideList()
    title.innerText = currentList;
    if(currentList.length) {
        showCurrentList(currentList);
    }

}

function hideList() {
    if (!Object.keys(lists).length) {
        mainContainer.style.display = "none";
    }
    else {
        mainContainer.style.display = "block";
    } 
        
}

window.onload = onPageLoad();