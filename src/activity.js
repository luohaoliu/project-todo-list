import {format} from 'date-fns';
import category from './category.js'
import displayChange from './storage.js'



export default function activity () {

    console.log(localStorage);

    let workTaskArray = [];
    
    if(localStorage.hasOwnProperty('workTaskArray')) {
        
        workTaskArray = JSON.parse(localStorage.getItem('workTaskArray'));
        const copyOfArrayFromLocalStorage = [...workTaskArray];
        console.log(copyOfArrayFromLocalStorage);

        
        
        let num = workTaskArray.length;
        
        for (let k = 0; k < num; k++) {
            console.log(workTaskArray);
            taskListToTaskCards();
            workTaskArray.pop();
        }
        
        displayChange();
        category();
        sortElements('#content');
        workTaskArray = [...copyOfArrayFromLocalStorage];

        console.log(localStorage);
        
        
    }

    class task {
        constructor(title, description, duedate, priority, category) {
            this.title = title;
            this.description = description;
            this.duedate = duedate;
            this.priority = priority;
            this.category = category;
            this.dataIndex = workTaskArray.length;

        }
    } 

    document.querySelector('#submit-button').addEventListener('click', () => {    
            addTaskToWorkTaskArray();
            
    });

    function addTaskToWorkTaskArray () {

        const newDate = new Date(document.getElementById('duedate').value);
        const formattedDate =format(newDate, 'MM/dd/yyyy');

        let newtask;

        workTaskArray.push (
            newtask = new task(
                document.getElementById('title').value, 
                document.getElementById('description').value, 
                formattedDate,
                document.querySelector("input[name=priority]:checked").value,
                document.querySelector("input[name=category]:checked").value

            )
        )

        localStorage.setItem('workTaskArray', JSON.stringify(workTaskArray));
        workTaskArray = JSON.parse(localStorage.getItem('workTaskArray') || '[]');
                
        taskListToTaskCards();
        displayChange();
        category();
    }

    function taskListToTaskCards() {

        let taskBox = document.createElement('div');
        taskBox.classList.add('task-box');
        taskBox.setAttribute('data-num', `${workTaskArray.length - 1}`);

        let taskTitleLabel = document.createElement('label');
        taskTitleLabel.setAttribute('for', 'title');
        taskTitleLabel.classList.add('label-text');
        taskTitleLabel.textContent = 'Title:';
        taskTitleLabel.setAttribute('contentEditable', false);

        let taskTitleText = document.createElement('div');
        taskTitleText.classList.add('entry-input');
        taskTitleText.textContent = workTaskArray[workTaskArray.length - 1].title;

        let taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.setAttribute('for', 'title');
        taskDescriptionLabel.classList.add('label-text');
        taskDescriptionLabel.textContent = 'Description:';
        taskDescriptionLabel.setAttribute('contentEditable', false);
    
        let taskDescriptionText = document.createElement('div');
        taskDescriptionText.classList.add('entry-input');
        taskDescriptionText.textContent = workTaskArray[workTaskArray.length - 1].description;

        let taskDueDateLabel = document.createElement('label');
        taskDueDateLabel.setAttribute('for', 'title');
        taskDueDateLabel.classList.add('label-text');
        taskDueDateLabel.textContent = 'Due Date:';
        taskDueDateLabel.setAttribute('contentEditable', false);

        let taskDueDateText = document.createElement('div');
        taskDueDateText.classList.add('entry-input');
        taskDueDateText.textContent = workTaskArray[workTaskArray.length - 1].duedate;

        let taskPriorityLabel = document.createElement('label');
        taskPriorityLabel.setAttribute('for', 'title');
        taskPriorityLabel.classList.add('label-text');
        taskPriorityLabel.textContent = 'Priority:';
        taskPriorityLabel.setAttribute('contentEditable', false);

        let priorityText = document.createElement('div');
        priorityText.classList.add('entry-input');
        priorityText.textContent = workTaskArray[workTaskArray.length - 1].priority;
        
        let taskCategoryLabel = document.createElement('label');
        taskCategoryLabel.setAttribute('for', 'title');
        taskCategoryLabel.classList.add('label-text');
        taskCategoryLabel.textContent = 'Category:';
        taskCategoryLabel.setAttribute('contentEditable', false);

        let categoryText = document.createElement('div');
        categoryText.classList.add('entry-input');
        categoryText.textContent = workTaskArray[workTaskArray.length - 1].category;

        let closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.setAttribute("data-index", `${workTaskArray.length - 1}`);

        closeButton.addEventListener("click", () => {
            workTaskArray = workTaskArray.filter(function(obj) {
                return obj.dataIndex !== parseInt(closeButton.getAttribute('data-index'));
            });
            
            closeButton.parentElement.remove();
            
            localStorage.setItem('workTaskArray', JSON.stringify(workTaskArray));   
            workTaskArray = JSON.parse(localStorage.getItem('workTaskArray'));
                     
        });
        
        let taskEditButton = document.createElement('button');
        taskEditButton.textContent = 'Edit';
        taskEditButton.setAttribute("data-toggle", `${workTaskArray.length - 1}`);

        taskEditButton.addEventListener("click", () => {

            if (taskEditButton.textContent === 'Save') {
                for (let i = 0; i < taskEditButton.parentNode.childNodes.length; i++) {
                    if (taskEditButton.parentNode.childNodes[i].className === 'entry-input') {

                        const newDate = new Date(taskEditButton.parentNode.childNodes[5].textContent);
                        taskEditButton.parentNode.childNodes[5].textContent = format(newDate, 'MM/dd/yyyy');

                        for (let j = 0; j < workTaskArray.length; j++) {
                            
                            if (workTaskArray[j].dataIndex === parseInt(taskEditButton.getAttribute('data-toggle'))) {
                                workTaskArray[j].title = taskEditButton.parentNode.childNodes[1].textContent;
                                workTaskArray[j].description = taskEditButton.parentNode.childNodes[3].textContent;
                                workTaskArray[j].duedate = taskEditButton.parentNode.childNodes[5].textContent;
                                workTaskArray[j].priority = taskEditButton.parentNode.childNodes[7].textContent;
                                workTaskArray[j].category = taskEditButton.parentNode.childNodes[9].textContent;
                            };
                            
                        };
                        
                        taskEditButton.parentNode.childNodes[i].contentEditable = false;
                        taskEditButton.textContent = 'Edit';
                        category();

                        localStorage.setItem('workTaskArray', JSON.stringify(workTaskArray));
                    }
                }
                console.log(workTaskArray);
            } else {
                for (let i = 0; i < taskEditButton.parentNode.childNodes.length; i++) {
                    if (taskEditButton.parentNode.childNodes[i].className === 'entry-input') {
                        taskEditButton.parentNode.childNodes[i].contentEditable = true;
                        taskEditButton.textContent = 'Save';
                    }
                }

            }
                            
        });


        let taskMinButton = document.createElement('button');
        taskMinButton.textContent = 'Min';
        taskMinButton.setAttribute("data-min", `${workTaskArray.length - 1}`);

        taskMinButton.addEventListener("click", () => {
            if (taskMinButton.textContent === 'Min') {
                for (let i = 4; i < taskMinButton.parentNode.childNodes.length; i++) {
                    if (taskMinButton.parentNode.childNodes[i].className === 'entry-input') {
                        taskMinButton.parentNode.childNodes[i - 1].style.display = 'none';
                        taskMinButton.parentNode.childNodes[i].style.display = 'none';
                        taskMinButton.textContent = 'Max';
                    }
                }
                
            } else {
                for (let i = 4; i < taskMinButton.parentNode.childNodes.length; i++) {
                    if (taskMinButton.parentNode.childNodes[i].className === 'entry-input') {
                        taskMinButton.parentNode.childNodes[i - 1].style.display = 'block';
                        taskMinButton.parentNode.childNodes[i].style.display = 'block';
                        taskMinButton.textContent = 'Min';
                    }
                }

            }
                            
        }); 
    
        taskBox.appendChild(taskTitleLabel);
        taskBox.appendChild(taskTitleText);
        taskBox.appendChild(taskDescriptionLabel);
        taskBox.appendChild(taskDescriptionText);
        taskBox.appendChild(taskDueDateLabel);
        taskBox.appendChild(taskDueDateText);
        taskBox.appendChild(taskPriorityLabel);
        taskBox.appendChild(priorityText);
        taskBox.appendChild(taskCategoryLabel);
        taskBox.appendChild(categoryText);
        taskBox.appendChild(closeButton);
        taskBox.appendChild(taskEditButton);
        taskBox.appendChild(taskMinButton);        
        document.getElementById('content').appendChild(taskBox);
        
    }

    function sortElements(containerSelector, reverse) {
        const container = document.querySelector(containerSelector);
        const order = reverse ? -1 : 1;
        
        Array.from(container.children)
          .sort((a, b) => order * parseInt(a.dataset.num, 10) - order * parseInt(b.dataset.num, 10))
          .forEach(element => container.appendChild(element));

          
      }
    
    
}    

