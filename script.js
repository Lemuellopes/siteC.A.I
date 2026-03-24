// Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Form submit
  function handleSubmit() {
    const inputs = document.querySelectorAll('.enroll-form-wrap input, .enroll-form-wrap select');
    const nomeResponsavel = inputs[0].value;
    const whatsapp = inputs[1].value;
    const nomeCrianca = inputs[2].value;
    const idadeCrianca = inputs[3].value;
    const planodeInteresse = inputs[4].value;
    
    if (!nomeResponsavel || !whatsapp || !nomeCrianca || !idadeCrianca || !planodeInteresse) {
      alert('Por favor, preencha todos os campos do formulário!');
      return;
    }
    
    const mensagem = `Olá! Tudo bem? 

  Gostaria de solicitar a matrícula do meu filho(a) no C.A.I - Centro Aquático Infantil.

*DADOS DO RESPONSÁVEL*
Nome: ${nomeResponsavel}
WhatsApp: ${whatsapp}

*DADOS DA CRIANÇA*
Nome: ${nomeCrianca}
Idade: ${idadeCrianca}

*PLANO DE INTERESSE*
${planodeInteresse}

Gostaria de saber se ainda há vagas disponíveis para essa faixa etária e quais horários estão abertos no momento.

Caso haja disponibilidade, já tenho interesse em dar continuidade na matrícula 👍

Fico no aguardo, obrigado(a)!`;
    
    const urlMsg = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5581989803448?text=${urlMsg}`, '_blank');
  }
