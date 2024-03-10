import PostCard from "./PostCard";


function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostList;