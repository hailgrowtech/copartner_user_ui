import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../constants';
import './CourseList.css'


const CourseList = () => {


  return (
    <div className="flex flex-wrap justify-center courseCard">
      {courses.map((course, index) => (
        <CourseCard key={index} courseData={course} />
      ))}
    </div>
  );
};

export default CourseList;
