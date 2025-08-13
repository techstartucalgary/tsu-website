import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./particles.css";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // This loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // Starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Container loaded and ready
  }, []);
  return (
    <Particles
      id="tsparticles"
      className="particle_container"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 125,
            density: {
              enable: true,
              value_area: 641.3648243462092,
            },
          },
          color: {
            value: "#17EFC8",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#ffffff",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 0,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#17EFC8",
            opacity: 0.7455866083024681,
            width: 1.603412060865523,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 7776.548495197786,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
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
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default Particle;
