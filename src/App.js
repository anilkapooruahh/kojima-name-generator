/* eslint-disable default-case */
import './App.css';
import { useState } from 'react';
import { SectionTwo } from './components/SectionTwo'
import "./components/SectionThree"
import { personalInfo, kojimaInfo } from './templates'; 
import SectionThree from './components/SectionThree';
const diceRoll = max => Math.floor(Math.random() * max) + 1

const Header = () => (
  <div className = "Header">
    <h1>Hideo Kojima name generator</h1>  
    <p>Taken from <a href = "https://www.youtube.com/watch?v=t-3i6GBYvdw&t=86s"> polygon video </a></p>
  </div>
)

const SectionOne = (props) => {
  if (props.number !== -1) {
    if (props.number !== 6) {
      var sectionOneOutput = "You only have one Kojima name" 
    } else {
       sectionOneOutput = "You have six Kojima names"
    }
  }
  return (
      <div className = "sectionOne">
        <h2>Section 1: Deciding how many names you have</h2>
        <button onClick = {props.handleNumber}> Roll 1d6</button> 
        <p>{sectionOneOutput} - {props.number}</p> 
      </div>
  )
}

const App = () => {
  //State Managemenrt
  const [numberNames, setNumberNames] = useState(-1)
  const [ personalInfoValues,setPersonalInfoValues ] = useState(personalInfo)
  const [ kojimaInfoValues, setKojimaInfoValues ] = useState(kojimaInfo)
  const [manCondition, setmanCondition] = useState(-1)
  const [manText, setmanText] = useState("")
  const [conditionCondition, setconditionCondition] = useState(-1)
  const [conditionText, setConditionText] = useState("")
  const [kojimaCondition, setKojimaCondition] = useState(false)
  const [kojimaText, setKojimaText ] = useState("")
  const [kojimaNameCondition, setKojimaNameCondition] = useState(-1)
  const [kojimaNameText, setKojimaNameText] = useState("")

  //Handling onChange functions for the different sections
  const handleInputChange = (event, getter, setter ) => {
    const { name, value } = event.target
    setter({
      ...getter,
      [name]: value,
    })
    console.log(getter)
  }
  
  const handlePersonalInfoChange = event =>  handleInputChange(event, personalInfoValues, setPersonalInfoValues)
  const handleKojimaInfoChange = event => handleInputChange(event, kojimaInfoValues, setKojimaInfoValues)
  
  //Generating RPG dice
  const generateD4Roll = () => diceRoll(4)
  const generateD6Roll = () => setNumberNames(diceRoll(6))
  const generateD8Roll = () => diceRoll(8)
  const generateD100Roll = () => diceRoll(100)
  const generatekojimaNameConditionRoll = () => diceRoll(20)

  const manConditionClick = () => {
    if (generateD4Roll() === 4) {
      setmanCondition("man")
      setmanText("You have this condition. Your last name will include the suffix-man. If your name already has -man at the end of it, I guess you’re just going to have -manman at the end of your name")
    } else {
      setmanCondition("")
      setmanText("You do not have this condition")
    }
  }
  const conditionConditionClick = () => {
    switch (generateD8Roll()) {
      case 6:
        setconditionCondition("Big ")
        setConditionText("You’re big. Your name must have “Big” at the beginning of it")
        break;
      case 7:
        setconditionCondition("Old ")
        setConditionText("You are older than you once were. Your name must have “Old” atthe beginning of it")
        break;
      case 8:
        setconditionCondition(personalInfoValues.bodyState)
        setConditionText("You are how you currently are")
        break;
      default:
        setconditionCondition('')
        setConditionText("You do not have this condition")
        break;
    }
  }

  const kojimaConditionClick = () => {
    if (generateD100Roll() === 100) {
      setKojimaCondition(true)
      setKojimaText("Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You’re in Kojima’s world—your world—and that’s just the breaks, pal. Stop this worksheet now. You’re Hideo Kojima.Go do the things that Hideo Kojima does.")
    } else {
      setKojimaText("You do not have this condition")
    }
  }
  const normalName = () => {
    setKojimaNameText(conditionCondition + personalInfoValues.userName + manCondition)
  }
    
  const occupationName = () => {
    switch (generateD4Roll()) {
      case 1:
        setKojimaNameText(conditionCondition + personalInfoValues.personality + ' ' + personalInfoValues.occupationCondensed + manCondition)
        break
      case 2:
        setKojimaNameText(conditionCondition + personalInfoValues.goodAt + " " + personalInfoValues.occupationCondensed + manCondition)
        break
      case 3:
        setKojimaNameText(conditionCondition + personalInfoValues.nameHomophone + " " + personalInfoValues.occupationCondensed + manCondition)
        break
        case 4:
        setKojimaNameText(conditionCondition + kojimaInfoValues.filmCharacter + " " + personalInfoValues.occupationCondensed + manCondition)
        break
    }
  }
  const hornyName = () => {
    switch (generateD4Roll()) {
      case 1:
        setKojimaNameText(conditionCondition + personalInfoValues.favouriteState + " " + personalInfoValues.petSpecies + manCondition)
        break;
      case 2:
        setKojimaNameText(conditionCondition + "Naked " + personalInfoValues.petSpecies + manCondition)
        break
      case 3:
        setKojimaNameText(conditionCondition + personalInfoValues.goodAt + ' ' + personalInfoValues.petSpecies + manCondition)
        break
      case 4:
        setKojimaNameText(conditionCondition + personalInfoValues.zodiacSign + " " + personalInfoValues.petSpecies + manCondition)
        break
    }
  }
  const theName = () => {
    switch (generateD4Roll()) {
      case 1:
        setKojimaNameText(conditionCondition + 'The ' + personalInfoValues.intangibleFear + manCondition )
        break;
      case 2:
        setKojimaNameText(conditionCondition + 'The ' + personalInfoValues.tangibleFear + manCondition )
        break
      case 3:
        setKojimaNameText(conditionCondition + "The " + personalInfoValues.embarassingMemory + manCondition)
        break
      case 4:
        setKojimaNameText(conditionCondition + "The " + kojimaInfoValues.militaryHardware + manCondition)
    }
  }

  const coolName = () => {
    switch (generateD6Roll()) {
      case 1:
        setKojimaNameText(conditionCondition + kojimaInfoValues.madsMikkelsen + " " + kojimaInfoValues.kubrickFilm + manCondition)
        break;
      case 2:
        setKojimaNameText(conditionCondition + kojimaInfoValues.madsMikkelsen + ' ' + kojimaInfoValues.joyDivision + manCondition)
        break
      case 3:
        setKojimaNameText(conditionCondition + kojimaInfoValues.madsMikkelsen + ' ' + kojimaInfoValues.nprTerm + manCondition)
        break
      case 4:
        setKojimaNameText(conditionCondition + kojimaInfoValues.madsMikkelsen + " " + personalInfoValues.goodAt + manCondition)
        break
      case 5:
        setKojimaNameText(conditionCondition + kojimaInfoValues.madsMikkelsen + " " + personalInfoValues.intangibleFear + manCondition)
        break
      case 6:
        setConditionText(conditionCondition + kojimaInfoValues.madsMikkelsen + " " + personalInfoValues.nameHomophone + manCondition) 
        break;
    }
  }

  const violentName = () => {
    switch (generateD4Roll()) {
      case 1:
        setKojimaNameText(conditionCondition + kojimaInfoValues.nprTerm + " "  + personalInfoValues.stabbedObject + manCondition )
        break;
      case 2:
        setKojimaNameText(conditionCondition + personalInfoValues.favouriteState + ' ' + personalInfoValues.stabbedObject + manCondition )
        break
      case 3:
        setKojimaNameText(conditionCondition + kojimaInfoValues.militaryHardware + " " + personalInfoValues.stabbedObject + manCondition)
        break
      case 4:
        setKojimaNameText(conditionCondition + personalInfoValues.tangibleFear + " " + personalInfoValues.stabbedObject + manCondition)
    }
  }

  const nameThatLacksSubtext = () => setKojimaNameText(conditionCondition + personalInfoValues.lastThing + manCondition)
  const kojimaNameClick = () => {
    if (kojimaCondition) {
      setKojimaNameText("Hideo Kojima")
    }
    setKojimaNameCondition(generatekojimaNameConditionRoll())
    if (kojimaNameCondition === 1) {
      //normal name 
      normalName()
    } else if (kojimaNameCondition < 7) {
      //occupational name 
      occupationName()
    } else if (kojimaNameCondition < 11) {
      //horny name 
      hornyName()
    } else if (kojimaNameCondition < 14) {
      //THE name
      theName()
    } else if (kojimaNameCondition < 18) {
      //cool name 
      coolName()
    } else if (kojimaNameCondition < 20) {
      //violent name
      violentName()
      return null
    } else {
      //name that lacks subtext
      nameThatLacksSubtext()
      return null
    }
  }
  console.log(personalInfoValues.userName);
  return (
    <div className="App">
      <Header />
      <SectionOne number = {numberNames} handleNumber = {generateD6Roll} />
      <SectionTwo values = {personalInfoValues} onChange = {handlePersonalInfoChange} />
      <SectionThree values = {kojimaInfoValues} onChange = {handleKojimaInfoChange} />
    {/* Handling conditions */}
      <h2>Section Four: Determining Your Name Conditions </h2>
      <div>
        <p>The -MAN CONDITION:</p>
        <button onClick = {manConditionClick} >Roll 1d4 </button>
        <p>{manText}</p>
      </div>
      <div>
        <p>The CONDITION CONDITION </p>
        <button onClick = {conditionConditionClick}>Roll 1d8</button>
        <p>{conditionText} </p>
      </div>
      <div>
        <p>The KOJIMA CONDITION</p>
        <button onClick = {kojimaConditionClick}>Roll 1d100</button>
        <p>{kojimaText}</p>
      </div>
      <h2>Section Five: Determining Your Name Category</h2>
      <button onClick = {kojimaNameClick}>Roll 1d20 and find out your Kojima Name</button>
      <p>{kojimaNameText}</p>
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default App;
