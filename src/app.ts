import { Task, Category } from "./types/types.js";
import renderTasks  from "./helper/render-task.js";
import { render as renderCategory } from "./helper/render-categories-helper.js";

const taskNameInputElemenet: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;
const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];


const tasks: Task[] = [
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

type TaskAsTuple = [string, Category, boolean]
const task: TaskAsTuple = ["cwiczyc", Category.GYM, false] //tuple 
const taskName = task[0]
const taskCategory = task[1]
const taskDoneStatus = task[2]

addTask({title: taskName, category: taskCategory, done: taskDoneStatus})

addTask({ title: "zrobić klate", category: Category.GYM, done: false,});
renderCategory(categories, categoriesContainerElement, upadteSelectedCategory)
renderTasks(tasks, tasksContainerElement);

type TaskType = { 
  title: string;
  done: boolean;
  category?: Category;
}
// type Category = "work" | "hobby" | "general" //do type mozna przypisywac union typy



interface TaskInterface { 
  title: string;
  done: boolean;
  category?: Category;
}

interface TaskInterface { //mozna tworzyc rozne interfejsy o tej samej nazwie i je łączyć, do klasowych
  createdAt: Date;
}
let newTask: TaskInterface

newTask = {
  title: "nowy task",
  done: true,
  createdAt: new Date()
}

