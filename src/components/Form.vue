<template>
  <h3>ADD TODO</h3>
  <form @submit.prevent="addTodo">
    <label for="todo">Todo à ajouter</label><br />
    <input type="text" name="todo" v-model="newTodo" />
    <button type="submit">+</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup(props, ctx) {
    let newTodo = ref("");

    const addTodo = () => {
      if (newTodo.value !== "") {
        ctx.emit("add", newTodo.value);
        newTodo.value = "";
      }
    };

    return {
      newTodo,
      addTodo,
    };
  },
};
</script>

<style>
</style>