import type { PsychologyLandingContent } from "../types/psychology-landing.types";

const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_MESSAGE =
  "Olá, Maria Eduarda. Gostaria de agendar uma conversa para saber mais sobre a psicoterapia.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const landingContent: PsychologyLandingContent = {
  hero: {
    eyebrow: "Atendimento psicológico online",
    title: "Psicoterapia com escuta, presença e acolhimento.",
    description:
      "Um espaço seguro para falar, sentir e existir no seu tempo, com atendimento baseado na Psicanálise winnicottiana e cuidado construído no vínculo.",
    primaryCta: {
      label: "Agendar uma conversa",
      href: WHATSAPP_URL,
      ariaLabel: "Agendar uma conversa pelo WhatsApp com Maria Eduarda Vieira"
    },
    secondaryCta: {
      label: "Conhecer os atendimentos",
      href: "#atendimentos",
      ariaLabel: "Ir para a seção de atendimentos"
    },
    credentials: ["Maria Eduarda Vieira", "Psicóloga CRP 06/217178", "Escuta qualificada"]
  },
  about: {
    eyebrow: "Sobre a psicóloga",
    title: "Um encontro feito de escuta, presença e confiança.",
    description:
      "Maria Eduarda Vieira conduz atendimentos psicológicos online para pessoas que buscam um espaço de cuidado emocional com ética, continuidade e acolhimento.",
    name: "Maria Eduarda Vieira",
    role: "Psicóloga",
    crp: "CRP 06/217178",
    paragraphs: [
      "Meu trabalho acontece a partir da Psicanálise, com base na teoria winnicottiana. A terapia se constrói como um espaço onde aquilo que você traz, palavras, sentimentos, silêncios e descobertas, encontra lugar e cuidado.",
      "O processo terapêutico acontece no ritmo possível para cada pessoa. A continuidade, o vínculo e a confiança sustentam um ambiente suficientemente bom para estar, sentir e elaborar."
    ],
    highlights: [
      {
        title: "Abordagem",
        description: "Psicanálise com base na teoria winnicottiana."
      },
      {
        title: "Formato",
        description: "Atendimento online, semanal e com horário fixo combinado em conjunto."
      },
      {
        title: "Duração",
        description: "Sessões de 50 minutos, com um tempo reservado para o seu cuidado."
      }
    ]
  },
  painPoints: {
    eyebrow: "Quando buscar terapia",
    title: "Talvez algo esteja pedindo escuta.",
    description:
      "A psicoterapia pode ser um apoio em momentos de ansiedade, sobrecarga, insegurança, conflitos ou mudanças importantes. Não é preciso ter tudo nomeado para começar.",
    items: [
      {
        title: "Ansiedade e excesso de cobrança",
        description: "Quando a mente não desacelera e o corpo parece viver em alerta."
      },
      {
        title: "Dificuldade com emoções",
        description: "Quando sentir, falar ou entender o que acontece por dentro parece confuso."
      },
      {
        title: "Relações e autoestima",
        description: "Quando vínculos, limites e autoconfiança precisam de cuidado."
      },
      {
        title: "Fases de transição",
        description: "Quando mudanças, perdas ou escolhas importantes pedem sustentação."
      }
    ]
  },
  services: {
    eyebrow: "Atendimentos",
    title: "Cuidado psicológico para atravessar o que precisa de presença.",
    description:
      "Os atendimentos são pensados para acolher a singularidade de cada pessoa, sem promessas prontas ou pressa por respostas.",
    items: [
      {
        title: "Psicoterapia individual",
        description: "Um espaço contínuo de fala, escuta e elaboração para adultos."
      },
      {
        title: "Atendimento online",
        description: "Sessões realizadas em ambiente virtual, com privacidade e cuidado no enquadre."
      },
      {
        title: "Ansiedade e estresse",
        description: "Apoio para compreender sinais internos e construir recursos possíveis."
      },
      {
        title: "Autoconhecimento",
        description: "Um processo para reconhecer emoções, desejos, limites e modos de se relacionar."
      },
      {
        title: "Relacionamentos",
        description: "Escuta para conflitos, vínculos, autoestima e formas de estar com o outro."
      }
    ]
  },
  method: {
    eyebrow: "Como funciona",
    title: "O processo ganha forma no encontro e na continuidade.",
    description:
      "A terapia acontece semanalmente, em dia e horário fixos definidos em conjunto, com sessões de 50 minutos.",
    steps: [
      {
        title: "Primeiro contato",
        description: "Você agenda uma conversa inicial para entender se esse espaço faz sentido para o seu momento."
      },
      {
        title: "Escuta da demanda",
        description: "As primeiras sessões ajudam a compreender o que chega, com cuidado e sem exigência de respostas imediatas."
      },
      {
        title: "Acompanhamento semanal",
        description: "A continuidade sustenta o vínculo e cria chão para que o processo terapêutico aconteça."
      },
      {
        title: "No seu tempo",
        description: "O percurso respeita o ritmo possível de cada pessoa, acolhendo palavras, silêncios e descobertas."
      }
    ]
  },
  onlineCare: {
    eyebrow: "Atendimento online",
    title: "Um espaço de cuidado, mesmo à distância.",
    description:
      "O encontro online é pensado para se aproximar da experiência de consultório, preservando privacidade, presença e continuidade.",
    paragraphs: [
      "Para aproveitar melhor a sessão, escolha um lugar tranquilo, confortável e protegido, onde você possa falar sem interrupções.",
      "Sempre que possível, use fones de ouvido, evite notificações e deixe por perto o que ajude esse momento a ser mais acolhedor, como água, chá, lenços ou uma manta."
    ],
    checklist: [
      "Ambiente reservado e com privacidade",
      "Conexão estável e poucos estímulos externos",
      "Fones de ouvido quando possível",
      "Um tempo realmente dedicado ao seu cuidado"
    ]
  },
  benefits: {
    eyebrow: "Benefícios do processo",
    title: "Terapia como lugar para existir com mais verdade.",
    description:
      "O cuidado psicológico não oferece atalhos, mas pode abrir espaço para compreender melhor o que se vive e construir novas possibilidades.",
    items: [
      {
        title: "Compreender emoções",
        description: "Dar nome ao que acontece por dentro, respeitando o tempo de cada descoberta."
      },
      {
        title: "Fortalecer recursos",
        description: "Encontrar formas possíveis de lidar com desafios, limites e mudanças."
      },
      {
        title: "Cuidar dos vínculos",
        description: "Olhar para relações, expectativas, perdas e modos de se proteger."
      },
      {
        title: "Construir clareza",
        description: "Criar um espaço para pensar sobre si com menos julgamento e mais cuidado."
      }
    ]
  },
  seekingTherapy: {
    eyebrow: "Prova de cuidado",
    title: "O que as pessoas costumam buscar na terapia.",
    description:
      "Sem depoimentos inventados ou promessas de resultado. A escuta clínica parte do que cada pessoa traz e do que pode ser sustentado no encontro.",
    items: [
      {
        title: "Um lugar para falar sem precisar performar",
        description: "Acolher o que ainda não tem forma também faz parte do processo."
      },
      {
        title: "Mais presença diante do que dói",
        description: "Sustentar emoções difíceis com companhia profissional e ética."
      },
      {
        title: "Continuidade para se conhecer",
        description: "A terapia se constrói aos poucos, no vínculo e na confiança."
      }
    ]
  },
  agreements: {
    eyebrow: "Combinados importantes",
    title: "Contornos gentis para proteger o espaço da terapia.",
    description:
      "Os combinados ajudam a sustentar ritmo, segurança e continuidade para que o cuidado possa acontecer com profundidade.",
    items: [
      {
        title: "Pontualidade",
        description: "Em caso de atraso, a sessão acontece no tempo restante do horário reservado."
      },
      {
        title: "Aviso prévio",
        description: "Quando possível, faltas e remarcações devem ser avisadas com 24 horas de antecedência."
      },
      {
        title: "Continuidade",
        description: "O horário semanal é mantido ao longo do processo terapêutico."
      },
      {
        title: "Pagamento",
        description: "O pagamento é realizado antes da sessão, preservando a organização do enquadre."
      },
      {
        title: "Valores",
        description: "Valores combinados individualmente, considerando o momento e as possibilidades de cada paciente."
      },
      {
        title: "Reajustes",
        description: "Qualquer reajuste é comunicado previamente e combinado com cuidado."
      }
    ]
  },
  confidentiality: {
    eyebrow: "Sigilo e confiança",
    title: "O que é vivido em sessão permanece protegido.",
    description:
      "A confidencialidade é parte essencial do cuidado psicológico e sustenta um ambiente seguro para falar.",
    note:
      "Conforme o Código de Ética do Psicólogo, tudo o que é vivido e dito em sessão permanece em sigilo e confidencialidade, salvo situações em que haja risco de vida para você ou outra pessoa."
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes",
    description:
      "Algumas respostas para reduzir dúvidas antes do primeiro contato.",
    items: [
      {
        question: "Como funcionam as sessões?",
        answer:
          "As sessões acontecem semanalmente, em dia e horário fixos definidos em conjunto. Esse ritmo ajuda a sustentar a continuidade do processo terapêutico."
      },
      {
        question: "Quanto tempo dura cada sessão?",
        answer: "Cada sessão tem duração de 50 minutos."
      },
      {
        question: "O atendimento é online?",
        answer:
          "Sim. O atendimento online é conduzido como um espaço semelhante ao consultório, com presença, escuta e cuidado com a privacidade."
      },
      {
        question: "Preciso estar em algum lugar específico?",
        answer:
          "É importante escolher um local tranquilo, confortável, protegido e com privacidade. Quando possível, use fones de ouvido e evite distrações."
      },
      {
        question: "Como funcionam faltas e remarcações?",
        answer:
          "Quando não for possível comparecer, o ideal é avisar com pelo menos 24 horas de antecedência para que uma remarcação possa ser pensada em conjunto."
      },
      {
        question: "Como são definidos os valores?",
        answer:
          "Os valores são combinados individualmente, considerando o momento e as possibilidades de cada paciente. Também pode ser combinado um valor mensal referente a 4 sessões."
      },
      {
        question: "A terapia é sigilosa?",
        answer:
          "Sim. O sigilo é garantido pelo Código de Ética do Psicólogo, com exceção apenas para situações de risco de vida."
      }
    ]
  },
  finalCta: {
    eyebrow: "Comece no tempo possível",
    title: "Você não precisa atravessar tudo sozinho.",
    description:
      "Agende uma conversa para conhecer o atendimento e entender se este pode ser um espaço de cuidado para o seu momento.",
    supportingText: "Cuidar da sua saúde mental também é um ato de coragem.",
    cta: {
      label: "Agendar uma conversa",
      href: WHATSAPP_URL,
      ariaLabel: "Agendar uma conversa pelo WhatsApp"
    }
  }
};
