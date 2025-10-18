import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        transform: translateX(-70px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
        opacity: 1;
    }
`;

const ItemDiv = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(172, 172, 172, 0.5);
  width: 650px;
  cursor: pointer;
  background: #fffdf0;

  & img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;
const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const TeamListContainer = ({ className, team }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      {team.map((item) => {
        return (
          <ItemDiv key={item.id} onClick={() => navigate(`/user/${item.id}`)}>
            <div>
              <img src={item.photo} alt="" />
            </div>
            <InfoDiv>
              <AboutDiv>
                <h2>
                  {item.firstName} {item.lastName}
                </h2>
                <p>{item.about}</p>
                <p>{item.role}</p>
              </AboutDiv>
              <div>
                <p>{item.badge}</p>
              </div>
            </InfoDiv>
          </ItemDiv>
        );
      })}
    </div>
  );
};

export const TeamList = styled(TeamListContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;
