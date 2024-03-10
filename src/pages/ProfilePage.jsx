import verify from "../assets/images/verify.png";
import avatar from "../assets/images/avatar.jpg";
import {Link} from "react-router-dom";
import {HOME_PAGE} from "../utils/consts";
import FollowersList from "../components/followers/FollowersList";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
function ProfilePage() {

    const [followers, setFollowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchFollowers() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/followers");
                setFollowers(res.data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchFollowers();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }


    return (
        <div className="profile">
            <div className="profile-wrap">
                <div className="profile-header">
                    <Link to={HOME_PAGE} className="back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                    </Link>
                    <h1 className="user-name">Yereke</h1>
                    <div className="header-verify">
                        <img src={verify} alt="Verify" />
                    </div>
                </div>
                <div className="cover"></div>
                <div className="user-avatar-logo">
                    <img src={avatar} className="profile-avatar" alt="Avatar" />
                </div>
                <div className="user-data">
                    <h2 className="user-name">Yereke</h2>
                    <h3 className="account-name">@yereke</h3>
                </div>
                <div className="followers-data">
                    <h4 className="default-title left">Followers</h4>
                    <FollowersList followers={followers} />
                    <Link href="#" className="link">Show more</Link>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;