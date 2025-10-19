
import styled, { keyframes } from "styled-components";
import { MemberCard } from '../../../components';

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



const TeamListContainer = ({ className, team }) => {
  
  return (
    <div className={className}>
      {team.map((member) => {
        return (
          <MemberCard key={member.id} member={member} />
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
