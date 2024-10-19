import { Grid } from "antd";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const { useBreakpoint } = Grid;

const BackgroundAnimation = () => {
  const { xs, sm, md } = useBreakpoint();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: (xs || sm) && !md ? 30 : 100,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          shape: {
            type: "dot",
            options: {
              sides: 200,
            },
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 200, // Ubah nilai distance sesuai keinginan Anda
            color: "#010101", //Ubah warnaaa
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: ["repulse"],
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 600,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
        background: {
          image: "",
          position: "50% 50%",
        },
      }}
    />
  );
};

export default BackgroundAnimation;
