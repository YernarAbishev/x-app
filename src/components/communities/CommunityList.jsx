import CommunityItem from "./CommunityItem";

function CommunityList({communities}) {

    return (
        <>
            {communities.map((community) => (
                <CommunityItem community={community} key={community.id} />
            ))}
        </>
    );
}

export default CommunityList;