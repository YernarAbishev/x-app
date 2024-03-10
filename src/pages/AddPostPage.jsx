
function AddPostPage() {
    return (
        <div className="post-form">
            <form className="form">
                <h1 className="defaul-title">Add post</h1>
                <input type="text" placeholder="Full Name" required/>
                <input type="text" placeholder="URL Avatar" required/>
                <input type="checkbox" checked/>
                <input type="text" placeholder="URL Image"/>
                <textarea placeholder="What is happening?"></textarea>
                <input type="text" placeholder="Posted date"/>
                <button className="primary-button sm">Post</button>
            </form>
        </div>
    );
}

export default AddPostPage;