import React, { Component } from 'react';

import { BodyTask } from './styles';
import Task from '../Task';

import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
        highlighted: monitor.canDrop()
    }
}

class DoneTask extends Component {
    onDrop = () => {
        this.props.changeStatus(this.props.item, 'doneList');
    }

    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="targetDoneTask" onDrop={(e)=>{this.onDrop()}}>
                <BodyTask>
                    { this.props.taskList.doneList.map(done => (
                        <Task
                            key={done.id}
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask}
                            toDo={ done } 
                        />
                    ))}
                </BodyTask>
            </div>
        );
    }
}

export default DropTarget('task', {}, collect)(DoneTask);