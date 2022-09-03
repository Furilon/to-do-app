import "./style.css";
import { itemFactory, itemDOM } from "./items";
import { projectFactory, projectDOM } from "./projects";
import Todo from "./interface";

// const item1 = itemFactory('Call Ben', 'About work', 'Jan 29th', '3');
// const item2 = itemFactory('Call Jane', 'About school', 'Jan 28th', '1');
// const item3 = itemFactory('Call Vadym', 'About family', 'Jan 27th', '2');

// const proj1 = projectFactory('Default');
// const projectContainer = document.getElementById('projects');
// const projElem = projectDOM.createProject(proj1);
// projectContainer.appendChild(projElem);

// const proj2 = projectFactory('Another one');
// const projElem2 = projectDOM.createProject(proj2);
// projectContainer.appendChild(projElem2);

// const itemContainer = document.getElementById('todos');
// [item1, item2, item3].forEach((item, i) => {
//     const itemElem = itemDOM.createItem(item, i);
//     itemContainer.appendChild(itemElem);
// });

// itemDOM.deleteItem(2);

window.onload = Todo.showProjects;

const createProjBtn = document.getElementById('create-project');
createProjBtn.addEventListener("click", Todo.makeProject);

const createItemBtn = document.getElementById('create-item');
createItemBtn.addEventListener('click', Todo.makeItem);

const removeProjBtn = document.getElementById('remove-project');
removeProjBtn.addEventListener('click', Todo.removeProject);

const editProjBtn = document.getElementById('edit-project');
editProjBtn.addEventListener('click', Todo.editProject)