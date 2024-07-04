
import { useEffect, useState } from "react";

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("https://your-fake-api-endpoint.com/blog")
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  const handleCommentSubmit = (postId) => {
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newComment],
    });
    setNewComment("");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map(post => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Comments:</h3>
              <ul>
                {(comments[post.id] || []).map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
              <input 
                type="text"
                className="border p-2 rounded mt-2"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button 
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={() => handleCommentSubmit(post.id)}
              >
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;



