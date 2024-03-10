function CommunityItem({ community }) {
    return (
        <div className="follower-account">
            <div className="follower-image">
                <img src={community.avatar} alt="Account"/>
            </div>
            <div className="follower-data">
                <h4>{ community.communityName }</h4>
                <h5>@{ community.accountName }</h5>
            </div>
        </div>
    );
}

export default CommunityItem;