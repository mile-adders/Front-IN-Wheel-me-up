import React from 'react';
import { Component } from 'react';

import people from './people.js';
import github from './assets/other_logos/github_50x50.png';
import pictures from './assets/index.js';
import gmail from './assets/other_logos/gmail4.png';
import linkedin from './assets/other_logos/linkedin_50x50.png';
import js from './assets/other_logos/javaScript.png';
import c from './assets/other_logos/c.png';
import Header from '../Header/Header.js';


class Cards extends Component {
  render() {

    const gmailbase = 'http://google.com/';
    const gitbase = 'http://github.com/';
    return (
      <>
      <Header />
      <div>


        <div id='teams'>
          <div>

            <h1 class='hello'>
              Who We Are
            </h1>
            <p class='hash'>
              The company wheel me up is present to create a world where modern     <br />
           rental,this digital site helps car renters to think about options  <br />
           from all angles. All this through a clear view of what a great deal,<br />
          We show you the new and used car price categories.We provide this <br />
           information so you can feel confident
          in the pre-discounted price that you will pay at the agency. <br />
          If you need a fast and easy way to trade in your car. <br />
          Our national network of over 16,500 authorized dealers  <br />
          shares our belief that truth, transparency and fairness <br />
          are at the heart of a great car rental experience.< br />
          wheel me up  Is based in Amman, Jordan, and has an office in Washington.<br />
            </p>




          </div>

          <h2>Meet the Team</h2>

          {
            people.teams.map(team => {
              console.log(pictures)
              return (
                <div class='team'>
                  {/* <h3 class='title'> {team.name} </h3> */}
                  <div class='members'>
                    {team.members.map(member => {
                      return (
                        <div class='card'>

                          <img class='portrait' src={pictures[member.picture]} />
                          <div class='name'> {member.name} </div>
                          <div class='icons'>
                            <a href={gitbase + member.github}> <img class='icon' src={github} /> </a>
                            <a class='icona' herf={gmailbase + member.gmail}><img class='ok' src={gmail} /> </a>
                            <img class='icon' src={member.logo === 'js' ? js : c} />
                            <a href={member.linkedin}><img class='icon' src={linkedin} /></a>
                          </div>
                        </div>
                      );
                    },
                    )}
                  </div>

                </div>

              );
            })
          }

        </div>
      </div>
      </>
    );
  }
}
export default Cards