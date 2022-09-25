console.log("JS OK!!!");

const thingsToDo = [
  {
    text: "Comprare la frutta",
    done: false,
  },
  {
    text: "Comprare la verdura",
    done: false,
  },
  {
    text: "Comprare la stoffa",
    done: false,
  },
];

const app = new Vue({
  el: "#app",
  data: {
    newThingToDo: "",
    thingsToDo,
  },
  methods: {
    toggleThingToDo(thingToDo) {
      thingToDo.done = !thingToDo.done;
    },

    deleteThingToDo(i) {
      const start = this.thingsToDo.slice(0, i);
      const end = this.thingsToDo.slice(i + 1);
      this.thingsToDo = [...start, ...end];
    },

    addThingToDo() {
      console.log(this.newThingToDo);
      const newThingToDo = {
        text: this.newThingToDo,
        done: false,
      };
      this.thingsToDo.push(newThingToDo);
      this.newThingToDo = "";
    },
  },
});
