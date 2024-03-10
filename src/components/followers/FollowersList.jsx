import FollowerItem from "./FollowerItem";

function FollowersList({ followers }) {
    return (
        <>
            {followers.map((follower) => (
                <FollowerItem follower={follower} key={follower.id}/>
            ))}
        </>
    );
}
export default FollowersList;