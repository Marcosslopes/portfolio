const experiencias = [
    {
        titulo: "Análise e Desenvolvimento de Sistemas",
        status: "Em andamento",
        local: "FATEC Taubaté",
        descricao: "Cursando Análise e Desenvolvimento de Sistemas, desenvolvendo habilidades em programação, bancos de dados, arquitetura de software e desenvolvimento web."
    },
    {
        titulo: "Técnico em Comércio",
        status: "Em andamento",
        local: "ETEC",
        descricao: "Formação técnica em estratégias comerciais, gestão e análise de mercado, agregando visão de negócios ao meu perfil tecnológico."
    },
    {
        titulo: "Desenvolvimento web",
        status: "Em andamento",
        local: "Udemy",
        descricao: "Curso intensivo com foco em HTML, CSS e JavaScript, aprimorando habilidades para criar aplicações web responsivas e dinâmicas." 
    },
    {
        titulo: "UI Design",
        status: "Concluído",
        local: "Udemy",
        descricao: "Capacitação em princípios de UI Design, design responsivo, prototipação e boas práticas para criação de interfaces web e mobile."
    }
]




//Criar os cards de habilidades
function criarCardSkill(experiencia){
    return `
    <div class="d-flex card-skills">
      <div class="d-flex titulo">
        <h4>${experiencia.titulo}</h4>
        <div class="estado">${experiencia.status}</div>
      </div>
      <p class="local">${experiencia.local}</p>
      <p>${experiencia.descricao}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("experience-container");
    if (container) {
        container.innerHTML = experiencias.map(criarCardSkill).join("");

        // Agora os elementos existem no DOM, então aplicamos o ScrollReveal
        ScrollReveal().reveal('.card-skills', {
            origin: 'left',
            duration: 1000,
            distance: '50%',
            interval:250
        });
    } else {
        console.error("Elemento 'experience-container' não encontrado.");
    }
});




var options = {
    strings: ["Desenvolvedor Front-End", "Designer UI/UX", "Apaixonado por tecnologia", "Eterno aprendiz"],
    typeSpeed: 70,        // Velocidade de digitação 
    backSpeed: 40,        // Velocidade de "apagar" 
    backDelay: 1000,      // Tempo de espera antes de apagar
    startDelay: 550,      // Tempo de espera antes de começar a digitar
    loop: true            // Faz a animação se repetir
};

var typed = new Typed("#typed-output", options);
