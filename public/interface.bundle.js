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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQXlCLCtEQUF3QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBd0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWtCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFXO0FBQ3BDO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RGb3JtID0gKGFkZFByb2plY3QpID0+IHtcbiAgICBcbiAgICAvLyBjcmVhdGUgYSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Byb2plY3RGb3JtQ29udGFpbmVyJ1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIlxuXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ3Byb2plY3RGb3JtJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgSW5ib3gnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJ1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBwcmV2ZW50cyBwYWdlIHJlZnJlc2ggYW5kIFwiY2xvc2VzXCIgdGhlIGZvcm1cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIlxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIGZ1bmMgdGhhdCBpcyBzdXBwbGllZCBieSB0aGUgaW50ZXJmYWNlXG4gICAgICAgIGFkZFByb2plY3QoKVxuICAgICAgICBcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBmb3JtIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVDaGlsZChlLnBhcmVudE5vZGUucGFyZW50Tm9kZSlcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZG9jdW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuXG5leHBvcnQgY29uc3QgaXRlbUZvcm0gPSAoYWRkSXRlbSkgPT4ge1xuICAgIFxuICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5pZCA9J2l0ZW1Gb3JtQ29udGFpbmVyJ1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IEl0ZW1cIlxuXG4gICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gJ2l0ZW1Gb3JtJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQ2FsbCBEYWQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgdGl0bGUuaWQgPSAnaXRlbVRpdGxlJ1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRS5nLiwgQW5kIGFzayBoaW0gYWJvdXQgdGhlIHN1bnNldC4nKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpXG4gICAgZGVzY3JpcHRpb24uaWQgPSAnaXRlbURlc2NyaXB0aW9uJ1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0UuZy4sIFRvbmlnaHQnKVxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIGR1ZS5pZCA9ICdpdGVtRHVlJ1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdtYXgnLCAnNCcpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcxJylcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKVxuICAgIHByaW9yaXR5LmlkID0gJ2l0ZW1Qcmlvcml0eSdcblxuICAgIC8vIHRoZSBidXR0b24gcHJldmVudHMgcGFnZSByZWZyZXNoIGFuZCBcImNsb3Nlc1wiIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBpdGVtXCJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBmdW5jIHN1cHBsaWVkIGJ5IHRoZSBpbnRlcmZhY2VcbiAgICAgICAgYWRkSXRlbSgpXG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgdGhlIGZvcm0gZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUNoaWxkKGUucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZG9jdW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn0iLCJjb25zdCBpdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSxcbiAgICAgICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5IH1cblxufTtcblxuY29uc3QgaXRlbURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1sZWZ0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZHVlZGF0ZScpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5nZXREdWVEYXRlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tcHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLmdldFByaW9yaXR5KCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xlZnQpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdG9kb3MucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IF9pdGVtTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IF9uYW1lO1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4gX25hbWUgPSBuZXdOYW1lO1xuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBfaXRlbUxpc3Q7XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiBfaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHBvc2l0aW9uKSA9PiBfaXRlbUxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIHNldE5hbWUsIGdldEl0ZW1zLCBhZGRJdGVtLCByZW1vdmVJdGVtIH1cbn07XG5cbmNvbnN0IHByb2plY3RET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWluZGV4PVwiJHtpZH1cIl1gKTtcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSBmcm9tICcuL2l0ZW1zJ1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcHJvamVjdEZvcm0sIGl0ZW1Gb3JtIH0gZnJvbSBcIi4vZm9ybXNcIlxuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdEZWZhdWx0JylcbiAgICBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdBYm91dCB3b3JrJywgJ0phbiAyOXRoJywgJzMnKVxuICAgIGNvbnN0IGl0ZW0yID0gaXRlbUZhY3RvcnkoJ0NhbGwgSmFuZScsICdBYm91dCBzY2hvb2wnLCAnSmFuIDI4dGgnLCAnMScpXG4gICAgY29uc3QgaXRlbTMgPSBpdGVtRmFjdG9yeSgnQ2FsbCBWYWR5bScsICdBYm91dCBmYW1pbHknLCAnSmFuIDI3dGgnLCAnMicpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0yKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTMpXG4gICAgLy8gQSBsaXN0IG9mIHByb2plY3RGYWN0b3J5IG9iamVjdHMsIHdoaWNoIGFyZSBiYXNpY2FsbHkgbGlzdHMgb2YgaXRlbXMuXG4gICAgLy8gU28sIGl0J3MgYSAyRCBsaXN0LlxuICAgIGxldCBfcHJvamVjdExpc3QgPSBbZGVmYXVsdFByb2plY3RdXG5cbiAgICAvLyBDbGljayBvbiBhIHBhcnRpY3VsYXIgcHJvaiwgbG9vcCB0aHJ1IGl0cyBpdGVtcywgYW5kIGNyZWF0ZSBhbiBlbGVtIGZvciBlYWNoXG4gICAgY29uc3QgX3Nob3dJdGVtcyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUVsZW0ubGFzdENoaWxkKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgX2RlbGV0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgd2hpbGUgKGl0ZW1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBfcHJvamVjdExpc3QsIGdpdmUgZWFjaCBwcm9qIGVsZW0gYW4gSUQgYW5kIGFwcGVuZCB0byBjb250YWluZXIuXG4gICAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgX3Byb2plY3RMaXN0LmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2osIGkpXG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGZpcnN0IHByb2plY3QgYWN0aXZlIGFuZCBzaG93IGl0cyBpdGVtc1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHByb2ouZ2V0SXRlbXMoKVxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIHByb2plY3QgaW50ZXJuYWxseVxuICAgICAgICBwcm9qZWN0Rm9ybSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICAgICAgICAgICAgX3Byb2plY3RMaXN0LnB1c2gocHJvamVjdClcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHByb2plY3QncyBpZCBhbmQgbWFrZSBhIHByb2plY3QgRE9NXG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBsZXQgcHJvaklEID0gMFxuICAgICAgICBpZiAocHJvakNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2pJRCA9ICtwcm9qQ29udGFpbmVyLmxhc3RDaGlsZC5kYXRhc2V0LmluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2plY3QsIHByb2pJRClcbiAgICAgICAgcHJvakVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgcHJvakVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qRWxlbSlcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBGaW5kIGFjdGl2ZSBwcm9qLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX3Byb2plY3RMaXN0LFxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2ouZGF0YXNldC5pbmRleFxuICAgICAgICBwcm9qZWN0RE9NLmRlbGV0ZVByb2plY3QocHJvaklEKVxuICAgICAgICBfcHJvamVjdExpc3Quc3BsaWNlKHByb2pJRCwgMSlcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBNYWtlIHRoZSBsYXN0IHByb2plY3QgYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbSA9IHByb2pDb250YWluZXIubGFzdENoaWxkXG4gICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgLy8gU2hvdyBhY3RpdmUgcHJvamVjdCdzIGl0ZW1zXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qZWN0SURdXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmUgYW5kIGFjdGl2YXRlIHRoaXMgcHJvamVjdFxuICAgIGNvbnN0IG1ha2VQcm9qZWN0QWN0aXZlID0gKGUpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmVcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2opID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG5cbiAgICAgICAgLy8gQWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgLy8gRGVsZXRlIGl0ZW1zIGZyb20gcHJldiBwcm9qXG4gICAgICAgIF9kZWxldGVJdGVtcygpXG5cbiAgICAgICAgLy8gU2hvdyBpdGVtcyBmb3IgdGhpcyBwcm9qZWN0XG4gICAgICAgIF9zaG93SXRlbXMoZSlcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFuIGl0ZW0ncyBpZCwgZGVsZXRlIGl0cyBET00gYW5kIHB1c2ggb3V0IG9mIF9pdGVtTGlzdFxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAvLyBGaW5kIGEgcHJvamVjdCdzIGlkIGFuZCBpdHMgb2JqIGluIF9wcm9qZWN0TGlzdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEl0ZW0ncyBJRFxuICAgICAgICBjb25zdCBpdGVtSUQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgLy8gRGVsZXRlIGl0ZW0gZnJvbSBwcm9qZWN0IGFuZCBmcm9tIERPTVxuICAgICAgICAvLyAoSSBjaG9zZSB0byByZWZyZXNoIGVsZW1lbnRzIHRvIGdpdmUgdGhlbSBhcHByb3ByaWF0ZSBJRHMpXG4gICAgICAgIHByb2plY3QucmVtb3ZlSXRlbShpdGVtSUQpXG4gICAgICAgIC8vIGl0ZW1ET00uZGVsZXRlSXRlbShpdGVtSUQpO1xuXG4gICAgICAgIF9kZWxldGVJdGVtcygpXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYWN0aXZlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cblxuICAgICAgICAvLyBBc2sgdXNlciBhYm91dCBpdGVtJ3MgcHJvcHNcbiAgICAgICAgaXRlbUZvcm0oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1UaXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1EZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRHVlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVByaW9yaXR5JykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgYW4gaXRlbSBhbmQgYWRkIGl0IHRvIHRoZSBwcm9qZWN0XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHByb2plY3QuYWRkSXRlbShpdGVtKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gTWFrZSBpdGVtJ3MgRE9NIGVsZW0gYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICAgICAgICAvLyBVc2UgbGFzdCBpdGVtJ3MgaWQgKyAxIGFzIHRoaXMgbmV3IGl0ZW0ncyBpZFxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgbGV0IGl0ZW1JRCA9IDBcbiAgICAgICAgaWYgKGl0ZW1Db250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBpdGVtSUQgPSBpdGVtQ29udGFpbmVyLmxhc3RDaGlsZC5pZCArIDFcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpdGVtSUQpXG4gICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIG1ha2VJdGVtLFxuICAgICAgICByZW1vdmVJdGVtLFxuICAgICAgICBtYWtlUHJvamVjdEFjdGl2ZSxcbiAgICAgICAgc2hvd1Byb2plY3RzLFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVG9kb1xuXG4vLyBPaywgdGhlcmUncyBhIGxvdCB0byBzYXkuXG5cbi8vIEZpcnN0IG9mIGFsbCwgSSBoYXZlIGEgbG90IG9mIHJlcGV0aXRpdmUgY29kZS5cbi8vIEFsbW9zdCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBoYXZlIHBhcnRzIHRoYXQgcmVwZWF0IGVhY2ggb3RoZXIuXG4vLyBUaGF0IGlzIGVhc2lseSBmaXhhYmxlLlxuXG4vLyBTZWNvbmRseSwgSSBjYW4gY3VzdG9taXplIENTUyBwcm9wZXJseS5cblxuLy8gVGhpcmRseSwgSSBjYW4gbWFrZSBwcm9wZXIgZm9ybXMgdG8gbWFrZSBwcm9qZWN0cyBhbmQgaXRlbXMuXG5cbi8vIEZvdXJ0aGx5LCBpdCB3b3VsZCBiZSBjb29sIHRvIGRvIHNvbWUgaW5wdXQgdmFsaWRhdGlvbi5cblxuLy8gRmlmdGhseSwgaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIGVkaXQgeW91ciBwcm9qZWN0cyBhbmQgaXRlbXMuXG5cbi8vIElmIHRoZXJlJ3Mgbm8gcHJvamVjdCBuYW1lIGdpdmVuLCBpdCBzaG91bGRuJ3QgYmUgY3JlYXRlZC5cbi8vIFVsdGltYXRlbHksIF4gY29tZXMgZG93biB0byBpbnB1dCB2YWxpZGF0aW9uXG5cbi8vIFN0b3JlIHByb2plY3RzIGluIGxvY2FsU3RvcmFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==