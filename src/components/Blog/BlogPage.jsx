import React from 'react';
import { blogs } from '../../constants';
import { useParams } from 'react-router-dom';
import styles from '../../style';

const SingleBlog = () => {
  const { blogId } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section id="" className={`flex flex-col ${styles.paddingY} `}>
      <div className="w-full text-left md:px-20 md:mb-12 mt-5">
        <div className="flex flex-wrap justify-center items-center">
          <img src={blog.imageUrl} alt="Blog_Image" className="w-full md:w-1/2 h-auto md:h-60 object-cover rounded-md" />
          <div className="p-4 md:w-1/2 text-white">
            <h3 className="text-3xl font-semibold">{blog.heading1}</h3>
            <p className="mt-2 text-gray-300">{blog.content1}</p>
          </div>
        </div>
        <div className="p-4 text-white">
          <p className="mt-2 text-gray-300">{blog.content2}</p>
        </div>
        <div className="p-4 text-white">
          <h3 className="text-3xl font-semibold subheading-color">{blog.heading2}</h3>
          <p className="mt-2 text-gray-300">{blog.content3}</p>
        </div>

      </div>
    </section>
  );
};

export default SingleBlog;
