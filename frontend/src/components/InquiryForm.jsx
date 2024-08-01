import React, { useState } from 'react';

function Inquiry() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [detail, setDetail] = useState(''); 


    const handleSubmit = async (event) => {
        event.preventDefault();
        const inquiry = { name, email, service, detail };
    
        try {
            const response = await fetch('http://localhost:5050/api/inquiry/inquiry-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inquiry)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Inquiry sent:', data);
        } catch (error) {
            console.error('There was an error sending the inquiry!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Send Inquiry</button>
        </form>
    );
}

export default Inquiry;