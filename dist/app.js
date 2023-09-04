const taskNameInputElemenet = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: "general",
    },
    {
        title: "Pójść do sklepu",
        done: true,
        category: "gym",
    },
    {
        title: "Nakarmić psa",
        done: false,
        category: "work",
    },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategory = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioElement === null || selectedRadioElement === void 0 ? void 0 : selectedRadioElement.value;
    addTask({
        title: taskNameInputElemenet.value,
        done: false,
        category: selectedCategory,
    });
    render();
});
addTask({ title: "zrobić klate", done: false, category: "gym" });
renderCategory();
render();
