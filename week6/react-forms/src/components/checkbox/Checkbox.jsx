import { useState } from 'react'
import './checkbox.css'

export default function Checkbox() {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        setIsChecked(event.target.checked)
    }

    return <form>
        <label htmlFor="color" className="checkbox__text">
            <input 
                className='checkbox__input'
                type='checkbox'
                name='color'
                checked={isChecked}
                onChange={handleChange}
            />
            Blue
        </label>

        {isChecked && <div>Blue is Checked</div>}
    </form>
}