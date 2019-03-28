import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { Container } from './styles';

import moment from "moment";

const itemSource = {
    beginDrag(props) {
        return props.toDo
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

 class Task extends Component {
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;
        
        return connectDragSource(
           <div className="task" style={{ opacity }}>
               <Container>
                   <h1>{ this.props.toDo.name }</h1> 
                   <strong>Criada: <small>{ moment(this.props.toDo.createdat).format("DD/MM/YYYY") }</small></strong>
                   <div className="buttons">
                       <a onClick={() => this.props.deleteTask(this.props.toDo.id)} className="buttonDelete fa fa-trash"/>
                       <a onClick={() => this.props.editTask(this.props.toDo)}className="buttonEdit fa fa-edit"/>
                   </div>
               </Container>
           </div>
       );
    }
 }

 export default DragSource('task', itemSource, collect)(Task);