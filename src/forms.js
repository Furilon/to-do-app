const toggleHeaderButtons = () => {
    const createProjectButton = document.getElementById('create-project')
    const removeProjectButton = document.getElementById('remove-project')
    const editProjectButton = document.getElementById('edit-project')
    const createItemButton = document.getElementById('create-item')

    // reverse whatever state of disability the buttons are in
    createProjectButton.disabled = !createProjectButton.disabled
    removeProjectButton.disabled = !removeProjectButton.disabled
    editProjectButton.disabled = !editProjectButton.disabled
    createItemButton.disabled = !createItemButton.disabled
}

export const createProjectForm = (addProject) => {
    // make user unable to open other forms
    toggleHeaderButtons()

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
    title.setAttribute('placeholder', 'Title')
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

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
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
    // turn off other form buttons
    toggleHeaderButtons()

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

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
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
    // turn other form buttons off
    toggleHeaderButtons()

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
    title.setAttribute('placeholder', 'Title')
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('placeholder', 'Due date')
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

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.textContent = 'Close'
    close.setAttribute('value', 'button')
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
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
    // turn other form buttons off
    toggleHeaderButtons()

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

        // turn other form buttons on
        toggleHeaderButtons()
    })

    // close button closes the form
    const close = document.createElement('button')
    close.setAttribute('value', 'button')
    close.textContent = 'Close'
    close.addEventListener('click', (e) => {
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode)

        // turn other form buttons on
        toggleHeaderButtons()
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
