import styled from 'styled-components';

export const CardTitle = styled.h1`
  text-align: center;
  color: #333;
`;

export const BooksWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 60%;
  margin: 0 auto;
`;

export const BookCard = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(136, 165, 191, 0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
`;