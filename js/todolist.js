const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'portare fuori il cane',
                    done: false
                },
                {
                    text: 'pulire pc',
                    done: false
                },
                {
                    text: 'prendere biglietti mostra',
                    done: false
                }

            ],

            newTask: ''

        }
    },

    methods: {
        taskDone(index) {
            this.toDoList[index].done = !this.toDoList[index].done;
        },

        addNewTask() {
            const writeTask = {
                text: this.newTask,
                done: false
            }

            this.newTask = writeTask;
            this.toDoList.push(writeTask);


            this.newTask = '';
        }
    },



}).mount('#app')