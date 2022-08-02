const Player = ({playerData}) => {

    const {name, level} = playerData;

    return(
        <tr>
            <td>{name}</td>
            <td>{level}</td>
            <td>actions</td>
        </tr>
    )
}

export default Player;