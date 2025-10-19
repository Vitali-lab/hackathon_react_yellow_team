import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { team } from '../../../team';
import { Breadcrumbs } from '../../components';
import { MemberCard } from '../../components/Member-card/MemberCard';

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

const EmptyText = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
`;

export const Favorites = () => {
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
          <MemberCard
            key={member.id}
            member={member}
            removeButton={true}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
