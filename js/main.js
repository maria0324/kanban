const app = new Vue({
    el: '#app',
    data: {
        columns: [
            { id: 1, title: 'Запланированные задачи', tasks: [] },
            { id: 2, title: 'Задачи в работе', tasks: [] },
            { id: 3, title: 'Тестирование', tasks: [] },
            { id: 4, title: 'Выполненные задачи', tasks: [] }
        ],
        newTask: {
            title: '',
            description: '',
            deadline: ''
        }
    },
    methods: {
        addTask() {
            const task = Object.assign({}, this.newTask);
            task.createdAt = new Date();
            this.columns[0].tasks.push(task);
            this.newTask.title = '';
            this.newTask.description = '';
            this.newTask.deadline = '';
        },
        moveTask(columnIndex, taskIndex) {
            if (columnIndex < this.columns.length - 1) {
                const task = this.columns[columnIndex].tasks.splice(taskIndex, 1)[0];
                this.columns[columnIndex + 1].tasks.push(task);
            }
        },
       
    }
});