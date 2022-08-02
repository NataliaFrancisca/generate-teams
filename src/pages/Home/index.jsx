import { HomeStyled, HomeTitle, Button } from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const onNavigatePlayersPage = () => navigate("/players");
    const onNavigateTeamsPage = () => navigate("/teams");
    
    return(
        <HomeStyled>
            <HomeTitle>CREATE YOUR <b>TEAMS</b> EASILY</HomeTitle>
            <Button backgroundColor="#AFB4FF" onClick={onNavigatePlayersPage}>REGISTER YOUR PLAYERS</Button>
            <Button backgroundColor="#B1E1FF" onClick={onNavigateTeamsPage}>CREATE YOUR TEAMS</Button>
        </HomeStyled>
    )
}

export default Home;