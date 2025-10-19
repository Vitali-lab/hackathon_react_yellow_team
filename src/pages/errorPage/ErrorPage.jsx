import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #fffdf0;
  color: #000000ff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #000000ff;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <Subtitle>Страница не найдена</Subtitle>
    </ErrorContainer>
  );
};
