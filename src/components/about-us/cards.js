import React from 'react'
import people from '../about-us/people.js'
import  { Component } from 'react'
// import './about-us/cards.scss'
import github from './assets/team-pics/other_logos/github_50x50.png'
import pictures from '../about-us/assets/team-pics/index.js'
import gmail from './assets/team-pics/other_logos/gmail.png'
import linkedin from './assets/team-pics/other_logos/linkedin_50x50.png'
import js from '../about-us/assets/team-pics/other_logos/javaScript.png'
import c from '../about-us/assets/team-pics/other_logos/c.png'


class Cards extends Component {
    render( ) {
  const gmailbase ='http://google.com/'
  const gitbase='http://github.com/'
  return (
  <div id='teams'>
    <h2>Meet the Team</h2>
    
    {
      people.teams.map(team => {
        console.log(pictures)
        return (
          <div class='team'>
          <h3 class='title'> {team.name} </h3>
            <div class='members'>             
                {team.members.map( member => {
                  return (
                    <div class='card'>        
                      
                      <img class='portrait' src={pictures[member.picture]} />
                      <div class='name'> {member.name} </div>
                      <div class='icons'>  
                        <a href={gitbase+member.github}> <img class='icon' src={github} /> </a>
                        <a herf ={gmailbase +member.gmail}><img class = 'ok' src={gmail}/> </a>
                        <img class ='icon' src = {member.logo==='js'? js : c} />
                        <a href={member.linkedin}><img class='icon' src={linkedin} /></a>
                      </div>
                    </div>
                    )
                  }
                )}             
            </div>
          </div>
        )
      })
    }
    
  </div>
  )
}
}
export default Cards