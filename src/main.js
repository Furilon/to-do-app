import "./style.css";
import { itemFactory, itemDOM } from "./items";
import { projectFactory, projectDOM } from "./projects";
import Todo from "./interface";

window.onload = Todo.showProjects;

const createProjBtn = document.getElementById('create-project');
createProjBtn.addEventListener("click", Todo.makeProject);

const createItemBtn = document.getElementById('create-item');
createItemBtn.addEventListener('click', Todo.makeItem);

const removeProjBtn = document.getElementById('remove-project');
removeProjBtn.addEventListener('click', Todo.removeProject);

const editProjBtn = document.getElementById('edit-project');
editProjBtn.addEventListener('click', Todo.editProject)