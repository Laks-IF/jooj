import React from "react";

import Particles from "react-particles-js";

const ParticlesBackground = () => (
  <Particles
    width="100vw"
    height="100vh"
    style={{ position: "fixed", zIndex: "-1", top: "0", left: "0" }}
    params={{
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.02,
        },
        move: {
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
          },
        },
      },

      retina_detect: true,
    }}
  />
);

export default ParticlesBackground;
