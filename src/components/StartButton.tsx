import React from 'react'
import { useDispatch } from 'react-redux'
import { nextStep } from '../stores/step';

function StartButton() {
const dispatch = useDispatch();
const handleStartButton = ()=>{
    dispatch(nextStep())
}

  return (
    <button onClick={handleStartButton}>StartButton</button>
  )
}

export default StartButton