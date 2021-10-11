import React from "react";


  const initialValues = {
    userName: '',
    occupationName: '',
    occupationCondensed: '',
    petSpecies: '',
    embarassingMemory: '',
    stabbedObject: '',
    goodAt: '',
    carrots: '',
    intangibleFear: '',
    tangibleFear: '',
    lastThing: '',
    favouriteState: '',
    nameHomophone: '',
    zodiacSign: '',
    personality: '',
  }
const Field = prop => (
  <div>
  <label>{prop.question}  </label>
  <input value = {prop.value} onChange = {prop.onChange} name = {prop.name} label = {prop.name} />
  </div>
)
 const SectionTwo = ( { values, onChange } ) => {

  return (
    <div>
     <h2>Section Two: Personal Information </h2>
        <form>
          <Field onChange = {onChange}  name = "userName"            question = "What is your full name?" answer = {values.userName} />
          <Field onChange = {onChange}  name = "occupationName"      question = "What do you do at your occupation?" answer = {values.occupationName} />
          <Field onChange = {onChange}  name = "occupationCondensed" question = "Condense the verb in your answer into a single -er noun. (e.g. if youare a sheep farmer, your answer will be 'farmer'" answer = {values.occupationCondensed} />  
          <Field onChange = {onChange}  name = "petSpecies"          question = "What was your first pet’s specific species/breed? If you never had a pet,please answer with an animal you wish you owned." answer = {values.petSpecies} />
          <Field onChange = {onChange} name = "embarassingMemory"   question = "Condense your most embarassing memory into two words" answer = {values.embarassingMemory} />
          <Field onChange = {onChange} name = "stabbedObject"       question = "What is the object you'd least like to be stabbed by?" answer = {values.stabbedObject} />
          <Field onChange = {onChange} name = "goodAt"              question = "What is something you are good at? (Verb ending in -ing)" answer = {values.goodAt} />
          <Field onChange = {onChange} name = "carrots"             question = "How many carrots could you eat in one setting, if someone forced you to?" answer = {values.carrots} />
          <Field onChange = {onChange} name = "intangibleFear"      question = "What is your greatest intangible fear?" answer = {values.intangibleFear} />
          <Field onChange = {onChange} name = "tangibleFear"        question = "What is your greatest tangible fear?" answer = {values.tangibleFear} />
          <Field onChange = {onChange} name = "lastThing"           question = "What is the last thing that you did before starting this worksheet" answer = {initialValues.lastThing} />
          <Field onChange = {onChange} name = "bodyState"           question = "What state is your body in currently(one-word answer)?" asnwer = {values.bodyState} />
          <Field onChange = {onChange} name = "favouriteState"      question = "What is your favourite state of matter?" answer = {values.favouriteState} />
          <Field onChange = {onChange} name = "nameHomophone"       question = "A word your name kind of sounds like?(e.g Brian -> Brain)" answer = {values.nameHomophone} />
          <Field onChange = {onChange} name = "zodiacSign"          question = "What is your Zodiac sign?" answer = {values.zodiacSign} />'
          <Field onChange = {onChange} name = "personality"         question = "If you had to describe your personality in one word, what would it be?" answer = {values.personality} />
          <button type="submit" onClick = {(event) => event.preventDefault()}> Submit Section two </button>
        </form>
    </div>);
}

export { SectionTwo, Field }
