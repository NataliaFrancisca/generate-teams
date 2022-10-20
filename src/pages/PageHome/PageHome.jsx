import { HomeStyled, HomeTitle, Button } from "./PageHomeStyles";
import { useNavigate } from "react-router-dom";

const PageHome = () => {

    const navigate = useNavigate();
    const onNavigatePlayersPage = () => navigate("/players");
    const onNavigateTeamsPage = () => navigate("/teams");
    
    return(
        <HomeStyled>
            <HomeTitle>CREATE YOUR <b>TEAMS</b> EASILY</HomeTitle>
            <Button backgroundColor="#106c54" onClick={onNavigatePlayersPage}>REGISTER YOUR PLAYERS</Button>
            <Button backgroundColor="#d65b8b" onClick={onNavigateTeamsPage}>CREATE YOUR TEAMS</Button>
        </HomeStyled>
    )
}

export default PageHome;