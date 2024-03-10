import verify from "../assets/images/verify.png";
import CommunityList from "../components/communities/CommunityList";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import {HOME_PAGE} from "../utils/consts";
import {Link} from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
function CommunitiesPage() {

    const [communities, setCommunity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchCommunities() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/communities");
                setCommunity(res.data);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCommunities();
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
                    <h1 className="user-name">Yernar Abishev</h1>
                    <div className="header-verify">
                        <img src={verify} alt="Verify" />
                    </div>
                </div>
                <div className="followers-data">
                    <h4 className="default-title left">Communities</h4>
                    <CommunityList communities={communities} />
                </div>
            </div>
        </div>
    );
}
export default CommunitiesPage;