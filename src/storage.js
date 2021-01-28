export default function displayChange() {
    
    document.querySelector('#all-task').addEventListener('click', ()=> {
        const allTaskBoxes = document.querySelectorAll('.task-box');
        allTaskBoxes.forEach((eachTaskBox) => {

                    eachTaskBox.style.display = 'inline-block';
                
            })
        
    })


    document.querySelector('#home-task').addEventListener('click', ()=> {
        
        const allTaskBoxes = document.querySelectorAll('.task-box')
        allTaskBoxes.forEach((eachTaskBox) => {
            if (eachTaskBox.childNodes[9].textContent === 'work' || 
            eachTaskBox.childNodes[9].textContent === 'hobby') {
                eachTaskBox.style.display = 'none';
            } else {
                eachTaskBox.style.display = 'inline-block';
            }
        
    })

    })

    document.querySelector('#work-task').addEventListener('click', ()=> {
        const allTaskBoxes = document.querySelectorAll('.task-box')
        allTaskBoxes.forEach((eachTaskBox) => {
            if (eachTaskBox.childNodes[9].textContent === 'home' || 
            eachTaskBox.childNodes[9].textContent === 'hobby') {
                eachTaskBox.style.display = 'none';
            } else {
                eachTaskBox.style.display = 'inline-block';
            }
        
    })

    })

    document.querySelector('#hobbies-task').addEventListener('click', ()=> {
        const allTaskBoxes = document.querySelectorAll('.task-box')
        allTaskBoxes.forEach((eachTaskBox) => {
                if (eachTaskBox.childNodes[9].textContent === 'work' || 
                eachTaskBox.childNodes[9].textContent === 'home') {
                    eachTaskBox.style.display = 'none';
                } else {
                    eachTaskBox.style.display = 'inline-block';
                }
            
        })

    })
}