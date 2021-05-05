import styled from 'styled-components'
export const Container = styled.div`
  width: 100vw;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 2% 0;

  .toolbarButton {
    background: #8d0000;
    height: 100%;
    width: 130px;
    text-align: center;
    transition: 0.2s;
    border-radius: 0;
    border-color: transparent;
    font: 400 18px 'Courier Prime', sans-serif;
  }

  .toolbarButton:hover {
    background: black;
    color: #8d0000;
    cursor: pointer;
  }

  background-color: #8d0000;
`
