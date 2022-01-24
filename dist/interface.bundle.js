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



const Todo = (() => {
    const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)("Default");
    const item1 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Ben', 'About work', 'Jan 29th', '3');
    const item2 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Jane', 'About school', 'Jan 28th', '1');
    const item3 = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)('Call Vadym', 'About family', 'Jan 27th', '2');
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
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i);
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
            const projectElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(proj, i);
            
            // Make the first project active and show its items
            if (i == 0) {
                projectElem.classList.add('active');
                projectElem.addEventListener('click', makeProjectActive);
                const itemContainer = document.getElementById('todos');
                const items = proj.getItems();
                items.forEach((item, i) => {
                    const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i);
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
        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(name);
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
        const projElem = _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.createProject(project, projID);
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
        _projects__WEBPACK_IMPORTED_MODULE_1__.projectDOM.deleteProject(projID);
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
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i);
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
            const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, i);
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
        const item = (0,_items__WEBPACK_IMPORTED_MODULE_0__.itemFactory)(title, description, dueDate, priority);
        project.addItem(item);

        // Make item's DOM elem and add it to the page
        // Use last item's id + 1 as this new item's id
        const itemContainer = document.getElementById('todos');
        let itemID = 0;
        if (itemContainer.lastChild) {
            itemID = itemContainer.lastChild.id + 1;
        }
        const itemElem = _items__WEBPACK_IMPORTED_MODULE_0__.itemDOM.createItem(item, itemID);
        itemElem.lastChild.addEventListener('click', removeItem);
        itemContainer.appendChild(itemElem);
    }

    return { makeProject, removeProject,
             makeItem, removeItem,
             makeProjectActive, showProjects };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// Ok, there's a lot to say.

// First of all, I have a lot of repetitive code.
// Almost all of the functions have parts that repeat each other.
// That is easily fixable.

// Secondly, I can customize CSS properly.

// Thirdly, I can make proper forms to make projects and items.

// Fourthly, it would be cool to do some input validation.

// Fifthly, it would be nice to be able to edit your projects and items.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBa0I7QUFDM0M7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUM7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IF9wcmlvcml0eTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcml0eSxcbiAgICAgICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9yaXR5IH1cblxufTtcblxuY29uc3QgaXRlbURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlSXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgICAgIGNvbnRhaW5lci5pZCA9IGk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbS1sZWZ0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZHVlZGF0ZScpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5nZXREdWVEYXRlKCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tcHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLmdldFByaW9yaXR5KCk7XG4gICAgICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xlZnQpXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdG9kb3MucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlSXRlbSwgZGVsZXRlSXRlbSB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7IGl0ZW1GYWN0b3J5LCBpdGVtRE9NIH0iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IF9pdGVtTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IF9uYW1lO1xuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4gX25hbWUgPSBuZXdOYW1lO1xuXG4gICAgY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiBfaXRlbUxpc3Q7XG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiBfaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHBvc2l0aW9uKSA9PiBfaXRlbUxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIHNldE5hbWUsIGdldEl0ZW1zLCBhZGRJdGVtLCByZW1vdmVJdGVtIH1cbn07XG5cbmNvbnN0IHByb2plY3RET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpZCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWluZGV4PVwiJHtpZH1cIl1gKTtcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdERPTSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbUZhY3RvcnksIGl0ZW1ET00gfSBmcm9tIFwiLi9pdGVtc1wiO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnksIHByb2plY3RET00gfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KFwiRGVmYXVsdFwiKTtcbiAgICBjb25zdCBpdGVtMSA9IGl0ZW1GYWN0b3J5KCdDYWxsIEJlbicsICdBYm91dCB3b3JrJywgJ0phbiAyOXRoJywgJzMnKTtcbiAgICBjb25zdCBpdGVtMiA9IGl0ZW1GYWN0b3J5KCdDYWxsIEphbmUnLCAnQWJvdXQgc2Nob29sJywgJ0phbiAyOHRoJywgJzEnKTtcbiAgICBjb25zdCBpdGVtMyA9IGl0ZW1GYWN0b3J5KCdDYWxsIFZhZHltJywgJ0Fib3V0IGZhbWlseScsICdKYW4gMjd0aCcsICcyJyk7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMSk7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMik7XG4gICAgZGVmYXVsdFByb2plY3QuYWRkSXRlbShpdGVtMyk7XG4gICAgLy8gQSBsaXN0IG9mIHByb2plY3RGYWN0b3J5IG9iamVjdHMsIHdoaWNoIGFyZSBiYXNpY2FsbHkgbGlzdHMgb2YgaXRlbXMuXG4gICAgLy8gU3AsIGl0J3MgYSAyRCBsaXN0LlxuICAgIGxldCBfcHJvamVjdExpc3QgPSBbZGVmYXVsdFByb2plY3RdO1xuICAgIFxuICAgIC8vIENsaWNrIG9uIGEgcGFydGljdWxhciBwcm9qLCBsb29wIHRocnUgaXRzIGl0ZW1zLCBhbmQgY3JlYXRlIGFuIGVsZW0gZm9yIGVhY2hcbiAgICBjb25zdCBfc2hvd0l0ZW1zID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpO1xuICAgICAgICBjb25zdCBwcm9qSUQgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2pJRF07XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1FbGVtLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBpdGVtRWxlbS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVJdGVtKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IF9kZWxldGVJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpO1xuICAgICAgICB3aGlsZSAoaXRlbUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW1Db250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIF9wcm9qZWN0TGlzdCwgZ2l2ZSBlYWNoIHByb2ogZWxlbSBhbiBJRCBhbmQgYXBwZW5kIHRvIGNvbnRhaW5lci5cbiAgICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICAgICAgX3Byb2plY3RMaXN0LmZvckVhY2goKHByb2osIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvamVjdERPTS5jcmVhdGVQcm9qZWN0KHByb2osIGkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBNYWtlIHRoZSBmaXJzdCBwcm9qZWN0IGFjdGl2ZSBhbmQgc2hvdyBpdHMgaXRlbXNcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VQcm9qZWN0QWN0aXZlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qLmdldEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgbWFrZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBwcm9qZWN0IGludGVybmFsbHlcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdCgnR2l2ZSBtZSBhIHByb2plY3QgbmFtZS4nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5hbWUpO1xuICAgICAgICBfcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiBwcm9qLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgcHJvamVjdCdzIGlkIGFuZCBtYWtlIGEgcHJvamVjdCBET01cbiAgICAgICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgICAgICBsZXQgcHJvaklEID0gMDtcbiAgICAgICAgaWYgKHByb2pDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qSUQgPSArKHByb2pDb250YWluZXIubGFzdENoaWxkLmRhdGFzZXQuaW5kZXgpICsgMTsgXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBwcm9qZWN0RE9NLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcHJvaklEKTtcbiAgICAgICAgcHJvakVsZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHByb2pFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZVByb2plY3RBY3RpdmUpO1xuICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pFbGVtKTtcblxuICAgICAgICAvLyBEZWxldGUgaXRlbXMgZnJvbSBwcmV2IHByb2pcbiAgICAgICAgX2RlbGV0ZUl0ZW1zKCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBGaW5kIGFjdGl2ZSBwcm9qLCBkZWxldGUgaXRzIERPTSBhbmQgcHVzaCBvdXQgb2YgX3Byb2plY3RMaXN0LFxuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBwcm9qSUQgPSBwcm9qLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHByb2plY3RET00uZGVsZXRlUHJvamVjdChwcm9qSUQpO1xuICAgICAgICBfcHJvamVjdExpc3Quc3BsaWNlKHByb2pJRCwgMSk7XG4gICAgICAgIF9kZWxldGVJdGVtcygpO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFrZSB0aGUgbGFzdCBwcm9qZWN0IGFjdGl2ZVxuICAgICAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gcHJvakNvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgICAgIHByb2plY3RFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIFNob3cgYWN0aXZlIHByb2plY3QncyBpdGVtc1xuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qZWN0RWxlbS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gX3Byb2plY3RMaXN0W3Byb2plY3RJRF07XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0LmdldEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGkpO1xuICAgICAgICAgICAgaXRlbUVsZW0ubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlSXRlbSk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvLyBNYWtlIGFsbCBwcm9qZWN0cyBpbmFjdGl2ZSBhbmQgYWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgY29uc3QgbWFrZVByb2plY3RBY3RpdmUgPSAoZSkgPT4ge1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIHByb2plY3RzIGluYWN0aXZlXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGUgdGhpcyBwcm9qZWN0XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIERlbGV0ZSBpdGVtcyBmcm9tIHByZXYgcHJvalxuICAgICAgICBfZGVsZXRlSXRlbXMoKTtcblxuICAgICAgICAvLyBTaG93IGl0ZW1zIGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgX3Nob3dJdGVtcyhlKTtcbiAgICB9O1xuXG4gICAgLy8gRmluZCBhbiBpdGVtJ3MgaWQsIGRlbGV0ZSBpdHMgRE9NIGFuZCBwdXNoIG91dCBvZiBfaXRlbUxpc3RcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGUpID0+IHtcbiAgICAgICAgLy8gRmluZCBhIHByb2plY3QncyBpZCBhbmQgaXRzIG9iaiBpbiBfcHJvamVjdExpc3RcbiAgICAgICAgY29uc3QgcHJvakVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHByb2pJRCA9IHByb2pFbGVtLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfcHJvamVjdExpc3RbcHJvaklEXTtcblxuICAgICAgICAvLyBJdGVtJ3MgSURcbiAgICAgICAgY29uc3QgaXRlbUlEID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgICAgICAvLyBEZWxldGUgaXRlbSBmcm9tIHByb2plY3QgYW5kIGZyb20gRE9NXG4gICAgICAgIC8vIChJIGNob3NlIHRvIHJlZnJlc2ggZWxlbWVudHMgdG8gZ2l2ZSB0aGVtIGFwcHJvcHJpYXRlIElEcylcbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1JRCk7XG4gICAgICAgIC8vIGl0ZW1ET00uZGVsZXRlSXRlbShpdGVtSUQpO1xuXG4gICAgICAgIF9kZWxldGVJdGVtcygpO1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbSA9IGl0ZW1ET00uY3JlYXRlSXRlbShpdGVtLCBpKTtcbiAgICAgICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRWxlbSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgLy8gRmluZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBjb25zdCBwcm9qRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgcHJvaklEID0gcHJvakVsZW0uZGF0YXNldC5pbmRleDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF9wcm9qZWN0TGlzdFtwcm9qSURdO1xuXG4gICAgICAgIC8vIEFzayB1c2VyIGFib3V0IGl0ZW0ncyBwcm9wc1xuICAgICAgICBjb25zdCB0aXRsZSA9IHByb21wdCgnVGl0bGUgb2YgdGhlIHRvLWRvIGl0ZW06ICcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdCgnRGVzY3JpcHRpb246ICcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gcHJvbXB0KCdEdWUgRGF0ZTonKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5OiAnKTtcblxuICAgICAgICAvLyBNYWtlIGFuIGl0ZW0gYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBpdGVtID0gaXRlbUZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHByb2plY3QuYWRkSXRlbShpdGVtKTtcblxuICAgICAgICAvLyBNYWtlIGl0ZW0ncyBET00gZWxlbSBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXG4gICAgICAgIC8vIFVzZSBsYXN0IGl0ZW0ncyBpZCArIDEgYXMgdGhpcyBuZXcgaXRlbSdzIGlkXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICAgICAgbGV0IGl0ZW1JRCA9IDA7XG4gICAgICAgIGlmIChpdGVtQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgaXRlbUlEID0gaXRlbUNvbnRhaW5lci5sYXN0Q2hpbGQuaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtID0gaXRlbURPTS5jcmVhdGVJdGVtKGl0ZW0sIGl0ZW1JRCk7XG4gICAgICAgIGl0ZW1FbGVtLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUl0ZW0pO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgICAgICBtYWtlSXRlbSwgcmVtb3ZlSXRlbSxcbiAgICAgICAgICAgICBtYWtlUHJvamVjdEFjdGl2ZSwgc2hvd1Byb2plY3RzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuXG4vLyBPaywgdGhlcmUncyBhIGxvdCB0byBzYXkuXG5cbi8vIEZpcnN0IG9mIGFsbCwgSSBoYXZlIGEgbG90IG9mIHJlcGV0aXRpdmUgY29kZS5cbi8vIEFsbW9zdCBhbGwgb2YgdGhlIGZ1bmN0aW9ucyBoYXZlIHBhcnRzIHRoYXQgcmVwZWF0IGVhY2ggb3RoZXIuXG4vLyBUaGF0IGlzIGVhc2lseSBmaXhhYmxlLlxuXG4vLyBTZWNvbmRseSwgSSBjYW4gY3VzdG9taXplIENTUyBwcm9wZXJseS5cblxuLy8gVGhpcmRseSwgSSBjYW4gbWFrZSBwcm9wZXIgZm9ybXMgdG8gbWFrZSBwcm9qZWN0cyBhbmQgaXRlbXMuXG5cbi8vIEZvdXJ0aGx5LCBpdCB3b3VsZCBiZSBjb29sIHRvIGRvIHNvbWUgaW5wdXQgdmFsaWRhdGlvbi5cblxuLy8gRmlmdGhseSwgaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIGVkaXQgeW91ciBwcm9qZWN0cyBhbmQgaXRlbXMuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=