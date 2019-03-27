import React, { Component } from 'react';

import Tasks from '../Tasks';
import TotalTasks from '../TotalTasks';

import imgNoTasks from '../../assets/notasks.png';

import { Container, NoTasks } from './styles';

export default class TaskList extends Component {
    render() {
        const displayNoTasks = this.props.taskList.totalizers.totalTasks === 0 ? "block" : "none";
        const displayTasks = this.props.taskList.totalizers.totalTasks === 0 ? "none" : "block";  
        return (
            <Container className="flex-direction-row">
                <NoTasks style={{ display: displayNoTasks}}>
                    <h1>Nenhuma tarefa adiconada</h1>
                    <img src={ imgNoTasks } alt=""/>
                </NoTasks>
                <Container style={{ display: displayTasks}} className="flex-direction-column">
                    <TotalTasks totalTaskList={this.props.taskList.totalizers}/>
                    <Tasks 
                        editTask={this.props.editTask}
                        deleteTask={this.props.deleteTask}
                        changeStatus={this.props.changeStatus} 
                        taskList={ this.props.taskList } 
                    />
                </Container>
            </Container>
        )
    }
}