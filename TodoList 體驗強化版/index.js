// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// write your code here
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function () {
  // console.log(this)
  // console.log(event.target)
  //加入判斷式，若inputValue=''就不會產生新的todo
  let inputValue = document.querySelector('#newTodo').value
  if (inputValue !== '') {
    addItem(inputValue)
    input.value = ''
  }
})

list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    // console.log(li) li= "<li>
    //   <label for='todo'>Hit the gym</label>
    //   <i class='delete fa fa-trash'></i>
    // </li>"
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
  }
})

// 按下 Enter 鍵時，一樣可以新增 todo (提示：使用 keypress 事件，並且用 event.keyCode === 13 來鎖定 Enter 鍵)
let input = document.querySelector('#newTodo')

input.addEventListener('keypress', lockEnter)

function lockEnter(event) {
  let newInput = input.value
  if (event.keyCode === 13) {
    addItem(newInput)
    //按enter輸入新字串後清空文字方框內容
    input.value = ''
  }
}

list.addEventListener('click', Done)

function Done(event) {
  if (event.target.classList.contains('checked')) {
    // console.log(event.target)
    event.target.parentElement.remove()
    let done = document.querySelector('.my-done')
    let doneItem = document.createElement('li')
    doneItem.innerHTML = event.target.textContent
    done.appendChild(doneItem)
    doneItem.classList.add('checked')
  }
}
