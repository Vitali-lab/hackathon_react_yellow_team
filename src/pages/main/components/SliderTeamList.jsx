import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Badge } from '../../../components';
import PropTypes from 'prop-types';

const slide = keyframes`
    from {
        opacity: 0;
        transform: translateX(-70px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const SliderItemDiv = styled.div`
  width: 950px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border: 2px solid #ffd700;
  border-radius: 10px;
  background: #fffdf0;
  animation: ${slide} 0.8s ease-in-out;
  cursor: pointer;
`;
const SliderImageDiv = styled.div`
  & img {
    width: 350px;
    height: 350px;
    border-radius: 20px;
    padding: 10px;
  }
`;
const SliderInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 10px;
  & p {
    font-size: 20px;
  }
`;
const SliderNameDiv = styled.div`
  display: flex;
  gap: 10px;
`;
const SliderIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  i {
    font-size: 50px;
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
`;

const SliderTeamListContainer = ({ className, team }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < team.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(team.length - 1);
    }
  };

  useEffect(() => {
    const slider = setTimeout(() => {
      increment();
    }, 5000);

    return () => {
      clearTimeout(slider);
    };
  }, [count]);

  return (
    <div className={className}>
      <SliderIconDiv>
        <i className="fa fa-caret-left" onClick={decrement} aria-hidden="true"></i>
      </SliderIconDiv>
      <SliderItemDiv key={team[count].id} onClick={() => navigate(`/user/${team[count].id}`)}>
        <SliderImageDiv>
          <img src={team[count].photo} alt="" />
        </SliderImageDiv>
        <SliderInfoDiv>
          <SliderNameDiv>
            <h1>{team[count].firstName}</h1>
            <h1>{team[count].lastName}</h1>
          </SliderNameDiv>
          <div>
            <p>{team[count].about}</p>
          </div>
          <div>
            <p>{team[count].role}</p>
          </div>
          <div>
            <Badge badge={team[count].badge} />
          </div>
        </SliderInfoDiv>
      </SliderItemDiv>
      <SliderIconDiv>
        <i className="fa fa-caret-right" onClick={increment} aria-hidden="true"></i>
      </SliderIconDiv>
    </div>
  );
};

export const SliderTeamList = styled(SliderTeamListContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 1400px;
  gap: 20px;
  padding: 20px;
`;

SliderTeamListContainer.propTypes = {
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
