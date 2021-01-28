export default function visible() {
    document.getElementById('click-new-task').addEventListener('click', function () {
        if(document.getElementById("form").style.visibility === "hidden") {
            document.getElementById("form").style.visibility = "visible";
            document.getElementById('project-name').style.visibility = "hidden";
            document.getElementById("click-new-task").textContent = 'Close';
        } else {
            document.getElementById("form").style.visibility = "hidden";
            document.getElementById('project-name').style.visibility = "visible";
            document.getElementById("click-new-task").textContent = 'New Task';
        }
    });
}