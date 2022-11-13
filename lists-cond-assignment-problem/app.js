const app = Vue.createApp({
    data() {
      return { 
        tasks: [],
        inputTask: '',
        showList: true
      };
    },
    methods: {
      addTask () {
        this.tasks.push(this.inputTask);
        this.inputTask = '';
      }
    }
  });
  
  app.mount('#assignment');
  