import React, { Component } from 'react';

import ToDoTask from './ToDoTask';
import ProgressTask from './ProgressTask';
import DoneTask from './DoneTask';

import { Container } from './styles';

class Tasks extends Component {
    render() {
        return (
            <Container>
                <ToDoTask
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                    changeStatus={ this.props.changeStatus } 
                    taskList={ this.props.taskList }
                />
                <ProgressTask 
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                    changeStatus={ this.props.changeStatus }
                    taskList={ this.props.taskList }
                />
                <DoneTask 
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                    changeStatus={ this.props.changeStatus } 
                    taskList={ this.props.taskList }
                />
            </Container>
        )
    }
}

export default Tasks;