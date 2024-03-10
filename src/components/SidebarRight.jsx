import TrendList from "./trends/TrendList";
import {useEffect, useState} from "react";
import axiosInstance from "../services/axios";
import SkeletonLine from "./skeleton/SkeletonLine";

function SidebarRight() {
    const [trends, setTrends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchTrends() {
            try {
                setIsLoading(true);
                const res = await axiosInstance.get("/trends");
                setTrends(res.data);
            } catch(e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTrends();
    }, []);

    return (
        <div className="sidebar-right">
            <div className="trends">
                <h1 className="default-title">Trends for you</h1>
                {isLoading ? (
                    <SkeletonLine />
                ) : (
                    <>
                        <TrendList trends={trends} />
                    </>
                )}
            </div>
        </div>
    );
}

export default SidebarRight;