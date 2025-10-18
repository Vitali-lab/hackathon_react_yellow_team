import { team } from '../../../team';
import styled from 'styled-components';
import { TeamList } from './components/TeamList';
import { useState } from 'react';
import { SliderTeamList } from './components/SliderTeamList.jsx';

const IconsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: 0.5s;
  margin-left: 40px;
  gap: 10px;
  i {
    font-size: 30px;
    padding: 5px;
    border: 1px solid rgba(172, 172, 172, 0.5);
  }
`;

const MainContainer = ({ className }) => {
  const [isSlider, setIsSlider] = useState(true);

  return (
    <div className={className}>
      <IconsDiv>
        <i
          className="fa fa-list"
          style={{ backgroundColor: !isSlider ? 'transparent' : 'yellow' }}
          onClick={() => setIsSlider(true)}
        ></i>
        <i
          className="fa fa-sliders"
          style={{ backgroundColor: isSlider ? 'transparent' : 'yellow' }}
          onClick={() => setIsSlider(false)}
        ></i>
      </IconsDiv>
      <div className="team">
        {isSlider ? <TeamList team={team} /> : <SliderTeamList team={team} />}
      </div>
    </div>
  );
};

export const Main = styled(MainContainer)`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;




}`;
