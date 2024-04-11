import React, { useState } from 'react';
import { blogs } from '../../constants';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState(6); // Initial number of displayed blogs
  const totalBlogs = blogs.length;

  const handleExploreMore = () => {
    // Increase the number of displayed blogs by 6 or less if there are fewer remaining blogs
    setDisplayedBlogs(prevCount => Math.min(prevCount + 6, totalBlogs));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {blogs.slice(0, displayedBlogs).map((blog, index) => (
        <div key={index} className="w-full md:w-1/3 p-5 rounded-md mb-8 md:mb-0 text-white">
           <Link to={`/blogs/${blog.id}`} className="w-full overflow-hidden relative rounded-lg md:bg-transparent bg-[#18181ba6] hover:border border-solid border-[#f4f4f51d] transition duration-300 ease-in-out transform hover:bg-[#18181ba6] hover:border-solid hover:border-[#f4f4f51d] hover:shadow-lg">
          <div className="w-full overflow-hidden relative rounded-lg md:bg-transparent bg-[#18181ba6] hover:border border-solid border-[#f4f4f51d] transition duration-300 ease-in-out transform hover:bg-[#18181ba6] hover:border-solid hover:border-[#f4f4f51d] hover:shadow-lg">
            <img
              src={blog.imageUrl}
              alt="Blog_Image"
              className="w-full h-60 object-cover rounded-md"
              style={{
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)'
              }}
            />
             <div className="p-4 relative z-10">
              <h3 className="text-2xl text-left">{blog.title}</h3>
              <p className="mt-4 text-gray-300 text-left">
                {blog.bio}
              </p>
            </div>
          </div>
          </Link>
        </div>
      ))}
      {displayedBlogs < totalBlogs && ( // Render Explore More button if there are more blogs to display
        <div className="w-full flex justify-center mt-4">
          <button className="bg-white text-black py-2 px-4 rounded-md" onClick={handleExploreMore}>
            Top Blogs
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
