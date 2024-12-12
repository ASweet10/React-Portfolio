import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import useColorMode from "hooks/useColorMode";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = (props) => {
  const [ theme, setTheme ] = useState('dark')
  const [init, setInit] = useState(false)
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      const savedTheme = localStorage.getItem('color-mode')
      console.log(savedTheme)
      if (savedTheme) {
        setTheme('dark')
      }
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [theme]);

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#121212",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: theme === 'dark' ? "#FFFFFF" : "#121212",
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
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;