const itemFactory = (title, dueDate, priority) => {
    let _title = title
    let _dueDate = dueDate
    let _priority = priority

    const getTitle = () => _title
    const getDueDate = () => _dueDate
    const getPriority = () => _priority

    const setTitle = (newTitle) => (_title = newTitle)
    const setDueDate = (newDate) => (_dueDate = newDate)
    const setPriority = (newPriority) => (_priority = newPriority)

    return {
        getTitle,
        getDueDate,
        getPriority,
        setTitle,
        setDueDate,
        setPriority,
    }
}

const itemDOM = (() => {
    const _priorityColor = (priority) => {
        switch (priority) {
            case '1':
                return { border: '#880407', backgroundColor: '#E36D6D' }
            case '2':
                return { border: '#F6C401', backgroundColor: '#A7AD07' }
            case '3':
                return { border: '#04056F', backgroundColor: '#0F01F4' }
            case '4':
                return { border: 'slategray', backgroundColor: 'gray' }
        }
    }

    const createItem = (item, i, editFunc) => {
        const container = document.createElement('div')
        container.classList.add('todo-item')
        container.id = i

        const todoLeft = document.createElement('div')
        todoLeft.classList.add('todo-item-left')

        const title = document.createElement('p')
        title.classList.add('todo-item-title')
        title.textContent = item.getTitle()
        todoLeft.appendChild(title)

        const dueDate = document.createElement('p')
        dueDate.classList.add('todo-item-duedate')
        dueDate.textContent = item.getDueDate()
        todoLeft.appendChild(dueDate)

        const priority = document.createElement('p')
        priority.classList.add('todo-item-priority')
        priority.textContent = item.getPriority()
        todoLeft.appendChild(priority)

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const { borderColor, backgroundColor } = _priorityColor(
            item.getPriority()
        )
        checkbox.style.border = `2px solid ${borderColor}`
        checkbox.style.backgroundColor = backgroundColor
        container.appendChild(checkbox)

        container.appendChild(todoLeft)

        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', editFunc)
        container.appendChild(editBtn)

        return container
    }

    const deleteItem = (id) => {
        const todos = document.getElementById('todos')
        const item = document.getElementById(id)
        todos.removeChild(item)
    }

    return { createItem, deleteItem }
})()

export { itemFactory, itemDOM }
