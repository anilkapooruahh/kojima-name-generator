import React from "react"
import { Field } from "./SectionTwo"

const SectionThree = ({ values, onChange }) => (
  <div>
    <h2>Section Three: Kojima Information</h2>
      <Field 
        onChange = {onChange}
        name = "filmCharacter"
        question = "Who is your favourite film character? (NOTE: must be played by Kurt Russel)"
        answer = {values.filmCharacter} />
      <Field 
        onChange = {onChange} 
        name = "kubrickFilm" 
        question ="What is the last word of your favourite Kubrick film? " 
        answer = {values.kubrickFilm} />
      <Field 
        onChange = {onChange} 
        name = "joyDivision"
        question = "What is the first word of your favourite Joy Division album?" 
        answer = {values.joyDivision} />
      <Field 
        onChange = {onChange}
        name = "nprTerm"
        question = "What is a scientific term you have picked up by listening to NPR once"
        answer = {values.nprTerm} />
      <Field 
        onChange = {onChange}
        name = "miliaryHardware"
        question = "What is a piece of military hardware you find cool even though war is bad?"
        answer = {values.militaryHardware} />
      <Field 
        onChange = {onChange}
        name = "madsMikkelsen"
        question = "Describe in one word something you would like to see Mads Mikkelsen do?"
        answer = {values.madsMikkelsen} />
  </div>
)

export default SectionThree