import {Team_styles} from "./TeamStyles";

const Team = ({data, numberTeam}) => {
    return(
        <Team_styles>
            <h1>{numberTeam + 1}</h1>
         
            <section className="card-team-details">
                {data?.players.map((player, index) => (
                    <h2 key={index}>{player.name}</h2>
                ))}
            </section> 
        </Team_styles>
    )
}

export default Team;