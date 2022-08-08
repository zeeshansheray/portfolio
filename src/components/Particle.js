import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="Particle">
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
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
                  value: 0.4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
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
	    	//   options={{
            // background: {
            //   color: '#0A192F',
            // },
            // fpsLimit: 40,
            // interactivity: {
            //   detectsOn: 'canvas',
            //   events: {
            //     resize: true
            //   },
            // },
            // particles: {
            //   color: {
            //     value: "#f1f1f1"
            //   },
            //   number: {
            //     density: {
            //       enable: true,
            //       area: 1080
            //     },
            //     limit: 0,
            //     value: 500,
            //   },
            //   opacity: {
            //     animation: {
            //       enable: true,
            //       minimumValue: 0.5,
            //       speed: 1,
            //       sync: false,
            //     },
            //     random: {
            //       enable: true,
            //       minimumValue: 0.1,
            //     },
            //     value: 1,
            //   },
            //   shape: {
            //     type: 'circle',
       
            //   },
            //   size: {
            //     random: {
            //       enable: true,
            //       minimumValue: 0.5
            //     },
            //     value: 1
            //   }
            // }
        //   }}
	  />  
  </div>
  );
}

export default Particle;
