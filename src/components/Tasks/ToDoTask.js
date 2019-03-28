import React, { Component } from 'react';

import { BodyTask } from './styles';
import Task from '../Task';

import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class ToDoTask extends Component {
    onDrop = () => {
        this.props.changeStatus(this.props.item, 'toDoList');
    }

    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="targetToDoTask" onDrop={(e)=>{this.onDrop()}}>
                <BodyTask>
                    { this.props.taskList.toDoList.map(todo => (
                        <Task
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask}
                            toDo={ todo } 
                        />
                    ))}
                </BodyTask>
            </div>
        );
    }
}

export default DropTarget('task', {}, collect)(ToDoTask);