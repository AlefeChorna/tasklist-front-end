import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background: #E6EBED;
    border: 1px solid #DDDCE6;
    width: 240px;
    margin: 5px;
    border-radius: 4px;

    h1 {
        margin-left: 2px;
        font-size: 20px;
        color: #444;
    }

    strong {
        margin-left: 2px;
        color: #444;
        font-size: 14px;
        margin-top: 10px
    }

    small {
        font-style: italic;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 5px;
        min-height: 30px;

        a {
            text-align: center;

            &:hover {
                cursor: pointer;
                transform: scale(1.5);
            }
        }

        .buttonDelete {
            width: 30px;
            color: red;
        }

        .buttonEdit {
            margin-top: 1px;
            width: 30px;
            color: blue;
        }
    }
`;