const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
}

const list = document.getElementById("todo-list")
const itemCountSpan = document.getElementById("item-count")
const uncheckedCountSpan = document.getElementById("unchecked-count")

const newTodo = () => {
  const checkbox = createDomElement('input',
    {
      type: 'checkbox',
      class: classNames.TODO_CHECKBOX,
      onclick: 'updateUncheckedCount()',
    }
  )
  const todoInput = createDomElement('input', { class: classNames.TODO_TEXT })
  const newTodo = createDomElement("li", { class: classNames.TODO_ITEM })

  newTodo.appendChild(checkbox)
  newTodo.appendChild(todoInput)
  list.appendChild(newTodo)

  updateTotalCount()
}

const updateTotalCount = () => {
  itemCountSpan.innerText = list.childNodes.length
  updateUncheckedCount()
}

const updateUncheckedCount = () => {
  uncheckedCountSpan.innerText = document.querySelectorAll("input[type='checkbox']:not(:checked)").length
}

const createDomElement = (tag, options = {}) => {
  const newElement = document.createElement(tag)

  Object.keys(options).forEach(option => {
    newElement.setAttribute(option, options[option])
  })

  return newElement
}
