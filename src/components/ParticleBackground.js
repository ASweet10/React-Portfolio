import React, { useEffect, useState, useCallback } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
//import ParticlesConfig from "./ParticlesConfig"

import { loadSlim } from "@tsparticles/slim"

const ParticleBackground = ({ propTheme }) => {
  const [ theme, setTheme ] = useState('dark')
  const [ particlesContainer, setParticlesContainer ] = useState()
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
      console.log('particleBG ' + theme)
    })
  }, [theme])

  const particlesLoaded = (container) => {
    //console.log(container)
  }

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme)
    }
    console.log('ue2 ' + theme)
  }, [theme, particlesContainer])

  const ParticlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: theme === 'dark' ? '#f2f2f2' : '#121212',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: theme === 'dark' ? '#121212' : "#f2f2f2",
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
            color: "#f2f2f2"
          },
          particles: {
            color: {
              value: "#121212"
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

  if (init) {
    return (
      <div>

        <Particles
          //theme={theme}
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={ParticlesConfig}
        />
      </div>
    )
  }

  return <></>
}

export default ParticleBackground