import React, { useEffect, useState, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { type Container, type ISourceOptions, MoveDirection, OutMode, Engine} from "@tsparticles/engine"
import ParticlesConfig from "./ParticlesConfig"
import { loadFull } from "tsparticles"

const ParticleBackground = () => {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])


  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }


  const options: ISourceOptions = useMemo(
    () => ({
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
    }),
    [],
  )

  if (init) {
    return (
      <div>

        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    )
  }

  return <></>
}

export default ParticleBackground