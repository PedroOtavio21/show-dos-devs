// Questões para testes
const questions = [
    {
      question: "O que é um cronograma no planejamento de projetos?",
      options: [
        { text: "Lista de tarefas sem prazo definido", correct: false},
        { text: "Organização de prazos e atividades", correct: true},
        { text: "Documento de requisitos", correct: false},
        { text: "Resumo do orçamento", correct: false}
      ]
    },
    {
      question: "O que significa escopo no planejamento?",
      options: [
        { text: "Descrição do projeto e seus limites", correct: true},
        { text: "Lista de tecnologias utilizadas", correct: false},
        { text: "Plano de gestão de riscos", correct: false},
        { text: "Documentação financeira", correct: false}
      ]
    },
    {
      question: "Qual é a etapa inicial no planejamento de um projeto de software?",
      options: [
        { text: "Escrever o código do projeto diretamente.", correct: false },
        { text: "Realizar o levantamento de requisitos.", correct: true },
        { text: "Comprar os equipamentos necessários.", correct: false },
        { text: "Escolher o framework mais popular.", correct: false }
      ]
    },
    {
      question: "O que caracteriza um MVP (Produto Mínimo Viável) em um projeto de software?",
      options: [
        { text: "O produto final pronto para ser vendido no mercado.", correct: false },
        { text: "Um protótipo completo com todas as funcionalidades do projeto.", correct: false },
        { text: "Uma versão inicial com funcionalidades essenciais para validação.", correct: true },
        { text: "Uma etapa opcional que só é feita em projetos grandes.", correct: false }
      ]
    },
    {
      question: "Qual documento é usado para descrever as funcionalidades e requisitos de um sistema?",
      options: [
        { text: "Manual do usuário final.", correct: false },
        { text: "Documento de especificação de requisitos de software (SRS).", correct: true },
        { text: "Código-fonte do software.", correct: false },
        { text: "Plano de manutenção do software.", correct: false }
      ]
    },
    {
      question: "Qual ferramenta é amplamente usada para acompanhar o progresso das tarefas em um projeto de software?",
      options: [
        { text: "Trello ou Jira.", correct: true },
        { text: "Microsoft Word.", correct: false },
        { text: "Photoshop.", correct: false },
        { text: "Calculadora.", correct: false }
      ]
    },
    {
      question: "Qual é o principal propósito de uma Estrutura Analítica do Projeto (EAP) no planejamento de software?",
      options: [
        { text: "Garantir a entrega do projeto dentro do prazo, mas sem detalhar o escopo.", correct: false },
        { text: "Dividir o trabalho do projeto em partes gerenciáveis e organizadas.", correct: true },
        { text: "Criar um cronograma detalhado de atividades com base no orçamento.", correct: false },
        { text: "Alocar recursos humanos para todas as etapas do projeto.", correct: false }
      ]
    },
    {
      question: "Durante a criação de um cronograma de projeto de software, qual ferramenta é comumente usada para visualizar dependências entre tarefas?",
      options: [
        { text: "Gráfico de Gantt", correct: true },
        { text: "Diagrama de classes", correct: false },
        { text: "Wireframes", correct: false },
        { text: "Histograma de frequência", correct: false }
      ]
    },
    {
      question: "No planejamento de um projeto ágil, o que deve ser priorizado durante o planejamento do backlog?",
      options: [
        { text: "Tarefas com maior complexidade técnica.", correct: false },
        { text: "Funcionalidades que agregam maior valor ao cliente.", correct: true },
        { text: "Atividades que ocupem mais membros da equipe ao mesmo tempo.", correct: false },
        { text: "Itens com menor dependência de outras tarefas.", correct: false }
      ]
    },
    {
      question: "Qual é o principal risco ao negligenciar a análise de requisitos durante o planejamento de um projeto de software?",
      options: [
        { text: "Atrasos nos testes automatizados.", correct: false },
        { text: "A falta de documentação final.", correct: false },
        { text: "O desenvolvimento de um produto que não atende às necessidades do cliente.", correct: true },
        { text: "Um aumento no número de reuniões diárias da equipe.", correct: false }
      ]
    },
    {
      question: "Qual prática é mais eficiente para evitar mudanças de escopo inesperadas durante um projeto de software?",
      options: [
        { text: "Aumentar o tempo de desenvolvimento para acomodar mudanças.", correct: false },
        { text: "Envolver stakeholders apenas nas revisões finais.", correct: false },
        { text: "Definir claramente o escopo e formalizar alterações com um controle rigoroso.", correct: true },
        { text: "Evitar a criação de protótipos ou validações iniciais.", correct: false }
      ]
    }
];

export default questions