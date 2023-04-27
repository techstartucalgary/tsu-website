import "./PostCreation.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PostCreation(props) {
  return (
    <div className="postCreationStyling">
      <h1 className="postCreationHeader">Create a Post</h1>
      <form id="postForm">
        <input type="text" id="createPostTitle" placeholder="Title..." />
        <br></br>
      </form>
      <textarea
        className="postTextArea"
        form="postForm"
        placeholder="Write your post here..."
      ></textarea>
      <input type="submit" id="postSubmit" value="Post" form="postForm" />
    </div>
  );
}

export default PostCreation;
