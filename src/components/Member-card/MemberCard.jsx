import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '..';
import { Modal } from '../../components/Modal/Modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const RemoveButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const TopContent = styled.div`
  display: flex;
  gap: 20px;
`;
const ImgWrapper = styled.div`
  flex-shrink: 0;

  & img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
  }
`;

const MemberCardContainer = ({ className, member, removeButton, handleRemoveFavorite }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleRemoveFromFavorite = () => {
    setResultMessage(`${member.firstName} удалён из избранного!`);
    setIsModalOpen(false);
    setIsResultModalOpen(true);
    setTimeout(() => {
      handleRemoveFavorite(member.id);
    }, 2000);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleResultModalClose = () => {
    setIsResultModalOpen(false);
  };

  return (
    <div className={className}>
      <TopContent onClick={() => navigate(`/user/${member.id}`)}>
        <ImgWrapper>
          <img src={member.photo} alt="" />
        </ImgWrapper>
        <InfoDiv>
          <AboutDiv>
            <h2>
              {member.firstName} {member.lastName}
            </h2>
            <p>{member.about}</p>
            <p>{member.role}</p>
          </AboutDiv>
          <div>
            <p>{member.badge}</p>
          </div>
        </InfoDiv>
      </TopContent>
      {removeButton && (
        <RemoveButtonWrapper>
          <Button
            title="Удалить из избранного"
            color="#ffcccc"
            width="100%"
            onClick={handleModalOpen}
          />
        </RemoveButtonWrapper>
      )}
      {isModalOpen && (
        <Modal
          toFavorite={handleRemoveFromFavorite}
          onCancel={handleModalCancel}
          isAddFavorite={false}
        />
      )}

      {isResultModalOpen && (
        <Modal
          toFavorite={handleResultModalClose}
          onCancel={handleResultModalClose}
          isAddFavorite={false}
          resultMessage={resultMessage}
        />
      )}
    </div>
  );
};

export const MemberCard = styled(MemberCardContainer)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #ffd700;
  width: 650px;
  cursor: pointer;
  background: #fffdf0;
  margin: 10px;
  padding: 10px;

  & img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
  }
`;

MemberCardContainer.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    badge: PropTypes.string,
  }).isRequired,
  handleRemoveFavorite: PropTypes.func.isRequired,
};
