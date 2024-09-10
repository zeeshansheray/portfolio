import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // For a smaller bundle size

const App = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine); // Load slim version to reduce bundle size
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
      <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#fffff",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                area: 500,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                          type: "circle",
                          stroke: {
                            width: 0,
                            color: "#000000"
                          },
                          image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                          }
                        },
                        opacity: {
                          value: 0.6,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                          }
                        },
                        size: {
                          value: 4,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 3,
                            size_min: 0.5,
                            sync: false
                          }
                        },
                        line_linked: {
                          enable_auto: true,
                          distance: 100,
                          color: "#fff",
                          opacity: 1,
                          width: 1,
                          condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                          }
                        },
                        move: {
                          enable: true,
                          speed: 1,
                          direction: "none",
                          random: false,
                          straight: false,
                          out_mode: "out",
                          bounce: false,
                          attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                          }
                        }
                      },
                      interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: false
                          },
                          onclick: {
                            enable: false
                          },
                          resize: true
                        }
                      },
                      retina_detect: true
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: 1,
                }}
            />
    );
};

export default App;
