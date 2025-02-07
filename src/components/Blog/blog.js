import React, { useState, useEffect } from 'react';
import './blog.css';
import { blogs as initialBlogs } from './data'; 
import Footer from "../Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
    setBlogs((prevBlogs) => 
      prevBlogs.map(blog => ({
        ...blog,
        likes: storedLikes[blog.id] || 0,
      }))
    );
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLike = (id) => {
    const userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
    
    if (userLikes[id]) {
      alert("You have already liked this blog!");
      return;
    }

    const updatedBlogs = blogs.map(blog => {
      if (blog.id === id) {
        const newLikes = blog.likes + 1;

        // Update local storage for total likes
        const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
        storedLikes[id] = newLikes;
        localStorage.setItem('blogLikes', JSON.stringify(storedLikes));

        // Update user likes
        userLikes[id] = true;
        localStorage.setItem('userLikes', JSON.stringify(userLikes));

        return { ...blog, likes: newLikes };
      }
      return blog;
    });
    
    setBlogs(updatedBlogs);
  };

  const openShareModal = (blog) => {
    setSelectedBlog(blog);
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
    setSelectedBlog(null);
  };

  const shareOnPlatform = (platform) => {
    const url = window.location.href; 
    const text = encodeURIComponent(`Check out this blog: ${selectedBlog.title} at ${url}`);
    let shareUrl;

    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(selectedBlog.title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
    closeShareModal();
  };

  return (
    <div className="blog-container">
      <section className="hero-section">
        <h1>Meyani Tech Blog</h1>
        <p>Latest insights in technology, innovation, and sustainability.</p>
      </section>

      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}... <a href="nothing.com">Read More</a></p>
            <div className="blog-info">
              <span>By {blog.author}</span> | <span>{blog.date}</span> | <span>{blog.category}</span>
            </div>
            <div className="blog-actions">
              <button onClick={() => handleLike(blog.id)}>
                <i className="fas fa-thumbs-up"></i> {blog.likes} Likes
              </button>
              <button onClick={() => openShareModal(blog)}>
                <i className="fas fa-share-alt"></i> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {shareModalOpen && selectedBlog && (
        <div className="share-modal">
          <div className="share-modal-content">
            <h2>Share this blog</h2>
            <button onClick={() => shareOnPlatform('twitter')}>Share on Twitter</button>
            <button onClick={() => shareOnPlatform('linkedin')}>Share on LinkedIn</button>
            <button onClick={() => shareOnPlatform('facebook')}>Share on Facebook</button>
            <button onClick={closeShareModal}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
