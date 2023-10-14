import { useRef } from 'react'
import './uncontrolled.css'

export default function Uncontrolled() {
    const selectedRef = useRef(null)
    const checkboxRef = useRef(null)
    const inputRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Input Value: ", inputRef.current.value)
        console.log("Checkbox Value: ", checkboxRef.current.value)
        console.log("Selected Value: ", selectedRef.current.value)
    }

    return <form className='uncontrolled' onSubmit={handleSubmit}>
        <label>
            <p>Name: </p>
            <input ref={inputRef} type="text" />
        </label>
        <label>
            <p>Favorite Color:</p>
            <select ref={selectedRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
        </label>
        <label className='uncontrolled__checkbox'>
            Check mate?
            <input type="checkbox" ref={checkboxRef} />
        </label>
        <button className='uncontrolled__button' type="submit">Submit</button>
    </form>
}