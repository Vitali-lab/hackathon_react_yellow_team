
import styled from "styled-components";

const SectionAboutDiv = styled.section`
    width: 520px;
    padding: 16px 18px;
    text-align: center;
    border-radius: 12px;
    border: 1px solid #e6e6e6;
    background: #fffdf0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
`

const HeaderContainer = ({className}) => {
    
    return(
        <div className={className}>
            <SectionAboutDiv className="team-card team-yellow">
            <h3>🟡 Команда «Жёлтая» 🟡</h3>
            </SectionAboutDiv>
        </div>
    )
}

export const Header = styled(HeaderContainer)`
width: 1400px;
display: flex;
justify-content: center;
align-items: center;
 

`