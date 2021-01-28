export default function category() {
    const allTaskBoxes = document.querySelectorAll('.task-box')
    allTaskBoxes.forEach((eachTaskBox) => {
            if (eachTaskBox.childNodes[7].textContent === 'important') {
                eachTaskBox.style.backgroundColor = 'lightpink';
            }
            else if (eachTaskBox.childNodes[7].textContent === 'not important') {
                eachTaskBox.style.backgroundColor ='lightgreen';
            }  
            else {
                eachTaskBox.style.backgroundColor ='whitesmoke';
            }
        
    })
}
