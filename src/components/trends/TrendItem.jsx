function TrendItem({ trend }) {

    return (
        <li className="trend-item">
            <span>#{trend.name}</span>
            <small>Views: {trend.views}</small>
        </li>
    );
}
export default TrendItem;