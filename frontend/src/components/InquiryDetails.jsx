const InquiryDetails = ({ inquiry }) => {
    return (
        <div>
            <h4>{inquiry.project}</h4>
            <p><strong>Service: </strong>{inquiry.service}</p>
            <p><strong>Details: </strong>{inquiry.details}</p>
            <p>{inquiry.createdAt}</p>
        </div>
    )
}

export default InquiryDetails