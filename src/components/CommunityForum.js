// src/components/CommunityForum.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch community forum posts from backend
    axios.get('/community-forum')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error('Error fetching community forum posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Community Forum</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Posted by: {post.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
