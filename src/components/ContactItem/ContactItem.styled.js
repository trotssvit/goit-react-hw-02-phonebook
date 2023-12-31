import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Parag = styled.p`
  max-width: 250px;
  overflow-wrap: break-word;
`;

export const Button = styled.button`
  width: 50px;
  height: 20px;
  margin-left: auto;
  padding: 0px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
