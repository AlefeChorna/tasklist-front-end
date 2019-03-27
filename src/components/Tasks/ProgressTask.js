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
    changeStatusTask = (id) => {
        console.log('Estou em doneTask', id);
    }

    onDrop = () => {
        this.props.changeStatus(this.props.item, 'progressList');
    }

    render() {
        const { connectDropTarget, horeved } = this.props;
        const backgroundColor = horeved ? 'black' : 'red';

        return connectDropTarget(
            <div className="targetProgressTask" onDrop={(e)=>{this.onDrop()}}>
                <BodyTask>
                    { this.props.taskList.progressList.map(progress => (
                        <Task
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask} 
                            handleDrop={id => this.changeStatusTask(id)} key={ progress.id } 
                            toDo={ progress } 
                        />
                    ))}
                </BodyTask>
            </div>
        );
    }
}

export default DropTarget('task', {}, collect)(ProgressTask);