import React, { useState } from 'react'
import ENumbers from './ENumbers.jsx'


const EuroNumbers = () => {
    const [numbersE, setNumbersE] = useState([])
    const [additionalE, setAdditionalE] = useState([])

    const randomNumberMain = () => {
        const numArr = []
        while (numArr.length < 5) {
            let randomNum = Math.ceil(Math.random() * 50)
            if (!numArr.includes(randomNum)) {
                numArr.push(randomNum)
            }
        }
        return numArr
    }
    const randomNumberSub = () => {
        const numSubArr = []
        while (numSubArr.length < 2) {
            let randomNum = Math.ceil(Math.random() * 12)
            if (!numSubArr.includes(randomNum)) {
                numSubArr.push(randomNum)
            }
        }
        return numSubArr
    }

    const clickHandler = () => {
        const ranNumArr = randomNumberMain().sort((a, b) => a - b)
        const ranNumSubArr = randomNumberSub().sort((a, b) => a - b)
        setNumbersE([...ranNumArr])
        setAdditionalE([...ranNumSubArr])
    }
    const remove = () => {
        setNumbersE([])
        setAdditionalE([])
    }
    return (
        <>
            <h1>Euro Jackpot</h1>
            <p>Generating Lucky numbers</p>
            <div className='ranNum'>
                <ENumbers numbersE={numbersE} additionalE={additionalE} />
            </div>
            <button onClick={clickHandler}>create number</button>
            <button onClick={remove}>Reset</button>
        </>
    )
}

export default EuroNumbers