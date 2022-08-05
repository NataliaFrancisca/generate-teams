import { TitlePage } from "../../styles/elements";
import { TeamsStyled } from "./style";

import FormTeam from "../../components/FormTeam";

const Teams = () => {
    return(
        <TeamsStyled>
            <TitlePage bg={'teams'}>YOUR <b>TEAMS</b></TitlePage>
            <FormTeam />
        </TeamsStyled>
    )
}

export default Teams;