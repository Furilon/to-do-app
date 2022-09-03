export const projectForm = (addProject) => {
    
    // create a form container
    const container = document.createElement('div')
    container.classList.add('projectFormContainer')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Project"

    // create the form itself
    const form = document.createElement('form')
    form.classList.add('projectForm')

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Inbox')
    title.setAttribute('required', 'true')
    title.classList('projectTitle')

    // submit button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = "Add project"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        addProject()
        
        // remove the form from the screen
        document.removeChild(e.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    document.appendChild(container);
}


export const itemForm = (addItem) => {
    
    // create the form container
    const container = document.createElement('div')
    container.classList.add('itemFormContainer')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Item"

    // create the form itself
    const form = document.createElement('form')
    form.classList.add('itemForm')

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Call Dad')
    title.setAttribute('required', 'true')
    title.classList('itemTitle')

    const description = document.createElement('input')
    description.setAttribute('type', 'text')
    description.setAttribute('placeholder', 'E.g., And ask him about the sunset.')
    description.setAttribute('required', 'true')
    description.classList('itemDescription')

    const due = document.createElement('input')
    due.setAttribute('type', 'textarea')
    due.setAttribute('placeholder', 'E.g., Tonight')
    due.setAttribute('required', 'true')
    due.classList('itemDue')

    const priority = document.createElement('input')
    priority.setAttribute('type', 'number')
    priority.setAttribute('min', '1')
    priority.setAttribute('max', '4')
    priority.setAttribute('value', '1')
    priority.setAttribute('required', 'true')
    priority.classList('itemPriority')

    // the button prevents page refresh and "closes" the form
    const submit = document.createElement('button')
    submit.textContent = "Add item"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func supplied by the interface
        addItem()
        
        // remove the form from the screen
        document.removeChild(e.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    document.appendChild(container);
}