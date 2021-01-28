export default function design (){
    const element = document.querySelector('.navigation-bar');
    
    const allTasks = document.createElement('div');
    allTasks.id = 'all-task';
    allTasks.textContent = 'All';

    const home = document.createElement('div');
    home.id = 'home-task';
    home.textContent = 'home';
    
    const work = document.createElement('div');
    work.id = 'work-task';
    work.textContent = 'work';
   
    const hobbies = document.createElement('div');
    hobbies.id = 'hobbies-task';
    hobbies.textContent = 'hobby';

    
    element.appendChild(allTasks);
    element.appendChild(home);
    element.appendChild(work);
    element.appendChild(hobbies);

}

