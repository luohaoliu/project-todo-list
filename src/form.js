export default function form () {
    const element = document.querySelector('.navigation-bar');
    const newTaskBtn = document.createElement('button');
    newTaskBtn.id = 'click-new-task';
    newTaskBtn.textContent = 'New Task';
    element.appendChild(newTaskBtn);
    
    const form = document.createElement('form');
    form.setAttribute("id", "form");
    form.style.visibility = 'hidden';

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('placeholder', `What is the goal?`);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('id', 'description');
    description.setAttribute('placeholder', `What is the story?`);

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'text');
    dueDate.setAttribute('id', 'duedate');
    dueDate.setAttribute('placeholder', 'When is the due date?');

    const lineBreakOne = document.createElement('br');

    const importantQuestion = document.createElement('label');
    importantQuestion.setAttribute('for', 'priority');
    importantQuestion.textContent = 'Is this important?';

    const important = document.createElement('input');
    important.setAttribute('type', 'radio');
    important.setAttribute('name', 'priority');
    important.setAttribute('value', 'important');

    const importantStatus = document.createElement('label');
    importantStatus.setAttribute('for', 'priority');
    importantStatus.textContent = 'important';

    const notImportant = document.createElement('input');
    notImportant.setAttribute('type', 'radio');
    notImportant.setAttribute('name', 'priority');
    notImportant.setAttribute('value', 'not important');

    const notImportantStatus = document.createElement('label');
    notImportantStatus.setAttribute('for', 'priority');
    notImportantStatus.textContent = 'not important';

    const lineBreakTwo = document.createElement('br');

    const categoryQuestion = document.createElement('label');
    categoryQuestion.setAttribute('for', 'category');
    categoryQuestion.textContent = `What is the category?`;

    const homeCategoryStatus = document.createElement('input');
    homeCategoryStatus.setAttribute('type', 'radio');
    homeCategoryStatus.setAttribute('name', 'category');
    homeCategoryStatus.setAttribute('value', 'home');

    const homeCategory = document.createElement('label');
    homeCategory.setAttribute('for', 'category');
    homeCategory.textContent = 'home';

    const workCategoryStatus = document.createElement('input');
    workCategoryStatus.setAttribute('type', 'radio');
    workCategoryStatus.setAttribute('name', 'category');
    workCategoryStatus.setAttribute('value', 'work');

    const workCategory = document.createElement('label');
    workCategory.setAttribute('for', 'category');
    workCategory.textContent = 'work';

    const hobbyCategoryStatus = document.createElement('input');
    hobbyCategoryStatus.setAttribute('type', 'radio');
    hobbyCategoryStatus.setAttribute('name', 'category');
    hobbyCategoryStatus.setAttribute('value', 'hobby');

    const hobbyCategory = document.createElement('label');
    hobbyCategory.setAttribute('for', 'category');
    hobbyCategory.textContent = 'hobby';


    let submitButton = document.createElement('div');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('id', 'submit-button');

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);

    form.appendChild(lineBreakOne);

    form.appendChild(importantQuestion);
    form.appendChild(important);
    form.appendChild(importantStatus);
    form.appendChild(notImportant);
    form.appendChild(notImportantStatus);

    form.appendChild(lineBreakTwo);

    form.appendChild(categoryQuestion);
    form.appendChild(homeCategoryStatus);
    form.appendChild(homeCategory);
    form.appendChild(workCategoryStatus);
    form.appendChild(workCategory);
    form.appendChild(hobbyCategoryStatus);
    form.appendChild(hobbyCategory);
    
    form.appendChild(submitButton);

    document.body.appendChild(form);

    

    const projectName = document.createElement('div');
    projectName.textContent = 'The Todo List';
    projectName.setAttribute('id', 'project-name');
    projectName.style.visibility = 'visible';

    document.body.appendChild(projectName);



}
