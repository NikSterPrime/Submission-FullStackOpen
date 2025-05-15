const Header = (props) => <h2>{props.name}</h2>

const Content = (props) => props.parts.map((p) => {
    return <p>{p.name} {p.exercises}</p>;
})

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => props.parts.reduce((s,p) => {
    console.log(p.exercises);
    return  s + p.exercises;
},0)

const Course = (props) => {
    console.log("return before working");
    console.log(props.course.parts);
    return(
        <>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <p>total of <Total parts={props.course.parts} /> exercises</p>
        </>
    )
}

export default Course;