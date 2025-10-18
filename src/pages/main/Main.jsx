import { team } from "../../../team";
import styled from "styled-components";
import { TeamList } from "./components/TeamList";



const MainContainer = ({className}) =>  {
    return (
        <div className={className}>
           <div className="team">
            <TeamList team={team}/>
           </div>
        </div>
    )
}

export const Main = styled(MainContainer)`
display: flex;
width: 100%;
justify-content: start;
align-items: center;
flex-wrap: wrap;




}`