import React, { Component } from 'react';

import { Container, Form } from './styles';

import TaskList from '../../components/TaskList';

import { getTasks, saveTask, updateTask, deleteTask } from '../../services/api';

export default class Main extends Component {
    state = {
        currentTask: [],
        loading: false,
        taskInput: '',
        taskInputId: 0,
        taskError: false,
        taskList: {
            totalizers: {
                totalTasks: 0,
                totalToDoTasks: 0,
                totalProgressTasks: 0,
                totalDoneTasks: 0
            },
            toDoList: [],
            progressList: [], 
            doneList: []
        }
    }

    getStatusCode(_prCategory) {
        if (_prCategory === 'toDoList') {
            return 1;
        } else if (_prCategory === 'progressList') {
            return 2;
        } else {
            return 3; // doneList
        }
    }

    changeStatusTask = async (task, category) => {
        await updateTask({
            id: task.id,
            name: task.name,
            status: category ? this.getStatusCode(category) : task.status,
            createdat: task.createdat
        });
        this.updateState();
    }

    getTasksByStatus(_prTasks, _prStatus) {
        return _prTasks.filter(task => task.status === _prStatus);
    }

    updateState = async () => {
        try {
            const result = await getTasks();
            const todoList = this.getTasksByStatus(result, 1);
            const progressList = this.getTasksByStatus(result, 2);
            const doneList = this.getTasksByStatus(result, 3);
            this.setState({ 
                taskError: false,
                taskList: {
                    toDoList: todoList,
                    progressList: progressList, 
                    doneList: doneList,
                    totalizers: {
                        totalTasks: result.length,
                        totalToDoTasks: todoList.length,
                        totalProgressTasks: progressList.length,
                        totalDoneTasks: doneList.length
                    }
                }
            });
        } catch(err) {
            this.setState({ taskError: true });
        }
    }

    handleAddTask = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        // Update name task
        if (this.state.taskInputId > 0) {
            await updateTask({
                id: this.state.taskInputId,
                name: this.state.taskInput,
                status: this.state.currentTask.status,
                createdat: this.state.currentTask.createdat,
            });
        } else { // Save new task
            await saveTask(this.state.taskInput);
        }

        this.updateState();

        this.setState({
            currentTask: [],
            taskInputId: 0,
            taskInput: '',  
            loading: false 
        });
    }

    handleDeleteTask = async (id) => {
        await deleteTask(id);
        this.updateState();
    }

    handleEditTask = (task) => {
        this.setState({
            currentTask: task,
            taskInputId: task.id,
            taskInput: task.name
        });
        document.getElementById("taskInput").focus();
    }

    componentDidMount() {
        this.updateState();
    }

    render() {
        return (
            <Container>
                <Form withError={ this.state.taskError } onSubmit={this.handleAddTask}>
                    <input
                        style={{ display: "none" }} 
                        type="text" 
                        value={ this.state.taskInputId }
                        onChange={e => this.setState({ taskInputId: e.target.value })}
                    />
                    <input
                        id="taskInput" 
                        type="text" 
                        placeholder="Digite uma tarefa"
                        value={ this.state.taskInput }
                        onChange={e => this.setState({ taskInput: e.target.value })}
                    />
                    <button type="submit">
                        { this.state.loading ? <i className="fa fa-spinner fa-pulse"/> : 'OK' }
                    </button>  
                </Form>
                <TaskList
                    editTask={this.handleEditTask}
                    deleteTask={this.handleDeleteTask} 
                    changeStatus={this.changeStatusTask} 
                    taskList={ this.state.taskList }
                />
            </Container>
        );
    }
}