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
        },
        editTaskIndex: null,
        editColumnIndex: null
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
        deleteTask(columnIndex, taskIndex) {
            this.columns[columnIndex].tasks.splice(taskIndex, 1);
        },
        editTask(columnIndex, taskIndex) { 
            this.editTaskIndex = taskIndex;
            this.editColumnIndex = columnIndex;
            this.newTask.title = this.columns[columnIndex].tasks[taskIndex].title;
            this.newTask.description = this.columns[columnIndex].tasks[taskIndex].description;
            this.newTask.deadline = this.columns[columnIndex].tasks[taskIndex].deadline;
        },
        
        saveEdit() {
            if (this.editTaskIndex !== null && this.editColumnIndex !== null) {
                this.columns[this.editColumnIndex].tasks[this.editTaskIndex].title = this.newTask.title;
                this.columns[this.editColumnIndex].tasks[this.editTaskIndex].description = this.newTask.description;
                this.columns[this.editColumnIndex].tasks[this.editTaskIndex].deadline = this.newTask.deadline;
                this.columns[this.editColumnIndex].tasks[this.editTaskIndex].lastEditedAt = new Date().toLocaleString();
                this.newTask.title = '';
                this.newTask.description = '';
                this.newTask.deadline = '';
                this.editTaskIndex = null;
                this.editColumnIndex = null;
            }
        }
    }  
});
            
         
       