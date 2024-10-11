import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SectionPersonal from './SectionPersonal'

function App() {
    const [personalDetails, setPersonalDetails] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "0123456789",
        email: "testmail@testmail.com",
        linkedIn: "",
        location: "Earth",
    });

    return (
        <>
            <div id="forms">
                <form>
                    <label htmlFor="input-first-name">First Name </label>
                    <input type="text" id='input-first-name' value={personalDetails.firstName}
                        onChange={(e) => setPersonalDetails({...personalDetails, firstName: e.target.value})}/>
                    <div></div>
                    <label htmlFor="input-last-name">Last Name </label>
                    <input type="text" id='input-last-name' value={personalDetails.lastName}
                        onChange={(e) => setPersonalDetails({...personalDetails, lastName: e.target.value})}/>
                    <div></div>
                    <label htmlFor="input-phone">Phone Number </label>
                    <input type="tel" id='input-phone' value={personalDetails.phone}
                        onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}/>
                    <div></div>
                    <label htmlFor="input-email">Email </label>
                    <input type="email" id='input-email' value={personalDetails.email}
                        onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}/>
                    <div></div>
                    <label htmlFor="input-linkedin">Linked In </label>
                    <input type="url" id='input-linkedin' value={personalDetails.linkedIn}
                        onChange={(e) => setPersonalDetails({...personalDetails, linkedIn: e.target.value})}/>
                    <div></div>
                    <label htmlFor="input-location">Location </label>
                    <input type="tel" id='input-location' value={personalDetails.location}
                        onChange={(e) => setPersonalDetails({...personalDetails, location: e.target.value})}/>
                </form>
            </div>
            <div id="resume">
                <SectionPersonal firstName={personalDetails.firstName} lastName={personalDetails.lastName} phone={personalDetails.phone}
                email={personalDetails.email} linkedIn={personalDetails.linkedIn} location={personalDetails.location}/>
            </div>
        </>
    )
}

export default App;
