function FollowerItem({ follower }) {
    return (
        <div className="follower-account">
            <div className="follower-image">
                <img src={follower.avatar} alt="Account"/>
            </div>
            <div className="follower-data">
                <h4>{follower.fullName}</h4>
                <h5>@{follower.userName}</h5>
            </div>
        </div>
    );
}

export default FollowerItem;