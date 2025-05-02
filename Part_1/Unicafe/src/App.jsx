import { useState } from 'react'

const Header = (props) => {
  return(
    <>
    <h1>{props.head}</h1>
    </>
  )
}

function totals(good,neutral,bad){
  const total = good + neutral + bad
  return total
}

function average(good,neutral,bad,total){
  const avg = ((good*1)+(neutral*0)+(bad*-1))/total
  return avg
}

function percentage(good,total){
  const percentage = (good/total)*100.0
  return percentage
}

const Output = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  if(good >= 1 || bad >= 1 || neutral >= 1)
  {
    return(
      <>
        <Statistics good = {props.good} neutral = {props.neutral} bad = {props.bad} total = {props.total} avg = {props.avg} perc = {props.perc} />
      </>
    )
  }
  else{
    return(
      <>
      <tr>
        <td>No feedback Given</td>
      </tr>
      </>
    )
  }
}

const Statistics = (props) => {
    return(  
      <>
        <StatisticsLine text = "good" value = {props.good}/>
        <StatisticsLine text = "neutral" value = {props.neutral}/>
        <StatisticsLine text = "bad" value = {props.bad}/>
        <StatisticsLine text = "total" value = {props.total}/>
        <StatisticsLine text = "average" value = {props.avg}/>
        <StatisticsLine text = "positive" value = {props.perc}/>
        
      </>
  )
}

const StatisticsLine = (props) => {
  return(
    <>
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = totals(good,neutral,bad)
  const avg = average(good,neutral,bad,total)
  const perc = percentage(good,total)

  return (
    <div>
      <Header head = "give feedback" />
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick= {() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <Header head = "statistics" />
      <table>
        <tbody>
          <Output good = {good} neutral = {neutral} bad = {bad} total = {total} avg = {avg} perc = {perc} />
        </tbody>
      </table>

    </div>
  )
}

export default App