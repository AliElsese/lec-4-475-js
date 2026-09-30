let input = document.querySelector("input")
let btn = document.querySelector("button")
let section = document.querySelector("section")
let inputUpdate = document.querySelector("#updateInput")

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let displayTasks = () => {
    section.innerHTML = "";

    tasks.forEach((task, index) => {
        section.innerHTML += `
            <div style="display: flex">
                <h2>${task.taskName}</h2>
                <button onclick="sendData(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
            </div>
        `
    })
}
displayTasks();

let addTask = () => {
    tasks.push({ taskName: input.value });
    localStorage.setItem("tasks", JSON.stringify(tasks))
    displayTasks();
}

btn.addEventListener("click", () => {
    addTask()
})

let indexUpdated = 0;
let sendData = (selectedIndex) => {
    indexUpdated = selectedIndex;
    inputUpdate.setAttribute("value", tasks[selectedIndex].taskName);
}

let updateFun = () => {
    tasks[indexUpdated].taskName = inputUpdate.value;
    displayTasks();
}