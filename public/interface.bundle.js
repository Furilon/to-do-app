/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const _name = name
    const _itemList = []

    const getName = () => _name
    const setName = (newName) => (_name = newName)

    const getItems = () => _itemList
    const addItem = (item) => _itemList.push(item)
    const removeItem = (position) => _itemList.splice(position, 1)

    return { getName, setName, getItems, addItem, removeItem }
}

const projectDOM = (() => {
    const createProject = (project, id) => {
        const container = document.createElement('div')
        container.classList.add('project')
        container.setAttribute('data-index', id)

        const title = document.createElement('p')
        title.classList.add('project-title')
        title.textContent = project.getName()
        container.appendChild(title)

        return container
    }

    const deleteProject = (id) => {
        const projects = document.getElementById('projects')
        const project = document.querySelector(`div[data-index="${id}"]`)
        projects.removeChild(project)
    }

    return { createProject, deleteProject }
})()




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



const Todo = (() => {
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default')
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'About work', 'Jan 29th', '3')
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'About school', 'Jan 28th', '1')
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'About family', 'Jan 27th', '2')
    defaultProject.addItem(item1)
    defaultProject.addItem(item2)
    defaultProject.addItem(item3)
    // A list of projectFactory objects, which are basically lists of items.
    // Sp, it's a 2D list.
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
        const name = prompt('Give me a project name.')
        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(name)
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
        const title = prompt('Title of the to-do item: ')
        const description = prompt('Description: ')
        const dueDate = prompt('Due Date:')
        const priority = prompt('Priority: ')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0UsR0FBRztBQUNyRTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVvQzs7Ozs7OztVQ3JDckM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDUzs7QUFFdkQ7QUFDQSwyQkFBMkIseURBQWM7QUFDekMsa0JBQWtCLG1EQUFXO0FBQzdCLGtCQUFrQixtREFBVztBQUM3QixrQkFBa0IsbURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtEQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQWM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrREFBd0I7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQXdCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsbURBQVc7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQWtCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSxcbiAgICAgICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5IH1cblxufTtcblxuY29uc3QgaXRlbURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1sZWZ0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZHVlZGF0ZScpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5nZXREdWVEYXRlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tcHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLmdldFByaW9yaXR5KCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xlZnQpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdG9kb3MucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBuYW1lXG4gICAgY29uc3QgX2l0ZW1MaXN0ID0gW11cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZVxuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4gKF9uYW1lID0gbmV3TmFtZSlcblxuICAgIGNvbnN0IGdldEl0ZW1zID0gKCkgPT4gX2l0ZW1MaXN0XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiBfaXRlbUxpc3QucHVzaChpdGVtKVxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAocG9zaXRpb24pID0+IF9pdGVtTGlzdC5zcGxpY2UocG9zaXRpb24sIDEpXG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBzZXROYW1lLCBnZXRJdGVtcywgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9XG59XG5cbmNvbnN0IHByb2plY3RET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaWQpXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKClcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWluZGV4PVwiJHtpZH1cIl1gKVxuICAgICAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QgfVxufSkoKVxuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0gZnJvbSAnLi9pdGVtcydcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBwcm9qZWN0RE9NIH0gZnJvbSAnLi9wcm9qZWN0cydcblxuY29uc3QgVG9kbyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSgnRGVmYXVsdCcpXG4gICAgY29uc3QgaXRlbTEgPSBpdGVtRmFjdG9yeSgnQ2FsbCBCZW4nLCAnQWJvdXQgd29yaycsICdKYW4gMjl0aCcsICczJylcbiAgICBjb25zdCBpdGVtMiA9IGl0ZW1GYWN0b3J5KCdDYWxsIEphbmUnLCAnQWJvdXQgc2Nob29sJywgJ0phbiAyOHRoJywgJzEnKVxuICAgIGNvbnN0IGl0ZW0zID0gaXRlbUZhY3RvcnkoJ0NhbGwgVmFkeW0nLCAnQWJvdXQgZmFtaWx5JywgJ0phbiAyN3RoJywgJzInKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEl0ZW0oaXRlbTEpXG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMilcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRJdGVtKGl0ZW0zKVxuICAgIC8vIEEgbGlzdCBvZiBwcm9qZWN0RmFjdG9yeSBvYmplY3RzLCB3aGljaCBhcmUgYmFzaWNhbGx5IGxpc3RzIG9mIGl0ZW1zLlxuICAgIC8vIFNwLCBpdCdzIGEgMkQgbGlzdC5cbiAgICBsZXQgX3Byb2plY3RMaXN0ID0gW2RlZmF1bHRQcm9qZWN0XVxuXG4gICAgLy8gQ2xpY2sgb24gYSBwYXJ0aWN1bGFyIHByb2osIGxvb3AgdGhydSBpdHMgaXRlbXMsIGFuZCBjcmVhdGUgYW4gZWxlbSBmb3IgZWFjaFxuICAgIGNvbnN0IF9zaG93SXRlbXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0LmdldEl0ZW1zKClcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUVsZW0gPSBpdGVtRE9NLmNyZWF0ZUl0ZW0oaXRlbSwgaSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1FbGVtLmxhc3RDaGlsZClcbiAgICAgICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IF9kZWxldGVJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgIHdoaWxlIChpdGVtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggX3Byb2plY3RMaXN0LCBnaXZlIGVhY2ggcHJvaiBlbGVtIGFuIElEIGFuZCBhcHBlbmQgdG8gY29udGFpbmVyLlxuICAgIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG4gICAgICAgIF9wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWxlbSA9IHByb2plY3RET00uY3JlYXRlUHJvamVjdChwcm9qLCBpKVxuXG4gICAgICAgICAgICAvLyBNYWtlIHRoZSBmaXJzdCBwcm9qZWN0IGFjdGl2ZSBhbmQgc2hvdyBpdHMgaXRlbXNcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVByb2plY3RBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qLmdldEl0ZW1zKClcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBwcm9qZWN0IGludGVybmFsbHlcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdCgnR2l2ZSBtZSBhIHByb2plY3QgbmFtZS4nKVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSlcbiAgICAgICAgX3Byb2plY3RMaXN0LnB1c2gocHJvamVjdClcblxuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHByb2plY3QncyBpZCBhbmQgbWFrZSBhIHByb2plY3QgRE9NXG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBsZXQgcHJvaklEID0gMFxuICAgICAgICBpZiAocHJvakNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2pJRCA9ICtwcm9qQ29udGFpbmVyLmxhc3RDaGlsZC5kYXRhc2V0LmluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2pFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2plY3QsIHByb2pJRClcbiAgICAgICAgcHJvakVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgcHJvakVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlUHJvamVjdEFjdGl2ZSlcbiAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qRWxlbSlcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBGaW5kIGFjdGl2ZSBwcm9qLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX3Byb2plY3RMaXN0LFxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpXG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2ouZGF0YXNldC5pbmRleFxuICAgICAgICBwcm9qZWN0RE9NLmRlbGV0ZVByb2plY3QocHJvaklEKVxuICAgICAgICBfcHJvamVjdExpc3Quc3BsaWNlKHByb2pJRCwgMSlcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKClcblxuICAgICAgICAvLyBNYWtlIHRoZSBsYXN0IHByb2plY3QgYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbSA9IHByb2pDb250YWluZXIubGFzdENoaWxkXG4gICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgLy8gU2hvdyBhY3RpdmUgcHJvamVjdCdzIGl0ZW1zXG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RFbGVtLmRhdGFzZXQuaW5kZXhcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qZWN0SURdXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmUgYW5kIGFjdGl2YXRlIHRoaXMgcHJvamVjdFxuICAgIGNvbnN0IG1ha2VQcm9qZWN0QWN0aXZlID0gKGUpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhbGwgcHJvamVjdHMgaW5hY3RpdmVcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2opID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG5cbiAgICAgICAgLy8gQWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICAgICAgLy8gRGVsZXRlIGl0ZW1zIGZyb20gcHJldiBwcm9qXG4gICAgICAgIF9kZWxldGVJdGVtcygpXG5cbiAgICAgICAgLy8gU2hvdyBpdGVtcyBmb3IgdGhpcyBwcm9qZWN0XG4gICAgICAgIF9zaG93SXRlbXMoZSlcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFuIGl0ZW0ncyBpZCwgZGVsZXRlIGl0cyBET00gYW5kIHB1c2ggb3V0IG9mIF9pdGVtTGlzdFxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoZSkgPT4ge1xuICAgICAgICAvLyBGaW5kIGEgcHJvamVjdCdzIGlkIGFuZCBpdHMgb2JqIGluIF9wcm9qZWN0TGlzdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qRWxlbS5kYXRhc2V0LmluZGV4XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXVxuXG4gICAgICAgIC8vIEl0ZW0ncyBJRFxuICAgICAgICBjb25zdCBpdGVtSUQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG5cbiAgICAgICAgLy8gRGVsZXRlIGl0ZW0gZnJvbSBwcm9qZWN0IGFuZCBmcm9tIERPTVxuICAgICAgICAvLyAoSSBjaG9zZSB0byByZWZyZXNoIGVsZW1lbnRzIHRvIGdpdmUgdGhlbSBhcHByb3ByaWF0ZSBJRHMpXG4gICAgICAgIHByb2plY3QucmVtb3ZlSXRlbShpdGVtSUQpXG4gICAgICAgIC8vIGl0ZW1ET00uZGVsZXRlSXRlbShpdGVtSUQpO1xuXG4gICAgICAgIF9kZWxldGVJdGVtcygpXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKVxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuZ2V0SXRlbXMoKVxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKVxuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSlcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIC8vIEZpbmQgYWN0aXZlIHByb2plY3RcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF1cblxuICAgICAgICAvLyBBc2sgdXNlciBhYm91dCBpdGVtJ3MgcHJvcHNcbiAgICAgICAgY29uc3QgdGl0bGUgPSBwcm9tcHQoJ1RpdGxlIG9mIHRoZSB0by1kbyBpdGVtOiAnKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdCgnRGVzY3JpcHRpb246ICcpXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBwcm9tcHQoJ0R1ZSBEYXRlOicpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJvbXB0KCdQcmlvcml0eTogJylcblxuICAgICAgICAvLyBNYWtlIGFuIGl0ZW0gYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBpdGVtID0gaXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICAgICAgcHJvamVjdC5hZGRJdGVtKGl0ZW0pXG5cbiAgICAgICAgLy8gTWFrZSBpdGVtJ3MgRE9NIGVsZW0gYW5kIGFkZCBpdCB0byB0aGUgcGFnZVxuICAgICAgICAvLyBVc2UgbGFzdCBpdGVtJ3MgaWQgKyAxIGFzIHRoaXMgbmV3IGl0ZW0ncyBpZFxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcbiAgICAgICAgbGV0IGl0ZW1JRCA9IDBcbiAgICAgICAgaWYgKGl0ZW1Db250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBpdGVtSUQgPSBpdGVtQ29udGFpbmVyLmxhc3RDaGlsZC5pZCArIDFcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpdGVtSUQpXG4gICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIG1ha2VJdGVtLFxuICAgICAgICByZW1vdmVJdGVtLFxuICAgICAgICBtYWtlUHJvamVjdEFjdGl2ZSxcbiAgICAgICAgc2hvd1Byb2plY3RzLFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVG9kb1xuXG4vLyBPaywgdGhlcmUncyBhIGxvdCB0byBzYXkuXG5cbi8vIEZpcnN0IG9mIGFsbCwgSSBoYXZlIGEgbG90IG9mIHJlcGV0aXRpdmUgY29kZS5cbi8vIEFsbW9zdCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBoYXZlIHBhcnRzIHRoYXQgcmVwZWF0IGVhY2ggb3RoZXIuXG4vLyBUaGF0IGlzIGVhc2lseSBmaXhhYmxlLlxuXG4vLyBTZWNvbmRseSwgSSBjYW4gY3VzdG9taXplIENTUyBwcm9wZXJseS5cblxuLy8gVGhpcmRseSwgSSBjYW4gbWFrZSBwcm9wZXIgZm9ybXMgdG8gbWFrZSBwcm9qZWN0cyBhbmQgaXRlbXMuXG5cbi8vIEZvdXJ0aGx5LCBpdCB3b3VsZCBiZSBjb29sIHRvIGRvIHNvbWUgaW5wdXQgdmFsaWRhdGlvbi5cblxuLy8gRmlmdGhseSwgaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIGVkaXQgeW91ciBwcm9qZWN0cyBhbmQgaXRlbXMuXG5cbi8vIElmIHRoZXJlJ3Mgbm8gcHJvamVjdCBuYW1lIGdpdmVuLCBpdCBzaG91bGRuJ3QgYmUgY3JlYXRlZC5cbi8vIFVsdGltYXRlbHksIF4gY29tZXMgZG93biB0byBpbnB1dCB2YWxpZGF0aW9uXG5cbi8vIFN0b3JlIHByb2plY3RzIGluIGxvY2FsU3RvcmFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==