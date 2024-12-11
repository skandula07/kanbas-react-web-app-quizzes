import React, { useState } from 'react';
import { Quizzes } from './Quizzes';

const Courses = () => {
    const [selectedCourseId, setSelectedCourseId] = useState<string>("RS101");

    return (
        <div>
            <h1>Courses</h1>
            <select onChange={(e) => setSelectedCourseId(e.target.value)} value={selectedCourseId}>
                <option value="RS101">RS101</option>
                <option value="RS102">RS102</option>
                <option value="RS103">RS103</option>
            </select>
            <Quizzes CourseId={selectedCourseId} />
        </div>
    );
};

export default Courses;
