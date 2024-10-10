import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SectionPersonal from './SectionPersonal'

function App() {
    return (
        <>
            <SectionPersonal firstName="John" lastName="Doe" phone="0123456789" email="testmail@testmail.com" location="somewhere"/>
        </>
    )
}

export default App
