  const ParticlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: "#b80d3a",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#FFFFFF",
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#121212"
          },
          particles: {
            color: {
              value: "#f2f2f2"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            //color: "transparent"
            color: "#121212"
          },
          particles: {
            color: {
              value: "#f2f2f2"
            }
          }
        }
      }
    ],
    detectRetina: true,
  }

export default ParticlesConfig