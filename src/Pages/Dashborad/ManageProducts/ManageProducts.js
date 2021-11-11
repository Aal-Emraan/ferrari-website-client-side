import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getcars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div>
            <h1>Manage all products</h1>
        </div>
    );
};

export default ManageProducts;