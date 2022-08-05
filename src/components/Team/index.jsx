import {TeamStyled} from "./style";

const Team = ({data, numberTeam}) => {
    return(
        <TeamStyled>
            <section className="card-team-number">
                <h1>{numberTeam}</h1>
            </section>

            <h2>{data?.name}</h2>

            <section className="card-team-details">
                {data?.players.map((player) => (
                    <h2>{player.name}</h2>
                ))}
            </section> 
        </TeamStyled>
    )
}

export default Team;