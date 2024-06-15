import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFA920;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease;
  padding: 16px 18.5px;
  border-radius: 10px;
  &:hover {
    border-color: transparent;
    outline: 0 none;
    background-color: rgb(242, 149, 0);
  }
`;

export default Button;