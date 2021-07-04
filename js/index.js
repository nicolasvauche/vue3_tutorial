// Define app
const app = Vue.createApp({
  data () {
    return {
      pageTitle: 'Vue3 : Exemple de base',
      copyright: 'Nicolas Vauché',
      counter: 0,
      todos: ['Sauver le monde', 'Apprendre Vue.js', 'Aller manger']
    }
  },
  mounted () {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods: {
    inverser () {
      this.todos.reverse()
    },
    addTodo (newTodo) {
      this.todos.push(newTodo)
    }
  }
})

// Add component tasks
app.component('tasks', {
  props: ['content'],
  template: '{{ content }}'
})

// Add component new task
app.component('addtask', {
  props: [],
  emits: ['newtodo'],
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo !== '') {
        this.$emit('newtodo', this.newTodo)
        this.newTodo = ''
      }
    }
  },
  template: `
        <input type="text" v-model="newTodo" />
        <button v-on:click="addTodo" v-if="newTodo != ''">+</button>
      `
})

// Mount app
app.mount('.app')
console.log('Vue.js version ' + app.version)
