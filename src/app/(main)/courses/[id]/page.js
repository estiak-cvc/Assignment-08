import React from 'react';

const DetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://assignment-08-xi-one.vercel.app/data/courses.json')
    const courses = await res.json()

    const course = courses.find(c => c.id == id)
    return (
        <div>
            <h1>{course?.title}</h1>
            <p>{course.instructor} </p>
        </div>
    );
};

export default DetailsPage;