import avatar from "../assets/images/avatar.jpg";
import verify from "../assets/images/verify.png";

function ContentHeader() {
    return (
        <div className="header">
            <form>
                <div className="header-user-data">
                    <div className="header-avatar">
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <h3 className="header-username">Yereke</h3>
                    <div className="header-verify">
                        <img src={verify} alt="Verify"/>
                    </div>
                </div>
                <input type="text" placeholder="What is happening?"/>
                <button className="primary-button sm">Post</button>
            </form>
        </div>
    );
}

export default ContentHeader;