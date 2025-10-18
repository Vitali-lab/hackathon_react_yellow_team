import { useNavigate } from "react-router-dom";
import { Button } from "..";
import styled from "styled-components";

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

const MemberCardContainer = ({className , member ,removeButton , handleRemoveFavorite}) => {
    const navigate = useNavigate();

    return(
        <div className={className}>
             <TopContent  onClick={() => navigate(`/user/${member.id}`)}>
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
            {removeButton && 
            <RemoveButtonWrapper>
            <Button
             title="Удалить из избранного"
             color="#ffcccc"
             width="100%"
             onClick={() => handleRemoveFavorite(member.id)}
             />
            </RemoveButtonWrapper>
             }

          </div>
    )
}

export const MemberCard = styled(MemberCardContainer)`
display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgba(172, 172, 172, 0.5);
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
`