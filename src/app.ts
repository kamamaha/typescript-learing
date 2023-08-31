

const taskNameInputElemenet: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: {
    title: string;
  done: boolean;
}[] = [
  {
    title: "Wyrzucić śmieci",
    done: false,
  },
  {
    title: "Pójść do sklepu",
    done: true,
  },
  {
    title: "Nakarmić psa",
    done: false,
  },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {

    const taskElement: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id)

    const checkboxElement: HTMLInputElement = document.createElement("input")
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.title; 
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
        task.done = !task.done
    })

    taskElement.appendChild(labelElement)
    taskElement.appendChild(checkboxElement)

    tasksContainerElement.appendChild(taskElement)
  });
};

const addTask = (task: {title: string, done: boolean}) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({title: taskNameInputElemenet.value, done: false});
  render();
});

addTask({title: "spacjalne zadanie od szefa", done: true})

render();
