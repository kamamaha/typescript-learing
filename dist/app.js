import renderTasks from "./helper/render-task.js";
import { render as renderCategory } from "./helper/render-categories-helper.js";
const taskNameInputElemenet = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
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
const addTask = (task) => {
    tasks.push(task);
};
const upadteSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        title: taskNameInputElemenet.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ title: "zrobić klate", done: false, category: "gym" });
renderCategory(categories, categoriesContainerElement, upadteSelectedCategory);
renderTasks(tasks, tasksContainerElement);
