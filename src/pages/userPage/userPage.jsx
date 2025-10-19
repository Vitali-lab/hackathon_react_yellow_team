import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { team } from '../../../team';
import { Button } from '../../components/Button/Button.jsx';
import { Modal } from '../../components/Modal/Modal.jsx';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 30px 20px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  background: #fff;
`;

const UserCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  border: 2px solid #ffd700;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
`;

const UserHeader = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ffeaa7;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const UserPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #ffd700;
`;

const UserBasicInfo = styled.div`
  flex: 1;

  & h1 {
    margin: 0 0 8px 0;
    color: #333;
    font-size: 1.8rem;
  }

  & .age {
    color: #666;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  & .badge {
    display: inline-block;
    background: #ffd700;
    color: #333;
    padding: 4px 12px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const Section = styled.div`
  margin-bottom: 20px;

  & h2 {
    color: #333;
    margin: 0 0 10px 0;
    font-size: 1.2rem;
    padding-bottom: 5px;
    border-bottom: 2px solid #ffd700;
  }

  & p {
    margin: 0;
    line-height: 1.5;
    color: #555;
    font-size: 0.95rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 5px;
`;

const SocialButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background: #ffd700;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    background: #ffed4a;
  }
`;

const RoleCard = styled.div`
  background: #fff9db;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #ffd700;

  & p {
    margin: 0;
    line-height: 1.5;
  }
`;

const UserPage = ({ team }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  if (!team) {
    return <PageContainer>Данные загружаются...</PageContainer>;
  }

  const user = team.find((item) => item.id === Number(id));
  const member = team.find((m) => m.id === Number(id));

  if (!user) {
    return (
      <PageContainer>
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #ffd700',
          }}
        >
          Пользователь не найден
        </div>
      </PageContainer>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(member.id)) {
      favorites.push(member.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setResultMessage(`${member.firstName} добавлен в избранное!`);
    } else {
      setResultMessage(`${member.firstName} уже в избранном!`);
    }
    setIsModalOpen(false);
    setIsResultModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleResultModalClose = () => {
    setIsResultModalOpen(false);
  };

  return (
    <PageContainer>
      <Button
        onClick={handleBack}
        title="← Назад"
        color="#ffd700"
        width="120px"
        bordertype="rounded"
        style={{ marginBottom: '20px' }}
      />

      <UserCard>
        <UserHeader>
          <UserPhoto src={user.photo} alt={`${user.firstName} ${user.lastName}`} />

          <UserBasicInfo>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <div className="age">Возраст: {user.age} лет</div>
            {user.badge && <div className="badge">{user.badge}</div>}

            <ButtonContainer>
              <Button
                onClick={handleModalOpen}
                title="★ B избранное"
                color="#ffd700"
                width="200px"
                bordertype="rounded"
              />
            </ButtonContainer>
          </UserBasicInfo>
        </UserHeader>

        <Section>
          <h2>О себе</h2>
          <p>{user.about}</p>
        </Section>

        <Section>
          <h2>Участие в проекте</h2>
          <RoleCard>
            <p>{user.role}</p>
          </RoleCard>
        </Section>

        {user.social && (user.social.github || user.social.telegram || user.social.instagram) && (
          <Section>
            <h2>Социальные сети</h2>
            <SocialLinks>
              {user.social.github && (
                <SocialButton href={user.social.github} target="_blank">
                  GitHub
                </SocialButton>
              )}
              {user.social.telegram && (
                <SocialButton href={user.social.telegram} target="_blank">
                  Telegram
                </SocialButton>
              )}
              {user.social.instagram && (
                <SocialButton href={user.social.instagram} target="_blank">
                  Instagram
                </SocialButton>
              )}
            </SocialLinks>
          </Section>
        )}
      </UserCard>
      {isModalOpen && (
        <Modal
          toFavorite={handleAddToFavorites}
          onCancel={handleModalCancel}
          isAddFavorite={true}
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
    </PageContainer>
  );
};

export default UserPage;
