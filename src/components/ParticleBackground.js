import React, { useEffect, useState, useCallback } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
//import ParticlesConfig from "./ParticlesConfig"
import { loadSlim } from "@tsparticles/slim"

const ParticleBackground = () => {
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
    })
  }, [])

  const particlesLoaded = (container) => {
    //console.log(container)
  }

  const ParticlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: '#121212',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#f2f2f2",
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
    detectRetina: true,
  }

  if (init) {
    return (
      <div>

        <Particles
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