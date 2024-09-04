import { useState } from 'react';

const BlockchainForm = () => {
    const [project, setProject] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inquiry = { project, name, email, details };
    
        try {
            const response = await fetch('http://localhost:5050/api/inquiry/blockchain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inquiry)
            });

            if (!response.ok) {
                // If the response is not OK, parse the error message
                const errorData = await response.json();
                setError(errorData.error);
                throw new Error(errorData.error);
            }

            const data = await response.json();

            if (response.ok) {
                setProject('')
                setName('')
                setEmail('')
                setService('')
                setDetails('')
                setError(null)
                console.log('Inquiry sent:', data);
            }
        } catch (error) {
            console.error('There was an error sending the inquiry!', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Inquiry Form</h2>
            
            {error && <div className="text-red-500 mb-4">{error}</div>}
            
            <div className="mb-4">
                <label htmlFor="project" className="block text-gray-700 font-semibold mb-2">Project Name</label>
                <input 
                    type="text"
                    id="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Project Details</label>
                <textarea
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>
            </div>

            <button 
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Submit
            </button>
        </form>
    );
}

export default BlockchainForm