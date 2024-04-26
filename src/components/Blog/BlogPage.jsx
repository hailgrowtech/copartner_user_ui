import React from 'react';
import { blogs } from '../../constants/index';
import { useParams } from 'react-router-dom';
import styles from '../../style';

const BlogPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className={`${styles.paddingY}`}>
      <div className={`md:px-[2rem] px-2 expertise-Bg`}>
        <div className="w-full text-left md:px-20 mt-5">
          <div className="justify-center items-center w-full">
            <img src={blog.imageUrl} alt="Blog_Image" className="w-full md:w-[100%] max-h-[500px] h-auto object-cover rounded-md" />
            <div className="p-1 py-5 md:w-full text-white">
              <h3 className="text-3xl font-semibold">{blog.heading1}</h3>
              <p className="mt-2 text-gray-300">{blog.content1}</p>
            </div>
          </div>
          <div className="p-1 py-5 text-white">
            <p className="mt-2 text-gray-300">{blog.content2}</p>
          </div>
          <div className="p-1 py-5 text-white">
            <h3 className="text-3xl font-semibold">{blog.heading2}</h3>
            <p className="mt-2 text-gray-300">{blog.content3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
