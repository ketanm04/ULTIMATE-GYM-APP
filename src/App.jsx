import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null) //THE null we pass here is the initial value we give to workout state variable
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([]) //initial value for muscles is an empty array []
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }
  // PROPS IS AN OBJECT 
  // THAT AUTOMATICALLY GETS CREATED WHEN WE PASS IN STATEVAR LIKE POISON={POISON}
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-700 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        poison={poison} //The first poison (before the =) is the prop name.
        //This is how the child will refer to it: props.poison or after destructuring: const { poison } = props.
        //"I want to pass the state variable poison (from the parent’s state) to the child as a prop named poison."
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
