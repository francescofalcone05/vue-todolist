const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'To do list !',
      inputValue: '',
      printValue: '',
      selectDone: 0,
      color: '',
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
    cliccaSeleziona(indice,) {
      this.selectDone = indice
      this.toDoList.splice(indice,1)
    }
    // cliccaSeleziona(indice, elemento) {
    //   this.selectDone = indice
    //   elemento[indice].done = false
    //},
    // cliccaSeleziona(indice,) {
    //   this.selectDone = indice;
    // },
    // changeColor(indice){
    //   if (this.selectDone==indice){
    //     (this.color == '') ? this.color = 'green' : this.color = ''
    //   }else{
    //     this.color = ''
    //   }
    // }

  },
  mounted() {
  }

}).mount('#app')


