const newActivity = document.querySelector('.new-activity')
const btnToDo = document.querySelector('.btn-add-activity');
const toDo = document.querySelector('.activities');
function createLi() {
  const li = document.createElement('li');
  return li;
}
newActivity.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!newActivity.value) return;
    createActivity(newActivity.value);
  }
})
function clearInput() {
  newActivity.value = '';
  newActivity.focus();
}
function createClearButton(li) {
  li.innerText += ' ';
  const clearButton = document.createElement('button');
  clearButton.innerText = 'Clear';
  clearButton.setAttribute('class', 'clear');
  clearButton.setAttribute('tittle', 'Clear this activity');
  li.appendChild(clearButton)
}
function createActivity(inputText) {
  const li = createLi();
  li.innerText = inputText;
  toDo.appendChild(li);
  clearInput();
  createClearButton(li);
  saveActivity();
}
btnToDo.addEventListener('click', function(e) {
  if (!newActivity.value) return;
  createActivity(newActivity.value);

})
document.addEventListener('click', function(e) {
  const el = e.target;
  if (el.classList.contains('clear')) {
    el.parentElement.remove();
    saveActivity();
  }
})
function saveActivity() {
   const liActivities = toDo.querySelector('li');
  const toDoList = [];

  for (let toDo of toDoList) {
    const toDoText = toDo.innerText;
    toDoText = toDoText.replace('clear', ' ').trim();
    toDoList.push(toDoText);
  }
  const toDoJSON = JSON.stringify(toDoList);
  localStorage.setItem('toDo', toDoJSON);
}
function addSaveActivities() {
  const toDo = localStorage.getItem('toDo');
  const toDoList = JSON.parse(toDo);
  for(let toDo of toDoList) {
    createActivity(toDo);
  }
}
addSaveActivities()