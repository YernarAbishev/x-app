import {
    HOME_PAGE,
    COMMUNITIES_PAGE,
    PREMIUM_PAGE,
    PROFILE_PAGE,
    ADD_POST_PAGE
} from "./consts";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import CommunitiesPage from "../pages/CommunitiesPage";
import PremiumPage from "../pages/PremiumPage";
import AddPostPage from "../pages/AddPostPage";

export const routes = [
    {
        path: HOME_PAGE,
        element: HomePage,
    },
    {
        path: COMMUNITIES_PAGE,
        element: CommunitiesPage,
    },
    {
        path: PROFILE_PAGE,
        element: ProfilePage,
    },
    {
        path: PREMIUM_PAGE,
        element: PremiumPage,
    },
    {
        path: ADD_POST_PAGE,
        element: AddPostPage,
    },
]