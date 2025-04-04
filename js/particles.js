
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 40, // Quantidade de partículas
        density: {
          enable: true,
          value_area: 800 // Área onde as partículas irão se mover
        }
      },
      color: {
        value: "#9303A6" // Cor das partículas
      },
      shape: {
        type: "circle", // Forma das partículas
      },
      opacity: {
        value: 0.5, // Opacidade das partículas
        random: true, // Opacidade aleatória
        anim: {
          enable: true,
          speed: 1, // Velocidade da animação de opacidade
          opacity_min: 0.2, // Opacidade mínima
          sync: false
        }
      },
      size: {
        value: 5, // Tamanho das partículas
        random: true, // Tamanho aleatório das partículas
        anim: {
          enable: true,
          speed: 10, // Velocidade do aumento e diminuição do tamanho
          size_min: 0.1, // Tamanho mínimo
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 3, // Velocidade de movimento das partículas
        direction: "none", // Direção das partículas
        random: true, // Direção aleatória
        straight: false, 
        out_mode: "out", // Comportamento das partículas quando saem da tela
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas", 
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Efeito ao passar o mouse sobre as partículas
        },
        onclick: {
          enable: true,
          mode: "push" // Efeito ao clicar na tela
        }
      }
    },
    retina_detect: true
  });

