export const projectForm = (addToProjectContainer) => {
    const container = document.createElement('div')
    container.classList.add('projectFormContainer')
    container.classList.toggle('active')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Project"

    const form = document.createElement('form')
    form.classList.add('projectForm')

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Inbox')
    title.setAttribute('required', 'true')
    title.classList('projectTitle')

    const submit = document.createElement('button')
    submit.textContent = "Add project"
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const projectTitle = document.querySelector('.projectTitle').value;
        addToProjectContainer(projectTitle)
        
        const formContainer = document.querySelector('.projectFormContainer')
        formContainer.classList.toggle('active');
    })

    form.appendChild(title)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    document.appendChild(container);
}


export const itemForm = (addToItemContainer) => {
    const container = document.createElement('div')
    container.classList.add('itemFormContainer')
    container.classList.toggle('active')

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Item"

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

    const submit = document.createElement('button')
    submit.textContent = "Add item"
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const itemTitle = document.querySelector('.itemTitle').value;
        const itemDescription = document.querySelector('.itemDescription').value;
        const itemDue = document.querySelector('.itemDue').value;
        const itemPriority = document.querySelector('.itemPriority').value;
        addToItemContainer(itemTitle, itemDescription, itemDue, itemPriority)
        
        const formContainer = document.querySelector('.itemFormContainer')
        formContainer.classList.toggle('active');
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