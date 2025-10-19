import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  flex: 1;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #ffd700;
  border-radius: 4px;
  transition: width 0.5s ease-in-out;
`;

export const ProgressBar = ({ value }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill style={{ width: `${value}%` }} />
    </ProgressBarContainer>
  );
};

