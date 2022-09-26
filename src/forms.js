export const createProjectForm = (addProject) => {
    // create a form container
    const container = document.createElement('div')
    container.id = 'projectFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'New Project'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'projectForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Inbox')
    title.setAttribute('required', 'true')
    title.id = 'projectTitle'

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Add project'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        addProject()

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)
    })

    form.appendChild(title)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

export const editProjectForm = (oldTitle, editTitle, titleElem) => {
    // create a form container
    const container = document.createElement('div')
    container.id = 'projectFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'Edit Project Title'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'projectForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('value', oldTitle)
    title.setAttribute('required', 'true')
    title.id = 'projectTitle'

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Edit'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        const newTitle = document.querySelector('#projectTitle').value
        editTitle(newTitle)
        titleElem.textContent = newTitle

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)
    })

    form.appendChild(title)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

export const createItemForm = (addItem) => {
    // create the form container
    const container = document.createElement('div')
    container.id = 'itemFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'New Item'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'itemForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Call Dad')
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('placeholder', 'E.g., Tonight')
    due.setAttribute('required', 'true')
    due.id = 'itemDue'

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', '1')
    priority.setAttribute('required', 'true')
    priority.id = 'itemPriority'

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Add item'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func supplied by the interface
        addItem()

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)
    })

    form.appendChild(title)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}

export const editItemForm = (oldInfo, editFuncs, itemInfoDOM) => {
    // create the form container
    const container = document.createElement('div')
    container.id = 'itemFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = 'Edit Item'

    // create the form itself
    const form = document.createElement('form')
    form.id = 'itemForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('value', oldInfo.oldTitle)
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('value', oldInfo.oldDueDate)
    due.setAttribute('required', 'true')
    due.id = 'itemDue'

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', oldInfo.oldPriority)
    priority.setAttribute('required', 'true')
    priority.id = 'itemPriority'

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = 'Edit'
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // get the new values
        const newTitle = document.getElementById('itemTitle').value
        const newDue = document.getElementById('itemDue').value
        const newPriority = document.getElementById('itemPriority').value

        // funcs supplied by the interface
        editFuncs.setTitle(newTitle)
        editFuncs.setDueDate(newDue)
        editFuncs.setPriority(newPriority)

        // elems supplied by the interface
        itemInfoDOM.title.textContent = newTitle
        itemInfoDOM.dueDate.textContent = newDue
        itemInfoDOM.priority.textContent = newPriority

        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    // close button closes the form
    const close = document.createElement('button')
    close.setAttribute('value', 'button')
    close.textContent = 'Close'
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)
    })

    form.appendChild(title)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)

    container.appendChild(formTitle)
    container.appendChild(form)
    container.appendChild(close)

    const body = document.querySelector('body')
    body.appendChild(container)
}
