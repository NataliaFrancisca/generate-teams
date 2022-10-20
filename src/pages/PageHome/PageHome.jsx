import { PageHome_styles, HomeTitle_styles, Button_styles } from "./PageHomeStyles";
import { useNavigate } from "react-router-dom";

const PageHome = () => {

    const navigate = useNavigate();
    const onNavigatePlayersPage = () => navigate("/players");
    const onNavigateTeamsPage = () => navigate("/teams");
    
    return(
        <PageHome_styles>
            <HomeTitle_styles>CREATE YOUR <b>TEAMS</b> EASILY</HomeTitle_styles>
            <Button_styles backgroundColor="#106c54" onClick={onNavigatePlayersPage}>REGISTER YOUR PLAYERS</Button_styles>
            <Button_styles backgroundColor="#d65b8b" onClick={onNavigateTeamsPage}>CREATE YOUR TEAMS</Button_styles>
        </PageHome_styles>
    )
}

export default PageHome;