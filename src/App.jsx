import { Navbar , Header, Router} from "./components"
import styled from "styled-components"

const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
padding: 10px;
height: 120px;
`
const AppContainer = ({className}) =>  {


  return (
    <div className={className}>
      <HeaderDiv className="header-nav">
      <Navbar />
      <Header />      
      </HeaderDiv>
      <Router/>
    </div>
  )
}

export const App = styled(AppContainer)`
width: 1400px;
margin: 0 auto;


`
