import { HomeStyled, HomeTitle, Button } from "./style";

const Home = () => {
    return(
        <HomeStyled>
            <HomeTitle>CREATE YOUR <b>TEAMS</b> EASILY</HomeTitle>
            <Button backgroundColor="#AFB4FF">REGISTER YOUR PLAYERS</Button>
            <Button backgroundColor="#B1E1FF">CREATE YOUR TEAMS</Button>
        </HomeStyled>
    )
}

export default Home;