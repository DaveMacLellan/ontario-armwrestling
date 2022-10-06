
export default function LiftRankingTable(props) {
    //console.log(props.test[0].name)
    return(
        <>
            <table className="table-ranks" >
                <caption className="table-caption" >{props.title}</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody className="table-body" >
                    <tr>
                        <td className="rank-number first">1</td>
                        <td>{props.test[0].name}</td>
                        <td>{props.test[0].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number second">2</td>
                        <td>{props.test[1].name}</td>
                        <td>{props.test[1].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number third">3</td>
                        <td>{props.test[2].name}</td>
                        <td>{props.test[2].weight}</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </>
    )
}