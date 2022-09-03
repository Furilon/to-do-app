/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "itemForm": () => (/* binding */ itemForm)
/* harmony export */ });
const projectForm = (addProject) => {
    
    // create a form container
    const container = document.createElement('div')
    container.id = 'projectFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Project"

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
    submit.textContent = "Add project"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func that is supplied by the interface
        addProject()
        
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    const body = document.querySelector('body')
    body.appendChild(container)
}


const itemForm = (addItem) => {
    
    // create the form container
    const container = document.createElement('div')
    container.id ='itemFormContainer'

    const formTitle = document.createElement('h2')
    formTitle.textContent = "New Item"

    // create the form itself
    const form = document.createElement('form')
    form.id = 'itemForm'

    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'E.g., Call Dad')
    title.setAttribute('required', 'true')
    title.id = 'itemTitle'

    const description = document.createElement('input')
    description.setAttribute('type', 'text')
    description.setAttribute('placeholder', 'E.g., And ask him about the sunset.')
    description.setAttribute('required', 'true')
    description.id = 'itemDescription'

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
    submit.textContent = "Add item"
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // func supplied by the interface
        addItem()
        
        // remove the form from the screen
        const body = document.querySelector('body')
        body.removeChild(e.target.parentNode.parentNode)
    })

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(due)
    form.appendChild(priority)
    form.appendChild(submit)
    
    container.appendChild(formTitle)
    container.appendChild(form)

    const body = document.querySelector('body')
    body.appendChild(container)
}

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemFactory": () => (/* binding */ itemFactory),
/* harmony export */   "itemDOM": () => (/* binding */ itemDOM)
/* harmony export */ });
const itemFactory = (title, description, dueDate, priority) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    const setTitle = (newTitle) => _title = newTitle;
    const setDescription = (newDescription) => _description = newDescription;
    const setDueDate = (newDate) => _dueDate = newDate;
    const setPriority = (newPriority) => _priority = newPriority;

    return { getTitle, getDescription, getDueDate, getPriority,
             setTitle, setDescription, setDueDate, setPriority }

};

const itemDOM = (() => {
    const createItem = (item, i) => {
        const container = document.createElement('div');
        container.classList.add('todo-item');
        container.id = i;

        const todoLeft = document.createElement('div');
        todoLeft.classList.add("todo-item-left");

        const title = document.createElement('p');
        title.classList.add('todo-item-title');
        title.textContent = item.getTitle();
        todoLeft.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('todo-item-description');
        description.textContent = item.getDescription();
        todoLeft.appendChild(description);

        const dueDate = document.createElement('p');
        dueDate.classList.add('todo-item-duedate');
        dueDate.textContent = item.getDueDate();
        todoLeft.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.classList.add('todo-item-priority');
        priority.textContent = item.getPriority();
        todoLeft.appendChild(priority);

        container.appendChild(todoLeft)

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        container.appendChild(checkbox);

        return container;
    }

    const deleteItem = (id) => {
        const todos = document.getElementById('todos');
        const item = document.getElementById(id);
        todos.removeChild(item);
    }

    return { createItem, deleteItem }

})();



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM)
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./src/items.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




const Todo = (() => {
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default')
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'About work', 'Jan 29th', '3')
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'About school', 'Jan 28th', '1')
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'About family', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // So, it's a 2D list.
    let _projectList = [defaultProject]

    // Click on a particular proj, loop thru its items, and create an elem for each
    const _showItems = (e) => {
        const itemContainer = document.getElementById('todos')
        const projID = e.target.dataset.index
        const project = _projectList[projID]
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            console.log(itemElem.lastChild)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
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
            const projectElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(proj, i)

            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active')
                projectElem.addEventListener('click', makeProjectActive)
                const itemContainer = document.getElementById('todos')
                const items = proj.getItems()
                items.forEach((item, i) => {
                    const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
                    itemElem.lastChild.addEventListener('click', removeItem)
                    itemContainer.appendChild(itemElem)
                })
            }
            projContainer.appendChild(projectElem)
        })
    }

    const makeProject = () => {
        // Make a project internally
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.projectForm)(() => {
            const projectTitle = document.querySelector('#projectTitle').value;
            const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectTitle)
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
            const projElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(project, projID)
            projElem.classList.add('active')
            projElem.addEventListener('click', makeProjectActive)
            projContainer.appendChild(projElem)
    
            // Delete items from prev proj
            _deleteItems()
        })

    }

    const removeProject = () => {
        // Find active proj, delete its DOM and push out of _projectList,
        const proj = document.querySelector('.active')
        const projID = proj.dataset.index
        _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.deleteProject(projID)
        _projectList.splice(projID, 1)
        _deleteItems()

        // Make the last project active
        const projContainer = document.getElementById('projects')
        const projectElem = projContainer.lastChild
        projectElem.classList.add('active')

        // Show active project's items
        const projectID = projectElem.dataset.index
        const project = _projectList[projectID]
        const itemContainer = document.getElementById('todos')
        const items = project.getItems()
        items.forEach((item, i) => {
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
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
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

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
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })
    }

    const makeItem = () => {
        // Find active project
        const projElem = document.querySelector('.active')
        const projID = projElem.dataset.index
        const project = _projectList[projID]

        // Ask user about item's props
        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.itemForm)(() => {
            const title = document.querySelector('#itemTitle').value;
            const description = document.querySelector('#itemDescription').value;
            const dueDate = document.querySelector('#itemDue').value;
            const priority = document.querySelector('#itemPriority').value;

            // Make an item and add it to the project
            const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, description, dueDate, priority)
            project.addItem(item)
            
            // Make item's DOM elem and add it to the page
            // Use last item's id + 1 as this new item's id
            const itemContainer = document.getElementById('todos')
            let itemID = 0
            if (itemContainer.lastChild) {
                itemID = itemContainer.lastChild.id + 1
            }
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, itemID)
            itemElem.lastChild.addEventListener('click', removeItem)
            itemContainer.appendChild(itemElem)
        })


    }

    return {
        makeProject,
        removeProject,
        makeItem,
        removeItem,
        makeProjectActive,
        showProjects,
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// Ok, there's a lot to say.

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.

// Thirdly, I can make proper forms to make projects and items.

// Fourthly, it would be cool to do some input validation.

// Fifthly, it would be nice to be able to edit your projects and items.

// If there's no project name given, it shouldn't be created.
// Ultimately, ^ comes down to input validation

// Store projects in localStorage
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vdG8tZG8tYXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdEZvcm0gPSAoYWRkUHJvamVjdCkgPT4ge1xuICAgIFxuICAgIC8vIGNyZWF0ZSBhIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuaWQgPSAncHJvamVjdEZvcm1Db250YWluZXInXG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uaWQgPSAncHJvamVjdEZvcm0nXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFLmcuLCBJbmJveCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICB0aXRsZS5pZCA9ICdwcm9qZWN0VGl0bGUnXG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uIHByZXZlbnRzIHBhZ2UgcmVmcmVzaCBhbmQgXCJjbG9zZXNcIiB0aGUgZm9ybVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gZnVuYyB0aGF0IGlzIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkUHJvamVjdCgpXG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn1cblxuXG5leHBvcnQgY29uc3QgaXRlbUZvcm0gPSAoYWRkSXRlbSkgPT4ge1xuICAgIFxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5pZCA9J2l0ZW1Gb3JtQ29udGFpbmVyJ1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IEl0ZW1cIlxuXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ2l0ZW1Gb3JtJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQ2FsbCBEYWQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuaWQgPSAnaXRlbVRpdGxlJ1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQW5kIGFzayBoaW0gYWJvdXQgdGhlIHN1bnNldC4nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgZGVzY3JpcHRpb24uaWQgPSAnaXRlbURlc2NyaXB0aW9uJ1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0UuZy4sIFRvbmlnaHQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIGR1ZS5pZCA9ICdpdGVtRHVlJ1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIHByaW9yaXR5LmlkID0gJ2l0ZW1Qcmlvcml0eSdcblxuICAgIC8vIHRoZSBidXR0b24gcHJldmVudHMgcGFnZSByZWZyZXNoIGFuZCBcImNsb3Nlc1wiIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBpdGVtXCJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBmdW5jIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkSXRlbSgpXG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG59IiwiY29uc3QgaXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICAgIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksXG4gICAgICAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcml0eSB9XG5cbn07XG5cbmNvbnN0IGl0ZW1ET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgICAgICBjb250YWluZXIuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW0tbGVmdFwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5nZXRUaXRsZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWR1ZWRhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RHVlRGF0ZSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLXByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5nZXRQcmlvcml0eSgpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MZWZ0KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRvZG9zLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUl0ZW0sIGRlbGV0ZUl0ZW0gfVxuXG59KSgpO1xuXG5leHBvcnQgeyBpdGVtRmFjdG9yeSwgaXRlbURPTSB9IiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbUxpc3QgPSBbXTtcblxuICAgIC8vIHN0b3JpbmcgcHJvamVjdHMgbG9jYWxseVxuICAgIGNvbnN0IHN0b3JhZ2VPYmplY3QgPSB7W19uYW1lXTogX2l0ZW1MaXN0fVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpKVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IF9uYW1lO1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgICAgICAvLyByZW1vdmUgdGhlIG9sZCBpdGVtXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKF9uYW1lKVxuXG4gICAgICAgIC8vIHNldCBuZXcgaXRlbSB3aXRoIHRoZSBuZXcgbmFtZSBcbiAgICAgICAgX25hbWUgPSBuZXdOYW1lXG4gICAgICAgIGNvbnN0IG5ld1N0b3JhZ2VPYmplY3QgPSB7W19uYW1lXTogX2l0ZW1MaXN0fVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShuZXdTdG9yYWdlT2JqZWN0KSlcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBfaXRlbUxpc3Q7XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIF9pdGVtTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIC8vXG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHBvc2l0aW9uKSA9PiBfaXRlbUxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIHNldE5hbWUsIGdldEl0ZW1zLCBhZGRJdGVtLCByZW1vdmVJdGVtIH1cbn07XG5cbmNvbnN0IHByb2plY3RET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWluZGV4PVwiJHtpZH1cIl1gKTtcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9O1xuXG5cbi8qXG4gICAgMS4gQ3JlYXRlIGEgbG9jYWxTdG9yYWdlIG9iamVjdCB1cG9uIGNyZWF0aW5nIGEgcHJvamVjdFxuICAgIDIuIElmIHlvdSB3YW50IHRvIHJlbmFtZSB0aGUgcHJvaiwgcmVtb3ZlIGl0IGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGFuZCBhZGQgYSBuZXcgb2JqZWN0XG4gICAgMy4gVG8gZ2V0IGl0ZW1zLCBnZXRJdGVtKCkgZnJvbSB0aGUgbG9jYWxTdG9yYWdlIFxuICAgICAgICBhbmQgSlNPTi5wYXJzZSBpdFxuICAgIDQuIFRvIGFkZCBpdGVtcywgZ2V0SXRlbSgpIC0+IEpTT04ucGFyc2UoKSAtPiBhcnJheS5wdXNoKG9iaikgXG4gICAgICAgIC0+IEpTT04uc3RyaW5naWZ5KG9iaikgLT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3T2JqKVxuICAgIDUuIFRvIHJlbW92ZSBpdGVtcywgc2FtZSB0aGluZyBhcyBpbiAoNCkgYnV0IGFycmF5LnNwbGljZShvYmosIDEpXG4qLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSBmcm9tICcuL2l0ZW1zJ1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcHJvamVjdEZvcm0sIGl0ZW1Gb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0JylcbiAgICBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdBYm91dCB3b3JrJywgJ0phbiAyOXRoJywgJzMnKVxuICAgIGNvbnN0IGl0ZW0yID0gaXRlbUZhY3RvcnkoJ0NhbGwgSmFuZScsICdBYm91dCBzY2hvb2wnLCAnSmFuIDI4dGgnLCAnMScpXG4gICAgY29uc3QgaXRlbTMgPSBpdGVtRmFjdG9yeSgnQ2FsbCBWYWR5bScsICdBYm91dCBmYW1pbHknLCAnSmFuIDI3dGgnLCAnMicpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0yKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTMpXG4gICAgLy8gQSBsaXN0IG9mIHByb2plY3RGYWN0b3J5IG9iamVjdHMsIHdoaWNoIGFyZSBiYXNpY2FsbHkgbGlzdHMgb2YgaXRlbXMuXG4gICAgLy8gU28sIGl0J3MgYSAyRCBsaXN0LlxuICAgIGxldCBfcHJvamVjdExpc3QgPSBbZGVmYXVsdFByb2plY3RdXG5cbiAgICAvLyBDbGljayBvbiBhIHBhcnRpY3VsYXIgcHJvaiwgbG9vcCB0aHJ1IGl0cyBpdGVtcywgYW5kIGNyZWF0ZSBhbiBlbGVtIGZvciBlYWNoXG4gICAgY29uc3QgX3Nob3dJdGVtcyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUVsZW0ubGFzdENoaWxkKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX2RlbGV0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgd2hpbGUgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBfcHJvamVjdExpc3QsIGdpdmUgZWFjaCBwcm9qIGVsZW0gYW4gSUQgYW5kIGFwcGVuZCB0byBjb250YWluZXIuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgX3Byb2plY3RMaXN0LmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2osIGkpXG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGZpcnN0IHByb2plY3QgYWN0aXZlIGFuZCBzaG93IGl0cyBpdGVtc1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHByb2ouZ2V0SXRlbXMoKVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIHByb2plY3QgaW50ZXJuYWxseVxuICAgICAgICBwcm9qZWN0Rm9ybSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICAgICAgICAgICAgX3Byb2plY3RMaXN0LnB1c2gocHJvamVjdClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmVcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICBcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgcHJvamVjdCdzIGlkIGFuZCBtYWtlIGEgcHJvamVjdCBET01cbiAgICAgICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICAgICAgbGV0IHByb2pJRCA9IDBcbiAgICAgICAgICAgIGlmIChwcm9qQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHByb2pJRCA9ICtwcm9qQ29udGFpbmVyLmxhc3RDaGlsZC5kYXRhc2V0LmluZGV4ICsgMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvakVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcHJvaklEKVxuICAgICAgICAgICAgcHJvakVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHByb2pFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVByb2plY3RBY3RpdmUpXG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKVxuICAgIFxuICAgICAgICAgICAgLy8gRGVsZXRlIGl0ZW1zIGZyb20gcHJldiBwcm9qXG4gICAgICAgICAgICBfZGVsZXRlSXRlbXMoKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvaiwgZGVsZXRlIGl0cyBET00gYW5kIHB1c2ggb3V0IG9mIF9wcm9qZWN0TGlzdCxcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgcHJvamVjdERPTS5kZWxldGVQcm9qZWN0KHByb2pJRClcbiAgICAgICAgX3Byb2plY3RMaXN0LnNwbGljZShwcm9qSUQsIDEpXG4gICAgICAgIF9kZWxldGVJdGVtcygpXG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbGFzdCBwcm9qZWN0IGFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW0gPSBwcm9qQ29udGFpbmVyLmxhc3RDaGlsZFxuICAgICAgICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgICAgIC8vIFNob3cgYWN0aXZlIHByb2plY3QncyBpdGVtc1xuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0RWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvamVjdElEXVxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0LmdldEl0ZW1zKClcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlIGFuZCBhY3RpdmF0ZSB0aGlzIHByb2plY3RcbiAgICBjb25zdCBtYWtlUHJvamVjdEFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuXG4gICAgICAgIC8vIEFjdGl2YXRlIHRoaXMgcHJvamVjdFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuXG4gICAgICAgIC8vIFNob3cgaXRlbXMgZm9yIHRoaXMgcHJvamVjdFxuICAgICAgICBfc2hvd0l0ZW1zKGUpXG4gICAgfVxuXG4gICAgLy8gRmluZCBhbiBpdGVtJ3MgaWQsIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfaXRlbUxpc3RcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICAgICAgLy8gRmluZCBhIHByb2plY3QncyBpZCBhbmQgaXRzIG9iaiBpbiBfcHJvamVjdExpc3RcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cblxuICAgICAgICAvLyBJdGVtJ3MgSURcbiAgICAgICAgY29uc3QgaXRlbUlEID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZFxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtIGZyb20gcHJvamVjdCBhbmQgZnJvbSBET01cbiAgICAgICAgLy8gKEkgY2hvc2UgdG8gcmVmcmVzaCBlbGVtZW50cyB0byBnaXZlIHRoZW0gYXBwcm9wcmlhdGUgSURzKVxuICAgICAgICBwcm9qZWN0LnJlbW92ZUl0ZW0oaXRlbUlEKVxuICAgICAgICAvLyBpdGVtRE9NLmRlbGV0ZUl0ZW0oaXRlbUlEKTtcblxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0LmdldEl0ZW1zKClcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VJdGVtID0gKCkgPT4ge1xuICAgICAgICAvLyBGaW5kIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2pFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG5cbiAgICAgICAgLy8gQXNrIHVzZXIgYWJvdXQgaXRlbSdzIHByb3BzXG4gICAgICAgIGl0ZW1Gb3JtKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW1UaXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbURlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW1EdWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW1Qcmlvcml0eScpLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBNYWtlIGFuIGl0ZW0gYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1GYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgICAgICBwcm9qZWN0LmFkZEl0ZW0oaXRlbSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTWFrZSBpdGVtJ3MgRE9NIGVsZW0gYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gVXNlIGxhc3QgaXRlbSdzIGlkICsgMSBhcyB0aGlzIG5ldyBpdGVtJ3MgaWRcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICAgICAgbGV0IGl0ZW1JRCA9IDBcbiAgICAgICAgICAgIGlmIChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGl0ZW1JRCA9IGl0ZW1Db250YWluZXIubGFzdENoaWxkLmlkICsgMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaXRlbUlEKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBtYWtlSXRlbSxcbiAgICAgICAgcmVtb3ZlSXRlbSxcbiAgICAgICAgbWFrZVByb2plY3RBY3RpdmUsXG4gICAgICAgIHNob3dQcm9qZWN0cyxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9cblxuLy8gT2ssIHRoZXJlJ3MgYSBsb3QgdG8gc2F5LlxuXG4vLyBGaXJzdCBvZiBhbGwsIEkgaGF2ZSBhIGxvdCBvZiByZXBldGl0aXZlIGNvZGUuXG4vLyBBbG1vc3QgYWxsIG9mIHRoZSBmdW5jdGlvbnMgaGF2ZSBwYXJ0cyB0aGF0IHJlcGVhdCBlYWNoIG90aGVyLlxuLy8gVGhhdCBpcyBlYXNpbHkgZml4YWJsZS5cblxuLy8gU2Vjb25kbHksIEkgY2FuIGN1c3RvbWl6ZSBDU1MgcHJvcGVybHkuXG5cbi8vIFRoaXJkbHksIEkgY2FuIG1ha2UgcHJvcGVyIGZvcm1zIHRvIG1ha2UgcHJvamVjdHMgYW5kIGl0ZW1zLlxuXG4vLyBGb3VydGhseSwgaXQgd291bGQgYmUgY29vbCB0byBkbyBzb21lIGlucHV0IHZhbGlkYXRpb24uXG5cbi8vIEZpZnRobHksIGl0IHdvdWxkIGJlIG5pY2UgdG8gYmUgYWJsZSB0byBlZGl0IHlvdXIgcHJvamVjdHMgYW5kIGl0ZW1zLlxuXG4vLyBJZiB0aGVyZSdzIG5vIHByb2plY3QgbmFtZSBnaXZlbiwgaXQgc2hvdWxkbid0IGJlIGNyZWF0ZWQuXG4vLyBVbHRpbWF0ZWx5LCBeIGNvbWVzIGRvd24gdG8gaW5wdXQgdmFsaWRhdGlvblxuXG4vLyBTdG9yZSBwcm9qZWN0cyBpbiBsb2NhbFN0b3JhZ2UiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=