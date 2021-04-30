import React from 'react';
import Particles from 'react-particles-js';
import "./Particles.css";

function Particle() {
  return (<div className="ParticlesCSS"><Particles
    className="particle_container"
    
    params={{
      particles: {
        number: {
          value: 125,
          density: {
            enable: true,
            value_area: 641.3648243462092
          }
        },
        color: {
          value: "#00ff0f"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 0,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ff0f",
          opacity: 0.7455866083024681,
          width: 1.603412060865523
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 7776.548495197786,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "bubble"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 170.53621458328246,
            size: 28.42270243054708,
            duration: 0.6496617698410762,
            opacity: 0.162415442460269,
            /*speed: 3,*/
          },
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: false
      }}  /></div>)}
      

      export default Particle