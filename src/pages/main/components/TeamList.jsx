import styled, { keyframes } from 'styled-components';
import { MemberCard } from '../../../components/Member-card/MemberCard';
import PropTypes from 'prop-types';

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
        return <MemberCard key={member.id} member={member} />;
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

TeamListContainer.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      badge: PropTypes.string,
    })
  ).isRequired,
};
