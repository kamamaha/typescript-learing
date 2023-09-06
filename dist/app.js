import { Category } from "./types/types.js";
import renderTasks from "./helper/render-task.js";
import { render as renderCategory } from "./helper/render-categories-helper.js";
const taskNameInputElemenet = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL,
    },
    {
        title: "Pójść do sklepu",
        done: true,
        category: Category.GYM,
    },
    {
        title: "Nakarmić psa",
        done: false,
        category: Category.HOBBY,
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
const task = ["cwiczyc", Category.GYM, false]; //tuple 
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });
addTask({ title: "zrobić klate", category: Category.GYM, done: false, });
renderCategory(categories, categoriesContainerElement, upadteSelectedCategory);
renderTasks(tasks, tasksContainerElement);
let newTask;
newTask = {
    title: "nowy task",
    done: true,
    createdAt: new Date()
};
