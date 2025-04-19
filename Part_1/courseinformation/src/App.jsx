const Header = () =>{
  const course = 'Half Stack application development'
  return(
    <>
      <h1>{course}</h1>
    </>

  )
}

const Parts = (props) => {
  return(
    <p>{props.name} {props.num}</p>
  )
}

const Content = () =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
        <Parts name = {part1} num = {exercises1} />
        <Parts name = {part2} num = {exercises2} />
        <Parts name = {part3} num = {exercises3} />
    </div>
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
