// src/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import './styles.css';
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams(); // Get postId from URL parameters
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>Points: {post.points}</p>
          <ul>
            {post.children.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
