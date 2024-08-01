import React, { useState } from 'react'
import Numbers from '../Lotto-6-49/Numbers.jsx'


const LuckyNumber649 = () => {
    const [numbers, setNumbers] = useState([])
    const [additional, setAdditional] = useState()

    const randomNumber = () => {
        const numArr = []
        while (numArr.length < 6) {
            let randomNum = Math.ceil(Math.random() * 49)
            if (!numArr.includes(randomNum)) {
                numArr.push(randomNum)
            }
        }
        return numArr
    }

    const clickHandler = () => {
        const ranNumArr = randomNumber().sort((a, b) => a - b)
        let randomAdditional = Math.ceil((Math.random() * 10))
        setNumbers([...ranNumArr])
        setAdditional(randomAdditional)
    }
    const remove = () => {
        setNumbers([])
        setAdditional(null)
    }
    return (
        <>
            <h1>Lotto 6 / 49</h1>
            <p>Generating Lucky numbers</p>
            <div className='ranNum'>
                <Numbers numbers={numbers} additional={additional} />
            </div>
            <button onClick={clickHandler}>create number</button>
            <button onClick={remove}>Reset</button>
        </>
    )
}

export default LuckyNumber649