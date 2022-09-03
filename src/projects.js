const projectFactory = (name) => {
    const _name = name;
    const _itemList = [];

    // storing projects locally
    const storageObject = {[_name]: _itemList}
    localStorage.setItem(JSON.stringify(storageObject))

    const getName = () => _name;
    const setName = (newName) => {
        // remove the old item
        localStorage.removeItem(_name)

        // set new item with the new name 
        _name = newName
        const newStorageObject = {[_name]: _itemList}
        localStorage.setItem(JSON.stringify(newStorageObject))
    };

    const getItems = () => _itemList;
    const addItem = (item) => {
        _itemList.push(item)
        //
    };
    const removeItem = (position) => _itemList.splice(position, 1);

    return { getName, setName, getItems, addItem, removeItem }
};

const projectDOM = (() => {
    const createProject = (project, id) => {
        const container = document.createElement('div');
        container.classList.add('project');
        container.setAttribute('data-index', id);

        const title = document.createElement('p');
        title.classList.add('project-title');
        title.textContent = project.getName();
        container.appendChild(title);

        return container;
    }

    const deleteProject = (id) => {
        const projects = document.getElementById('projects');
        const project = document.querySelector(`div[data-index="${id}"]`);
        projects.removeChild(project);
    }

    return { createProject, deleteProject }
})();

export { projectFactory, projectDOM };


/*
    1. Create a localStorage object upon creating a project
    2. If you want to rename the proj, remove it from localStorage
        and add a new object
    3. To get items, getItem() from the localStorage 
        and JSON.parse it
    4. To add items, getItem() -> JSON.parse() -> array.push(obj) 
        -> JSON.stringify(obj) -> localStorage.setItem(newObj)
    5. To remove items, same thing as in (4) but array.splice(obj, 1)
*/