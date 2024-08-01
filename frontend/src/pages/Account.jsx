import { useEffect, useState } from "react";

// components 
import InquiryDetails from "../components/InquiryDetails";

const Account = () => {
    const [userInquiries, setUserInquiries] =useState(null)

    useEffect(() => {
        const fetchInquiries = async () => {
          try {
            const response = await fetch('http://localhost:5050/api/inquiry');
            const data = await response.json();
            if(response.ok){
                setUserInquiries(data);
            }
          } catch (error) {
            console.error("Error fetching inquiries:", error);
          }
        };
      
        fetchInquiries();
      }, []);

    return (
        <div>
            <div>
                {userInquiries && userInquiries.map((inquiry) => (
                    <InquiryDetails key={inquiry._id} inquiry={inquiry}/>
                ))}
            </div>
        </div>
    )
}

export default Account