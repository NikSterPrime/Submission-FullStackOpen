const Header = (props) =>{
  return(
    <>
      <h1>{props.course}</h1>
    </>

  )
}

const Content = ({parts}) =>{
  
  return(
    <>
      {parts.map((part,index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </>
  )
}

const Total = ({parts}) =>{
  var total = 0
  for(let i=0;i<3;i++){
    total = parts[i].exercises + total
  }
  return(
    <>
      <p>{total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(parts[0].name)
  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


export default App
