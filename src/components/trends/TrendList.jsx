import TrendItem from "./TrendItem";

function TrendList({ trends }) {



    return (
        <ul className="trend-list">
            {trends.map((trend) => (
                <TrendItem trend={trend} key={trend.id} />
            ))}
        </ul>
    );
}

export default TrendList;