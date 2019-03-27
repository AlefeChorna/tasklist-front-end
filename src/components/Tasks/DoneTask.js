import React, { Component } from 'react';

import { BodyTask } from './styles';
import Task from '../Task';

import { DropTarget } from 'react-dnd';
import { runInThisContext } from 'vm';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
        highlighted: monitor.canDrop()
    }
}

class DoneTask extends Component {
    changeStatusTask = (id) => {
        // console.log('Estou em doneTask', id);
    }
    
    onDrop = () => {
        this.props.changeStatus(this.props.item, 'doneList');
    }

    render() {
        const { connectDropTarget, horeved } = this.props;
        const backgroundColor = horeved ? 'lightgreen' : 'red';
    
        return connectDropTarget(
            <div className="targetDoneTask" onDrop={(e)=>{this.onDrop()}}>
                <BodyTask>
                    { this.props.taskList.doneList.map(done => (
                        <Task
                            editTask={this.props.editTask}
                            deleteTask={this.props.deleteTask} 
                            handleDrop={id => this.changeStatusTask(id)} key={ done.id } 
                            toDo={ done } 
                        />
                    ))}
                </BodyTask>
            </div>
        );
    }
}

export default DropTarget('task', {}, collect)(DoneTask);