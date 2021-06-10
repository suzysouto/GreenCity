import styled from 'styled-components';

export const H1 = styled.div`
  padding-top: 10%;
  margin-left: 15%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  > h3 {
    font-family: 'Cookie', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    color: #E4ECCB;
    display: flex;
    align-items: center;
    max-width: 500px;
  }

  > p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 127%;
    color: #FFFFFF;
  }  
`;

export const H2 = styled.div`
  margin-top: -5%;
  margin-left: 5%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  > h3 {
    font-family: 'Cookie', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    color: #E4ECCB;
    display: flex;
    align-items: center;
    max-width: 500px;
    margin-right: 35%;
  }

  > p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 127%;
    color: #FFFFFF;
    margin-bottom: 25px;
  } 
  
  .card {
    background: #81A296;
    box-shadow: 0px 7px 0px #618778;
    border-radius: 5px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-self: self-end;
    color: #FFFFFF;
    border-style: none;
    padding: 15px 25px;
    width: 241px;
    height: 49px;
    cursor: pointer;
  }

  .card:hover {
    background-color: rgb(33, 105, 65);
    color: white;
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;