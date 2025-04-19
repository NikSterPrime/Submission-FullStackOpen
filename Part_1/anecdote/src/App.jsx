import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return(
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
    </>
  )
}
const Content = () =>{
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}
const Total = () =>{
  const exercises2 = 7
  const exercises3 = 14
  const exercises1 = 10
  return(
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </  >
  )
}

const App = () => {
  return (
    <div color='black'>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App
