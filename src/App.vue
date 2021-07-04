<template>
  <h1>Vue3 Todolist</h1>
  <Form @add="addTodo" />
  <br />
  <List :todos="todos" @delete="deleteTodo" @edit="editTodo" />
</template>

<script>
import Form from "@/components/Form";
import List from "@/components/List";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    Form,
    List,
  },
  setup() {
    let todos = ref([]);

    const addTodo = (data) => {
      todos.value = [...todos.value, { todo: data, id: Date.now() }];
    };

    const deleteTodo = (data) => {
      todos.value = todos.value.filter((t) => t.id !== data.id);
    };

    const editTodo = (data) => {
      todos.value = todos.value.map((t) => (t.id !== data.id ? t : data));
    };

    return {
      todos,
      addTodo,
      deleteTodo,
      editTodo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  display: inline-block;
}

li {
  line-height: 2rem;
}

button {
  margin-right: 0.25rem;
  cursor: pointer;
}
</style>
