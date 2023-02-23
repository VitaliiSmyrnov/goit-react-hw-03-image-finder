import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 44px;

  padding-right: 24px;
  padding-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;

  color: #fff;
  background-color: #3f51b5;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  form {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 600px;

    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  button {
    display: inline-block;
    width: 40px;
    height: 40px;

    border: 0;

    color: black;
    background-color: #e7e7e7;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;

    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;

    border: 0;
    padding: 0;
    overflow: hidden;

    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }

  input {
    display: inline-block;
    width: 100%;
    padding-left: 10px;
    padding-right: 4px;

    font: inherit;
    font-size: 20px;

    border: none;
    outline: none;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
