import { PlayerStyled, TitlePlayers, ContainerTable } from "./style";

const Players = () => {
    return(
        <PlayerStyled>
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
                        <tr>
                            <td>Natalia</td>
                            <td>4</td>
                            <td>Natalia</td>
                        </tr>

                        <tr>
                            <td>Natalia</td>
                            <td>4</td>
                            <td>Natalia</td>
                        </tr>

                        <tr>
                            <td>Natalia</td>
                            <td>4</td>
                            <td>Natalia</td>
                        </tr>

                        <tr>
                            <td>Natalia</td>
                            <td>4</td>
                            <td>Natalia</td>
                        </tr>
                    </tbody>
                </table>
            </ContainerTable>
        </PlayerStyled>

       
    )
}

export default Players;