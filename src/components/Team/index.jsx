import {TeamStyled} from "./style";

const Team = ({data, numberTeam}) => {
    return(
        <TeamStyled>
            <h1>{numberTeam + 1}</h1>
         
            <section className="card-team-details">
                {data?.players.map((player) => (
                    <h2>{player.name}</h2>
                ))}
            </section> 
        </TeamStyled>
    )
}

export default Team;