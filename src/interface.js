import { itemFactory, itemDOM } from './items'
import { projectFactory, projectDOM } from './projects'
import {
    createProjectForm,
    createItemForm,
    editProjectForm,
    editItemForm,
} from './forms'

const Todo = (() => {
    const defaultProject = projectFactory('Default')
    const item1 = itemFactory('Call Ben', 'Jan 29th', '3')
    const item2 = itemFactory('Call Jane', 'Jan 28th', '1')
    const item3 = itemFactory('Call Vadym', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // So, it's a 2D list.
    let _projectList = [defaultProject]

    const _findActiveProject = () => {
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        return project
    }

    const _createItems = (project) => {
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = itemDOM.createItem(item, i, _editItem)
            itemElem.firstChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const project = _findActiveProject()
        _createItems(project)
    }

    const _deleteItems = () => {
        const itemContainer = document.getElementById('todos')
        while (itemContainer.firstChild) {
            itemContainer.removeChild(itemContainer.lastChild)
        }
    }

    // Loop through _projectList, give each proj elem an ID and append to container.
    const showProjects = () => {
        const projContainer = document.getElementById('projects')
        _projectList.forEach((proj, i) => {
            const projectElem = projectDOM.createProject(proj, i)

            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active')
                projectElem.addEventListener('click', makeProjectActive)
                _createItems(proj)
            }
            projContainer.appendChild(projectElem)
        })
    }

    const makeProject = () => {
        // Make a project internally
        createProjectForm(() => {
            const projectTitle = document.querySelector('#projectTitle').value
            const project = projectFactory(projectTitle)
            _projectList.push(project)

            // Make all projects inactive
            const projects = document.querySelectorAll('.project')
            projects.forEach((proj) => proj.classList.remove('active'))

            // Figure out project's id and make a project DOM
            const projContainer = document.getElementById('projects')
            let projID = 0
            if (projContainer.lastChild) {
                projID = +projContainer.lastChild.dataset.index + 1
            }
            const projElem = projectDOM.createProject(project, projID)
            projElem.classList.add('active')
            projElem.addEventListener('click', makeProjectActive)
            projContainer.appendChild(projElem)

            // Delete items from prev proj
            _deleteItems()
        })
    }

    const editProject = () => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]
        const projectTitleDOMElem = projElem.querySelector('.project-title')

        // Call a form and edit the name when submitted
        editProjectForm(project.getName(), project.setName, projectTitleDOMElem)
    }

    const removeProject = () => {
        // Find active proj, delete its DOM and push out of _projectList,
        const proj = document.querySelector('.active')
        const projID = proj.dataset.index
        projectDOM.deleteProject(projID)
        _projectList.splice(projID, 1)
        _deleteItems()

        // Make the last project active
        const projContainer = document.getElementById('projects')
        const projectElem = projContainer.lastChild
        projectElem.classList.add('active')

        // Show active project's items
        const projectID = projectElem.dataset.index
        const project = _projectList[projectID]
        _createItems(project)
    }

    // Make all projects inactive and activate this project
    const makeProjectActive = (e) => {
        // Make all projects inactive
        const projects = document.querySelectorAll('.project')
        projects.forEach((proj) => proj.classList.remove('active'))

        // Activate this project
        e.target.classList.add('active')

        // Delete items from prev proj
        _deleteItems()

        // Show items for this project
        _showItems(e)
    }

    // Find an item's id, delete its DOM and push out of _itemList
    const removeItem = (e) => {
        // Find a project's id and its obj in _projectList
        const project = _findActiveProject()

        // Item's ID
        const itemID = e.target.parentNode.id

        // Delete item from project and from DOM
        // (I chose to refresh elements to give them appropriate IDs)
        project.removeItem(itemID)
        // itemDOM.deleteItem(itemID);

        _deleteItems()
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = itemDOM.createItem(item, i, _editItem)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const makeItem = () => {
        // Find active project
        const project = _findActiveProject()

        // Ask user about item's props
        createItemForm(() => {
            const title = document.querySelector('#itemTitle').value
            const dueDate = document.querySelector('#itemDue').value
            const priority = document.querySelector('#itemPriority').value

            // Make an item and add it to the project
            const item = itemFactory(title, dueDate, priority)
            project.addItem(item)

            // Make item's DOM elem and add it to the page
            // Use last item's id + 1 as this new item's id
            const itemContainer = document.getElementById('todos')
            let itemID = 0
            if (itemContainer.lastChild) {
                itemID = itemContainer.lastChild.id + 1
            }
            const itemElem = itemDOM.createItem(item, itemID, _editItem)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const _editItem = (e) => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Item's ID
        const itemID = e.target.parentNode.id

        // Item object
        const itemsFromThisProject = project.getItems()
        const item = itemsFromThisProject[itemID]

        const oldItemInfo = {
            oldTitle: item.getTitle(),
            oldDueDate: item.getDueDate(),
            oldPriority: item.getPriority(),
        }

        const editFuncs = {
            setTitle: item.setTitle,
            setDueDate: item.setDueDate,
            setPriority: item.setPriority,
        }

        const mainItemElem = document.getElementById(itemID)
        const itemLeftSide = mainItemElem.querySelector('.todo-item-left')
        const itemTitleElem = itemLeftSide.querySelector('.todo-item-title')
        const itemDueElem = itemLeftSide.querySelector('.todo-item-duedate')
        const itemPriorityElem = itemLeftSide.querySelector(
            '.todo-item-priority'
        )
        const itemInfoDOM = {
            title: itemTitleElem,
            dueDate: itemDueElem,
            priority: itemPriorityElem,
        }

        editItemForm(oldItemInfo, editFuncs, itemInfoDOM)
    }

    return {
        makeProject,
        removeProject,
        makeItem,
        removeItem,
        makeProjectActive,
        showProjects,
        editProject,
    }
})()

export default Todo

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.
