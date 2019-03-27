import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: 'row';
`;

export const bodyTotalTask = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 30px;
    background: #FFF;
    margin-left: 10px;
    border-radius: 3px;

    h1 {
        font-size: 15px;
        color: #444;
    }
`;

export const TotalToDo = bodyTotalTask;
export const TotalProgressTask = bodyTotalTask;
export const TotalDoneTask = bodyTotalTask;