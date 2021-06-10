import styles from 'styled-components';

export const FormStyled = styles.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
    margin: 25px auto;
    margin-top: -10%;

    h1 {
        font-family: Cookie;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 57px;
        text-align: center;
        color: #E4ECCB;
        margin-bottom: 10%;
        margin-top: -20%;
    }
    
    .input-row {
        margin: 25px 0px;
        display: flex;
        width: 100%;
        max-width: 720px;
    }

    label {
        display: block;
        padding-bottom: 5px;
    }
  
    input {
        width: 100%;
        height: 52px;
        padding: 10px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 79.4%;
        color: #37595F;
    }

    textarea {
        width: 100%;
        padding: 10px;
        height: 160px;
        border-radius: 5px;
        background: #FFFFFF;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 79.4%;
        color: #37595F;
    }
  
    button {
        border-radius: 5px;
        padding: 15px 15px;
        background: none;
        border: 1px solid #607d8b;
        cursor: pointer;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        background: #81A296;
        box-shadow: 0px 7px 0px #618778;
        border-radius: 5px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 100%;
        color: #FFFFFF;

        &:hover {
            background-color: rgb(33, 105, 65);
            color: white;
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }

    .form-message {
        font-size: 15px;
        padding-top: 2px;
        margin-right: -55%;
    }
    .form-message.valid {
        color: #4caf50;
    }
    .form-message.invalid {
        color: #DC9A9E;
        display: flex;
        flex-direction: column;
        margin-right: -58%;
        margin-left: 5%;
    }
    
    .has-error {
        border: 2px solid #DC9A9E;
    }
`;