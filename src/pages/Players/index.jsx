import Player from "../../components/Player";

import { FloatButton, BackgroundMask} from "../../styles/elements";
import { PlayersStyled, TitlePlayers, ContainerTable } from "./style";

import FormPlayer from "../../components/FormPlayer";

import { useSelector, useDispatch } from "react-redux";

const Players = () => {

    const dispatch = useDispatch();

    const modalState = useSelector(state => state.reducerModalPlayers);
    const openModal = () => dispatch({type: "modal/players"});

    return(
        <PlayersStyled>
            <BackgroundMask filter={modalState} />
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

            {modalState && <FormPlayer />}

            <FloatButton onClick={openModal}>
                <span class="material-symbols-outlined">add</span>
            </FloatButton>
        </PlayersStyled>
    )
}

export default Players;