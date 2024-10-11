function HandleInfo({info, description}) {
    if (info) {
        return <span>{description}: {info}&nbsp;&nbsp;&nbsp;</span>
    }
}

function SectionPersonal({firstName, lastName, phone, email, linkedIn, location}) {
    
    return (
        <div id="section-personal" className="section">
            <h2>{firstName + " " + lastName}</h2>
            <div>
                <HandleInfo info={phone} description="Phone" />
                <HandleInfo info={email} description="Email" />
                <HandleInfo info={linkedIn} description="Linked In" />
                <HandleInfo info={location} description="Location" />
            </div>
        </div>
    )
}

export default SectionPersonal;