import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${ 
        props => props.className === 'flex-direction-row' ? 
            'row' : 
            'column' 
    };
    justify-content: center;

    margin-top: 30px;
`;

export const NoTasks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 70px;

    h1 {
        font-weight: bold;
        font-size: 25px;
        color: #FFF;
        margin-bottom: 10px;
    }

    img {
        width: 350px;
    }
`;