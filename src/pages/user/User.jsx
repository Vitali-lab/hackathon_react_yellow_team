import { useParams } from 'react-router-dom';
import { Button, Breadcrumbs } from '../../components';
import { team } from '../../../team';

export const User = () => {
  const { id } = useParams();
  const member = team.find((m) => m.id === Number(id));

  const handleAddFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(member.id)) {
      favorites.push(member.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${member.firstName} добавлен в избранное!`);
    }
  };

  if (!member) return <div>Участник не найден</div>;

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <Breadcrumbs
        crumbs={[
          { title: 'Главная', path: '/' },
          { title: `${member.firstName} ${member.lastName}` },
        ]}
      />
      <h1>
        Страница участника {member.firstName} {member.lastName}
      </h1>
      <Button onClick={handleAddFavorite} title="Добавить в избранное" />
    </div>
  );
};
