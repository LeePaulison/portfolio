import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

function set(list) {
  return localforage.setItem("list", list);
}

// get all todos from local storage
// if query is provided, filter the list
export async function getAllTodos(query = "") {
  let list = await localforage.getItem("list");

  if (query !== "") {
    list = matchSorter(list, query, { keys: ["title"] });
  }
  return list?.sort(sortBy("createdAt")) || [];
}

// get a single todo by id
export async function getTodoById(id) {
  const list = await localforage.getItem("list");
  const todo = list.find((t) => t.id === id);
  //if (!todo) throw new Error("Todo not found");
  return todo;
}

// create a new todo
export async function createToDo(content) {
  let id = Math.random().toString(36).substring(3, 12);
  let todo = {
    id: id,
    createdAt: new Date(),
    completed: false,
  };
  Object.assign(todo, content);
  let list = (await localforage.getItem("list")) || [];
  list.unshift(todo);
  await set(list);
  return todo;
}

// update a todo by id
export async function updateToDo(id, updates) {
  let list = await getAllTodos();
  let todo = list.find((t) => t.id === id);
  Object.assign(todo, updates);
  await set(list);
  return todo;
}

// delete a todo by id
export async function deleteToDo(id) {
  console.log("ID", id);
  let list = await localforage.getItem("list");
  let index = list.findIndex((t) => t.id === id);
  if (index > -1) {
    list.splice(index, 1);
    await set(list);
    return true;
  }
  return false;
}
