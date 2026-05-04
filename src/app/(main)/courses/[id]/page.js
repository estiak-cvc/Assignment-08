import React from 'react';

const DetailsPage = async({params}) => {
    const {id} = await params;
    return (
        <div>
            Courses Details Page
        </div>
    );
};

export default DetailsPage;