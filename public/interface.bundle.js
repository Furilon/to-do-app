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


const itemForm = (addItem) => {
    
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

    const getName = () => _name;
    const setName = (newName) => _name = newName;

    const getItems = () => _itemList;
    const addItem = (item) => _itemList.push(item);
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
            const projectTitle = document.querySelector('.projectTitle').value;
            const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectTitle)
            _projectList.push(project)
        })

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
            const itemTitle = document.querySelector('.itemTitle').value;
            const itemDescription = document.querySelector('.itemDescription').value;
            const itemDue = document.querySelector('.itemDue').value;
            const itemPriority = document.querySelector('.itemPriority').value;

            // Make an item and add it to the project
            const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, description, dueDate, priority)
            project.addItem(item)
        })


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQXlCLCtEQUF3QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBd0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWtCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFXO0FBQ3BDO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RGb3JtID0gKGFkZFByb2plY3QpID0+IHtcbiAgICBcbiAgICAvLyBjcmVhdGUgYSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcblxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGZcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFLmcuLCBJbmJveCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICB0aXRsZS5jbGFzc0xpc3QoJ3Byb2plY3RUaXRsZScpXG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uIHByZXZlbnRzIHBhZ2UgcmVmcmVzaCBhbmQgXCJjbG9zZXNcIiB0aGUgZm9ybVxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gZnVuYyB0aGF0IGlzIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkUHJvamVjdCgpXG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUNoaWxkKGUucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBkb2N1bWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBpdGVtRm9ybSA9IChhZGRJdGVtKSA9PiB7XG4gICAgXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1Gb3JtQ29udGFpbmVyJylcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIk5ldyBJdGVtXCJcblxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGZcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtRm9ybScpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFLmcuLCBDYWxsIERhZCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICB0aXRsZS5jbGFzc0xpc3QoJ2l0ZW1UaXRsZScpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFLmcuLCBBbmQgYXNrIGhpbSBhYm91dCB0aGUgc3Vuc2V0LicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QoJ2l0ZW1EZXNjcmlwdGlvbicpXG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0YXJlYScpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgVG9uaWdodCcpXG4gICAgZHVlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgZHVlLmNsYXNzTGlzdCgnaXRlbUR1ZScpXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ21heCcsICc0JylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzEnKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0KCdpdGVtUHJpb3JpdHknKVxuXG4gICAgLy8gdGhlIGJ1dHRvbiBwcmV2ZW50cyBwYWdlIHJlZnJlc2ggYW5kIFwiY2xvc2VzXCIgdGhlIGZvcm1cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIGl0ZW1cIlxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIGZ1bmMgc3VwcGxpZWQgYnkgdGhlIGludGVyZmFjZVxuICAgICAgICBhZGRJdGVtKClcbiAgICAgICAgXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZm9ybSBmcm9tIHRoZSBzY3JlZW5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlQ2hpbGQoZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG4gICAgfSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBkb2N1bWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSIsImNvbnN0IGl0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IF90aXRsZSA9IG5ld1RpdGxlO1xuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0RhdGUpID0+IF9kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbiAgICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LFxuICAgICAgICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3JpdHkgfVxuXG59O1xuXG5jb25zdCBpdGVtRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVJdGVtID0gKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gaTtcblxuICAgICAgICBjb25zdCB0b2RvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGVmdC5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtLWxlZnRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS10aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0VGl0bGUoKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kdWVkYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmdldER1ZURhdGUoKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1wcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGVmdClcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0b2Rvcy5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVJdGVtLCBkZWxldGVJdGVtIH1cblxufSkoKTtcblxuZXhwb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgX2l0ZW1MaXN0ID0gW107XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWU7XG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiBfbmFtZSA9IG5ld05hbWU7XG5cbiAgICBjb25zdCBnZXRJdGVtcyA9ICgpID0+IF9pdGVtTGlzdDtcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IF9pdGVtTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAocG9zaXRpb24pID0+IF9pdGVtTGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgc2V0TmFtZSwgZ2V0SXRlbXMsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfVxufTtcblxuY29uc3QgcHJvamVjdERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0LCBpZCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGlkKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtaW5kZXg9XCIke2lkfVwiXWApO1xuICAgICAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH1cbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0RE9NIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpdGVtRmFjdG9yeSwgaXRlbURPTSB9IGZyb20gJy4vaXRlbXMnXG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9IGZyb20gJy4vcHJvamVjdHMnXG5pbXBvcnQgeyBwcm9qZWN0Rm9ybSwgaXRlbUZvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiXG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ0RlZmF1bHQnKVxuICAgIGNvbnN0IGl0ZW0xID0gaXRlbUZhY3RvcnkoJ0NhbGwgQmVuJywgJ0Fib3V0IHdvcmsnLCAnSmFuIDI5dGgnLCAnMycpXG4gICAgY29uc3QgaXRlbTIgPSBpdGVtRmFjdG9yeSgnQ2FsbCBKYW5lJywgJ0Fib3V0IHNjaG9vbCcsICdKYW4gMjh0aCcsICcxJylcbiAgICBjb25zdCBpdGVtMyA9IGl0ZW1GYWN0b3J5KCdDYWxsIFZhZHltJywgJ0Fib3V0IGZhbWlseScsICdKYW4gMjd0aCcsICcyJylcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0xKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTIpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMylcbiAgICAvLyBBIGxpc3Qgb2YgcHJvamVjdEZhY3Rvcnkgb2JqZWN0cywgd2hpY2ggYXJlIGJhc2ljYWxseSBsaXN0cyBvZiBpdGVtcy5cbiAgICAvLyBTbywgaXQncyBhIDJEIGxpc3QuXG4gICAgbGV0IF9wcm9qZWN0TGlzdCA9IFtkZWZhdWx0UHJvamVjdF1cblxuICAgIC8vIENsaWNrIG9uIGEgcGFydGljdWxhciBwcm9qLCBsb29wIHRocnUgaXRzIGl0ZW1zLCBhbmQgY3JlYXRlIGFuIGVsZW0gZm9yIGVhY2hcbiAgICBjb25zdCBfc2hvd0l0ZW1zID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtRWxlbS5sYXN0Q2hpbGQpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBfZGVsZXRlSXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICB3aGlsZSAoaXRlbUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW1Db250YWluZXIubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIF9wcm9qZWN0TGlzdCwgZ2l2ZSBlYWNoIHByb2ogZWxlbSBhbiBJRCBhbmQgYXBwZW5kIHRvIGNvbnRhaW5lci5cbiAgICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBfcHJvamVjdExpc3QuZm9yRWFjaCgocHJvaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvaiwgaSlcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgZmlyc3QgcHJvamVjdCBhY3RpdmUgYW5kIHNob3cgaXRzIGl0ZW1zXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvai5nZXRJdGVtcygpXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgcHJvamVjdCBpbnRlcm5hbGx5XG4gICAgICAgIHByb2plY3RGb3JtKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpXG4gICAgICAgICAgICBfcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgcHJvamVjdCdzIGlkIGFuZCBtYWtlIGEgcHJvamVjdCBET01cbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGxldCBwcm9qSUQgPSAwXG4gICAgICAgIGlmIChwcm9qQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgcHJvaklEID0gK3Byb2pDb250YWluZXIubGFzdENoaWxkLmRhdGFzZXQuaW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcHJvaklEKVxuICAgICAgICBwcm9qRWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBwcm9qRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKVxuICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKVxuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYWN0aXZlIHByb2osIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfcHJvamVjdExpc3QsXG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvai5kYXRhc2V0LmluZGV4XG4gICAgICAgIHByb2plY3RET00uZGVsZXRlUHJvamVjdChwcm9qSUQpXG4gICAgICAgIF9wcm9qZWN0TGlzdC5zcGxpY2UocHJvaklELCAxKVxuICAgICAgICBfZGVsZXRlSXRlbXMoKVxuXG4gICAgICAgIC8vIE1ha2UgdGhlIGxhc3QgcHJvamVjdCBhY3RpdmVcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvakNvbnRhaW5lci5sYXN0Q2hpbGRcbiAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBTaG93IGFjdGl2ZSBwcm9qZWN0J3MgaXRlbXNcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gcHJvamVjdEVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2plY3RJRF1cbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZSBhbmQgYWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgY29uc3QgbWFrZVByb2plY3RBY3RpdmUgPSAoZSkgPT4ge1xuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAvLyBBY3RpdmF0ZSB0aGlzIHByb2plY3RcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBTaG93IGl0ZW1zIGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgX3Nob3dJdGVtcyhlKVxuICAgIH1cblxuICAgIC8vIEZpbmQgYW4gaXRlbSdzIGlkLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX2l0ZW1MaXN0XG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYSBwcm9qZWN0J3MgaWQgYW5kIGl0cyBvYmogaW4gX3Byb2plY3RMaXN0XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2pFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdXG5cbiAgICAgICAgLy8gSXRlbSdzIElEXG4gICAgICAgIGNvbnN0IGl0ZW1JRCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcblxuICAgICAgICAvLyBEZWxldGUgaXRlbSBmcm9tIHByb2plY3QgYW5kIGZyb20gRE9NXG4gICAgICAgIC8vIChJIGNob3NlIHRvIHJlZnJlc2ggZWxlbWVudHMgdG8gZ2l2ZSB0aGVtIGFwcHJvcHJpYXRlIElEcylcbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1JRClcbiAgICAgICAgLy8gaXRlbURPTS5kZWxldGVJdGVtKGl0ZW1JRCk7XG5cbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEFzayB1c2VyIGFib3V0IGl0ZW0ncyBwcm9wc1xuICAgICAgICBpdGVtRm9ybSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbURlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtRHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1EdWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUHJpb3JpdHknKS52YWx1ZTtcblxuICAgICAgICAgICAgLy8gTWFrZSBhbiBpdGVtIGFuZCBhZGQgaXQgdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICAgICAgcHJvamVjdC5hZGRJdGVtKGl0ZW0pXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBNYWtlIGl0ZW0ncyBET00gZWxlbSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gICAgICAgIC8vIFVzZSBsYXN0IGl0ZW0ncyBpZCArIDEgYXMgdGhpcyBuZXcgaXRlbSdzIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBsZXQgaXRlbUlEID0gMFxuICAgICAgICBpZiAoaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGl0ZW1JRCA9IGl0ZW1Db250YWluZXIubGFzdENoaWxkLmlkICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGl0ZW1JRClcbiAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgbWFrZUl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW0sXG4gICAgICAgIG1ha2VQcm9qZWN0QWN0aXZlLFxuICAgICAgICBzaG93UHJvamVjdHMsXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvXG5cbi8vIE9rLCB0aGVyZSdzIGEgbG90IHRvIHNheS5cblxuLy8gRmlyc3Qgb2YgYWxsLCBJIGhhdmUgYSBsb3Qgb2YgcmVwZXRpdGl2ZSBjb2RlLlxuLy8gQWxtb3N0IGFsbCBvZiB0aGUgZnVuY3Rpb25zIGhhdmUgcGFydHMgdGhhdCByZXBlYXQgZWFjaCBvdGhlci5cbi8vIFRoYXQgaXMgZWFzaWx5IGZpeGFibGUuXG5cbi8vIFNlY29uZGx5LCBJIGNhbiBjdXN0b21pemUgQ1NTIHByb3Blcmx5LlxuXG4vLyBUaGlyZGx5LCBJIGNhbiBtYWtlIHByb3BlciBmb3JtcyB0byBtYWtlIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gRm91cnRobHksIGl0IHdvdWxkIGJlIGNvb2wgdG8gZG8gc29tZSBpbnB1dCB2YWxpZGF0aW9uLlxuXG4vLyBGaWZ0aGx5LCBpdCB3b3VsZCBiZSBuaWNlIHRvIGJlIGFibGUgdG8gZWRpdCB5b3VyIHByb2plY3RzIGFuZCBpdGVtcy5cblxuLy8gSWYgdGhlcmUncyBubyBwcm9qZWN0IG5hbWUgZ2l2ZW4sIGl0IHNob3VsZG4ndCBiZSBjcmVhdGVkLlxuLy8gVWx0aW1hdGVseSwgXiBjb21lcyBkb3duIHRvIGlucHV0IHZhbGlkYXRpb25cblxuLy8gU3RvcmUgcHJvamVjdHMgaW4gbG9jYWxTdG9yYWdlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9