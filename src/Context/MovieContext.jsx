import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

// Link per API
let baseurlApi = "http://localhost:3000/posts";

const PostsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPost] = useState([]);

  function fetchpost() {
    axios.get(`${baseurlApi}`).then((res) => {
      console.log(res.data);

      setPost(res.data.data);
    });
  }
  useEffect(fetchpost, []);

  const postData = { posts };
  return (
    <PostsContext.Provider value={postData}>{children}</PostsContext.Provider>
  );
};

const usePosts = () => {
  return useContext(PostsContext);
};

export { PostProvider, usePosts };
