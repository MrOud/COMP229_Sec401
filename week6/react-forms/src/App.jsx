import ControlledComponent from './components/controlled/Controlled.jsx'
import Multiple from './components/multiple/Multiple.jsx'
import Dropdown from './components/dropdown/Dropdown.jsx'
import Checkbox from './components/checkbox/Checkbox.jsx'
import Validate from './components/validate/Validate.jsx'
import Uncontrolled from './components/uncontrolled/Uncontrolled.jsx'
import Rhf from './reactHookForm/Rhf.jsx'

import './App.css'

function App() {


  return (
    <>
        <ControlledComponent />
        <Multiple />
        <Dropdown />
        <Checkbox />
        <Validate />
        <Uncontrolled />
        <Rhf />
    </>
  )
}

export default App
