import Player from "../../components/Player";
import { FloatButton } from "../../styles/elements";
import { PlayersStyled, TitlePlayers, ContainerTable } from "./style";

const Players = () => {
    return(
        <PlayersStyled>
            <TitlePlayers>YOUR <b>PLAYERS</b></TitlePlayers>
           
            <ContainerTable>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                      <Player playerData={{name: "Natalia", level: 3}} />
                      <Player playerData={{name: "Luiz", level: 3}} />
                      <Player playerData={{name: "Fernanda", level: 3}} />
                    </tbody>
                    
                </table>
            </ContainerTable>

            <FloatButton>
                <span class="material-symbols-outlined">add</span>
            </FloatButton>
        </PlayersStyled>
    )
}

export default Players;