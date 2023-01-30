// Tenemos que crear la aplicacion
Vue.createApp({
  // Tenemos que definir la data
  data() {
    return {
      goals: [],
      enteredValue: '', // Conectarlo con HTML
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    } // El metodo para agregar goals
  }
}).mount('#app');


// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
