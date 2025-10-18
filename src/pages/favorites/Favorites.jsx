import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { team } from '../../../team';
import { Button, Breadcrumbs } from '../../components';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgba(172, 172, 172, 0.5);
  width: 650px;
  cursor: pointer;
  background: #fffdf0;
  margin: 10px;
  padding: 10px;
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

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const RemoveButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const EmptyText = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
`;

export const Favorites = () => {
  const navigate = useNavigate();
  const [favoriteMembers, setFavoriteMembers] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const members = team.filter((member) => favorites.includes(member.id));
    setFavoriteMembers(members);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updated = favoriteMembers.filter((member) => member.id !== id);
    setFavoriteMembers(updated);
    const favIds = updated.map((m) => m.id);
    localStorage.setItem('favorites', JSON.stringify(favIds));
  };

  if (favoriteMembers.length === 0)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Breadcrumbs crumbs={[{ title: 'Главная', path: '/' }, { title: 'Избранное' }]} />
        <EmptyText>Нет избранных участников</EmptyText>
      </div>
    );

  return (
    <Container>
      <Breadcrumbs crumbs={[{ title: 'Главная', path: '/' }, { title: 'Избранное' }]} />
      <h1>Избранное</h1>
      <CardsContainer>
        {favoriteMembers.map((member) => (
          <ItemDiv key={member.id}>
            <TopContent onClick={() => navigate(`/user/${member.id}`)}>
              <ImgWrapper>
                <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
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
            <RemoveButtonWrapper>
              <Button
                title="Удалить из избранного"
                color="#ffcccc"
                width="100%"
                onClick={() => handleRemoveFavorite(member.id)}
              />
            </RemoveButtonWrapper>
          </ItemDiv>
        ))}
      </CardsContainer>
    </Container>
  );
};
