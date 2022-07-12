import React from 'react'
import Projects from './projects'
const data=[
    {
        name:"Attedance Management App",
        description:"Attedance Management App using android, java and sqllite database.",
        skills:['Android','Java'],
        github:"https://github.com/TheYashshah/AttendanceApp"
    },
    {
        name:"Tic Tac Toe",
        description:"Tic Tac Toe App using android, java and sqllite database.",
        skills:['Android','Java'],
        github:"https://github.com/TheYashshah/tic-tac-toe"
    }]
function Projectcontainer() {
  
  return (
    <div className='container'>
        <h1>Projects</h1>
        {
            data.map(projectitem=>{
                return <Projects projectitem={projectitem}/>
            })
        }
      
    </div>
  )
}

export default Projectcontainer