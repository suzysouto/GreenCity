import styles from 'styled-components';
import back from '../images/04-BG.png';

export const BackgroundStyled = styles.div`
    background: url(${back});
    width: 100%;
    height: 100vh;
    display: flex;

    .ic {
        height: 300px;
        width: 302px;
        display: flex;
        flex-direction: row;
        border-radius: 100%;
        margin-top: 10%;
        margin-left: 5%;
    }

    .ic2 {
        height: 300px;
        width: 302px;
        display: flex;
        flex-direction: row;
        border-radius: 100%;
        margin-top: -6%;
        margin-left: 12%;
    }
`;