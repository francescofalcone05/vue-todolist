const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'To do list !',
      inputValue: '',
      printValue: '',
      selectDone: 0,
      toDoList: [
        'Creare un`array di cose da fare',
        'Creare un <li> per ogni elemento dell`array',
        'Stamparli in pagina',
        'Creare un input dove poter aggiungere cose da fare dentro l`array'
      ]
    }
  },
  methods: {
    changeValue() {
      this.printValue = this.inputValue;
      this.toDoList.push(this.printValue);
      this.inputValue = '';
    },
    cliccaSeleziona(indice) {
      this.selectDone = indice
      this.toDoList.splice(this.selectDone,1)
    }

  },
  mounted() {
  }

}).mount('#app')

    // changeColor() {
    //   if (this.color == true) {
    //     return 'green'
    //   } else {
    //     return ''
    //   }
    // },