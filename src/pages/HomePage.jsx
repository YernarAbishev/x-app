import ContentHeader from "../components/ContentHeader";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import SkeletonCard from "../components/skeleton/SkeletonCard";
import PostList from "../components/post/PostList";
import Error from "../components/Error";

function HomePage() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/posts");
                setPosts(res.data);
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <div className="posts">
            <ContentHeader />
            <PostList posts={posts} />
        </div>
    );
}
export default HomePage;