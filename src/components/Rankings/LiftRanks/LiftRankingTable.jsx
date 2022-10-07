
export default function LiftRankingTable(props) {
    console.log(props.test[3].name)
    return(
        <>
            <table className="table-ranks" >
                <caption className="table-caption-lift" >{props.title}</caption>
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
                    <tr>
                        <td className="rank-number">4</td>
                        <td>{props.test[3].name}</td>
                        <td>{props.test[3].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">5</td>
                        <td>{props.test[4].name}</td>
                        <td>{props.test[4].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">6</td>
                        <td>{props.test[5].name}</td>
                        <td>{props.test[5].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">7</td>
                        <td>{props.test[6].name}</td>
                        <td>{props.test[6].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">8</td>
                        <td>{props.test[7].name}</td>
                        <td>{props.test[7].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">9</td>
                        <td>{props.test[8].name}</td>
                        <td>{props.test[8].weight}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">10</td>
                        <td>{props.test[9].name}</td>
                        <td>{props.test[9].weight}</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}