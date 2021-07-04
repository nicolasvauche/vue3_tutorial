<template>
  <h3>TODO LIST</h3>
  <p>
    {{ todos.length }} chose{{ todos.length > 1 ? "s" : "" }} à faire{{
      todos.length > 0 ? " :" : ", tout va bien 😎"
    }}
  </p>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span v-if="altTodo !== null && altTodo.id === todo.id">
        <input type="text" v-model="altTodo.todo" @keypress.enter="saveTodo" />
        <button @click="saveTodo">save</button>
      </span>
      <span v-else> {{ todo.todo }}&nbsp; </span>
      <button @click="deleteTodo(todo)">del</button>
      <button @click="editTodo(todo)">edit</button>
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["delete", "edit"],
  props: {
    todos: {
      type: Array,
      require: true,
    },
  },
  setup(props, { emit }) {
    let altTodo = ref(null);

    const deleteTodo = (todo) => {
      emit("delete", todo);
    };

    const editTodo = (todo) => {
      altTodo.value = todo;
    };

    const saveTodo = () => {
      emit("edit", altTodo.value);
      altTodo.value = null;
    };

    return {
      deleteTodo,
      editTodo,
      saveTodo,
      altTodo,
    };
  },
};
</script>

<style>
</style>