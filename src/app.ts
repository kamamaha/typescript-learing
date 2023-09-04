import { Task, Category } from "./types/types";
import renderTasks  from "./helper/render-task.js";
import { render as renderCategory } from "./helper/render-categories-helper.js";

const taskNameInputElemenet: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;
const categories: Category[] = ["general", "work", "gym", "hobby"];


const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const upadteSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory
}

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    title: taskNameInputElemenet.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);

  
});

addTask({ title: "zrobić klate", done: false, category: "gym" });
renderCategory(categories, categoriesContainerElement, upadteSelectedCategory)
renderTasks(tasks, tasksContainerElement);
