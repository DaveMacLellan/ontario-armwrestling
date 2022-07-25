
export default function RankingTable(props) {

    return(
        <>
            <table className="table-ranks" id={props.id}>
                <caption className="table-caption" >{props.title}</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody className="table-body" >
                    <tr>
                        <td className="rank-number first">1</td>
                        <td>{props.test[0]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number second">2</td>
                        <td>{props.test[1]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number third">3</td>
                        <td>{props.test[2]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">4</td>
                        <td>{props.test[3]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">5</td>
                        <td>{props.test[4]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">6</td>
                        <td>{props.test[5]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">7</td>
                        <td>{props.test[6]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">8</td>
                        <td>{props.test[7]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">9</td>
                        <td>{props.test[8]}</td>
                    </tr>
                    <tr>
                        <td className="rank-number">10</td>
                        <td>{props.test[9]}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}