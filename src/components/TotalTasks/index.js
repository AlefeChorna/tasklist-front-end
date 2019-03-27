import React from 'react';

import { 
    Container, 
    TotalToDo, 
    TotalProgressTask,
    TotalDoneTask
} from './styles';

const TotalTasks = (props) => (
    <Container>
        <TotalToDo>
            <h1> { props.totalTaskList.totalToDoTasks } tarefa(s) a serem feita(s)</h1>
        </TotalToDo>
        <TotalProgressTask>
            <h1> { props.totalTaskList.totalProgressTasks } tarefa(s) em execução</h1>
        </TotalProgressTask>
        <TotalDoneTask>
            <h1>{ props.totalTaskList.totalDoneTasks } tarefa(s) concluída(s)</h1>
        </TotalDoneTask>
    </Container>
);

export default TotalTasks;