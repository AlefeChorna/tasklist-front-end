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

class ProgressTask extends Component {
    onDrop = () => {
        this.props.changeStatus(this.props.item, 'progressList');
    }

    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="targetProgressTask" onDrop={(e)=>{this.onDrop()}}>
                <BodyTask>
                    { this.props.taskList.progressList.map(progress => (
                        <Task
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask}
                            toDo={ progress } 
                        />
                    ))}
                </BodyTask>
            </div>
        );
    }
}

export default DropTarget('task', {}, collect)(ProgressTask);