import { useState } from 'react'
import { Card } from './Card/Card.jsx';



function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Card />
            <Card />

        </>
    )
}

export default App
