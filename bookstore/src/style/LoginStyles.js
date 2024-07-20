import styled from 'styled-components';

export const LoginWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: #333;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 12px;
`;

export const Label = styled.label`
  color: #333;
  margin-block-end: 8px;
  font-weight: 600;
`;

export const Input = styled.input`
  all: unset;
  color: #333;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(136, 165, 191, 0.20);
`;

export const Button = styled.button`
  all: unset;
  color: #333;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(136, 165, 191, 0.20);
  cursor: pointer;
`;