const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'To do list !',
      inputValue: '',
      printValue: '',
      toDoList: [
        {
          text: 'Creare un`array di cose da fare',
          done: true
        },
        {
          text: 'Creare un <li> per ogni elemento dell`array',
          done: true
        },
        {
          text: 'Stamparli in pagina',
          done: true
        },
        {
          text: 'Creare un input dove poter aggiungere cose da fare dentro l`array',
          done: true
        }
      ]
    }
  },
  methods: {
    changeValue() {
      this.printValue = { text: this.inputValue, done: true },
        this.toDoList.push(this.printValue);
      this.inputValue = '';
    },
    cliccaSeleziona(indice) {
      this.toDoList[indice].done = !this.toDoList[indice].done
    },
    getColor(indice) {
      if (this.toDoList[indice].done == false) {
        return 'green'
      } else {
        return ''
      }
    }
  },
  mounted() {
  }

}).mount('#app')


