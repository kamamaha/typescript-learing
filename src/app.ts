const taskNameInputElemenet: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
interface Task {
  title: string;
  done: boolean;
  category?: Category; //literal type + union type
}

type Category = "general" | "work" | "gym" | "hobby";

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

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement : HTMLInputElement = document.createElement("input")
    radioInputElement.type = "radio";
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`

    const labelElement : HTMLLabelElement = document.createElement("label")
    labelElement.setAttribute("for", `category-${category}`)
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement)
    categoryElement.appendChild(labelElement)
    categoriesContainerElement.appendChild(categoryElement)
  })
}
const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const selectedRadioElement: HTMLInputElement = document.querySelector(
    "input[type='radio']:checked"
  );

  const selectedCategory: Category = selectedRadioElement?.value as Category;

  addTask({
    title: taskNameInputElemenet.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({ title: "zrobić klate", done: false, category: "gym" });
renderCategory()
render();
