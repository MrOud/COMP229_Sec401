import { useState } from 'react'
import './dropdown.css'

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("Option 1")

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return <form>
        <label>Select an option:
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
        </label>
        <p className='dropdown__selected'>Selected Option: {selectedOption}</p>
    </form>
}