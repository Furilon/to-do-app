import { itemFactory, itemDOM } from "./items";
import { projectFactory, projectDOM } from "./projects";

const Todo = (() => {
    const defaultProject = projectFactory("Default");
    const item1 = itemFactory('Call Ben', 'About work', 'Jan 29th', '3');
    const item2 = itemFactory('Call Jane', 'About school', 'Jan 28th', '1');
    const item3 = itemFactory('Call Vadym', 'About family', 'Jan 27th', '2');
    defaultProject.addItem(item1);
    defaultProject.addItem(item2);
    defaultProject.addItem(item3);
    // A list of projectFactory objects, which are basically lists of items.
    // Sp, it's a 2D list.
    let _projectList = [defaultProject];
    
    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const itemContainer = document.getElementById('todos');
        const projID = e.target.dataset.index;
        const project = _projectList[projID];
        const items = project.getItems();
        items.forEach((item, i) => {
            const itemElem = itemDOM.createItem(item, i);
            console.log(itemElem.lastChild);
            itemElem.lastChild.addEventListener('click', removeItem);            
            itemContainer.appendChild(itemElem);
        });
    };
    
    const _deleteItems = () => {
        const itemContainer = document.getElementById('todos');
        while (itemContainer.firstChild) {
            itemContainer.removeChild(itemContainer.lastChild);
        }
    };
    
    // Loop through _projectList, give each proj elem an ID and append to container.
    const showProjects = () => {
        const projContainer = document.getElementById('projects');
        _projectList.forEach((proj, i) => {
            const projectElem = projectDOM.createProject(proj, i);
            
            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active');
                projectElem.addEventListener('click', makeProjectActive);
                const itemContainer = document.getElementById('todos');
                const items = proj.getItems();
                items.forEach((item, i) => {
                    const itemElem = itemDOM.createItem(item, i);
                    itemElem.lastChild.addEventListener('click', removeItem);
                    itemContainer.appendChild(itemElem);
                });
            }
            projContainer.appendChild(projectElem);
        });
    };
    
    const makeProject = () => {
        // Make a project internally
        const name = prompt('Give me a project name.');
        const project = projectFactory(name);
        _projectList.push(project);

        // Make all projects inactive
        const projects = document.querySelectorAll('.project');
        projects.forEach(proj => proj.classList.remove("active"));

        // Figure out project's id and make a project DOM
        const projContainer = document.getElementById('projects');
        let projID = 0;
        if (projContainer.lastChild) {
            projID = +(projContainer.lastChild.dataset.index) + 1; 
        }
        const projElem = projectDOM.createProject(project, projID);
        projElem.classList.add('active');
        projElem.addEventListener('click', makeProjectActive);
        projContainer.appendChild(projElem);

        // Delete items from prev proj
        _deleteItems();
    };
    
    const removeProject = () => {
        // Find active proj, delete its DOM and push out of _projectList,
        const proj = document.querySelector('.active');
        const projID = proj.dataset.index;
        projectDOM.deleteProject(projID);
        _projectList.splice(projID, 1);
        _deleteItems();
        
        // Make the last project active
        const projContainer = document.getElementById('projects');
        const projectElem = projContainer.lastChild;
        projectElem.classList.add('active');

        // Show active project's items
        const projectID = projectElem.dataset.index;
        const project = _projectList[projectID];
        const itemContainer = document.getElementById('todos');
        const items = project.getItems();
        items.forEach((item, i) => {
            const itemElem = itemDOM.createItem(item, i);
            itemElem.lastChild.addEventListener('click', removeItem);
            itemContainer.appendChild(itemElem);
        });
    };
    
    // Make all projects inactive and activate this project
    const makeProjectActive = (e) => {

        // Make all projects inactive
        const projects = document.querySelectorAll('.project');
        projects.forEach(proj => proj.classList.remove("active"));

        // Activate this project
        e.target.classList.add('active');

        // Delete items from prev proj
        _deleteItems();

        // Show items for this project
        _showItems(e);
    };

    // Find an item's id, delete its DOM and push out of _itemList
    const removeItem = (e) => {
        // Find a project's id and its obj in _projectList
        const projElem = document.querySelector('.active');
        const projID = projElem.dataset.index;
        const project = _projectList[projID];

        // Item's ID
        const itemID = e.target.parentNode.id;

        // Delete item from project and from DOM
        // (I chose to refresh elements to give them appropriate IDs)
        project.removeItem(itemID);
        // itemDOM.deleteItem(itemID);

        _deleteItems();
        const itemContainer = document.getElementById('todos');
        const items = project.getItems();
        items.forEach((item, i) => {
            const itemElem = itemDOM.createItem(item, i);
            itemElem.lastChild.addEventListener('click', removeItem);
            itemContainer.appendChild(itemElem);
        });
    };

    const makeItem = () => {
        // Find active project
        const projElem = document.querySelector('.active');
        const projID = projElem.dataset.index;
        const project = _projectList[projID];

        // Ask user about item's props
        const title = prompt('Title of the to-do item: ');
        const description = prompt('Description: ');
        const dueDate = prompt('Due Date:');
        const priority = prompt('Priority: ');

        // Make an item and add it to the project
        const item = itemFactory(title, description, dueDate, priority);
        project.addItem(item);

        // Make item's DOM elem and add it to the page
        // Use last item's id + 1 as this new item's id
        const itemContainer = document.getElementById('todos');
        let itemID = 0;
        if (itemContainer.lastChild) {
            itemID = itemContainer.lastChild.id + 1;
        }
        const itemElem = itemDOM.createItem(item, itemID);
        itemElem.lastChild.addEventListener('click', removeItem);
        itemContainer.appendChild(itemElem);
    }

    return { makeProject, removeProject,
             makeItem, removeItem,
             makeProjectActive, showProjects };
})();

export default Todo;

// Ok, there's a lot to say.

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.

// Thirdly, I can make proper forms to make projects and items.

// Fourthly, it would be cool to do some input validation.

// Fifthly, it would be nice to be able to edit your projects and items.
