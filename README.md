# Projeto de Extensão - Jogo Lúdico (Show do Milhão)

## 1. Estrutura do Projeto
Estruture o projeto da seguinte forma:

```bash
/quiz-game
│
├── /assets
│   ├── /images       (Imagens usadas no jogo, ex.: logotipos ou ilustrações)
│   ├── /styles       (Arquivos CSS para estilização)
│   └── /sounds       (Efeitos sonoros, se forem usados)
│
├── /scripts
│   ├── questions.js  (Armazena as perguntas e respostas)
│   ├── game.js       (Gerencia a lógica principal do jogo)
│   ├── helpers.js    (Funções auxiliares, como habilidades ou validações)
│   └── ui.js         (Manipulação do DOM, exibição de perguntas e respostas)
│
├── index.html        (Página principal do jogo)
└── README.md         (Documentação do projeto)
```

## 2. Funcionalidades

### 2.1. Fluxo Principal do Jogo
- Carregar e exibir uma pergunta com 4 alternativas.
- Permitir ao jogador selecionar uma alternativa e verificar se está correta.
- Avançar para a próxima pergunta até o fim do quiz.
- Exibir o resultado final com o número de acertos e desbloqueio de habilidades.

### 2.2. Habilidades do Jogador
Implemente as seguintes habilidades:

- Eliminar 2 Alternativas: Desabilita/oculta duas respostas incorretas.
- Passar a Questão: Permite pular uma pergunta (sem contar erro).
- Tempo Extra (opcional): Adiciona mais tempo para responder.
- Cada habilidade pode ser utilizada uma única vez por jogo.

### 2.3. Interface do Usuário
- Barra de progresso indicando a pergunta atual (ex.: "Pergunta 3 de 15").
- Botões para cada alternativa de resposta.
- Exibição clara do número de acertos ao final do jogo.
- Design responsivo para dispositivos móveis e desktop.

## 3. Lógica do Jogo
### 3.1. Estrutura das Perguntas
As perguntas serão armazenadas em um arquivo questions.js:

```js
const questions = [
  {
    question: "O que é um cronograma no planejamento de projetos?",
    options: [
      "Lista de tarefas sem prazo definido",
      "Organização de prazos e atividades",
      "Documento de requisitos",
      "Resumo do orçamento"
    ],
    correctAnswer: 1, // Índice da resposta correta
  },
  {
    question: "O que significa escopo no planejamento?",
    options: [
      "Descrição do projeto e seus limites",
      "Lista de tecnologias utilizadas",
      "Plano de gestão de riscos",
      "Documentação financeira"
    ],
    correctAnswer: 0,
  },
];
```

### 3.2. Ciclo de Perguntas
Em game.js, implemente o ciclo básico:

Carregar Pergunta Atual:
- Mostra a pergunta e suas alternativas.

Verificar Resposta:
- Confirma se a alternativa selecionada está correta.

Atualizar Pontuação:
- Incrementa o contador de acertos e verifica desbloqueio de habilidades.

Avançar:
- Move para a próxima pergunta ou exibe o resultado final.

### 3.3. Habilidades
Cada habilidade será uma função em helpers.js:

Eliminar 2 Alternativas:

```javascript
function removeTwoOptions(question) {
  const options = [...question.options];
  const incorrectIndexes = options
    .map((_, index) => index)
    .filter(index => index !== question.correctAnswer);
  const removed = incorrectIndexes.slice(0, 2);
  return options.map((option, index) =>
    removed.includes(index) ? null : option
  );
}
```

Passar a Questão:

```javascript
function skipQuestion(currentIndex, questions) {
  return currentIndex + 1 < questions.length ? currentIndex + 1 : -1;
}
```

## 4. Interface com o Usuário
Implemente a interface e lógica de interação em ui.js:

Exibir Pergunta:
```javascript
function renderQuestion(question, questionIndex, totalQuestions) {
  document.querySelector("#question-text").textContent = question.question;
  document.querySelector("#progress").textContent = 
    `Pergunta ${questionIndex + 1} de ${totalQuestions}`;
  
  const optionsContainer = document.querySelector("#options");
  optionsContainer.innerHTML = ""; // Limpa as alternativas
  question.options.forEach((option, index) => {
    if (option !== null) { // Exibe apenas opções não removidas
      const button = document.createElement("button");
      button.textContent = option;
      button.dataset.index = index;
      button.onclick = () => checkAnswer(index, question.correctAnswer);
      optionsContainer.appendChild(button);
    }
  });
}
```

Mostrar Resultado Final:
```javascript
function renderResult(score, totalQuestions) {
  document.querySelector("#game-container").innerHTML = `
    <h2>Resultado Final</h2>
    <p>Você acertou ${score} de ${totalQuestions} perguntas!</p>
  `;
}
```

## 5. Exemplo do HTML
Aqui está um esqueleto básico do arquivo index.html:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Interativo</title>
  <link rel="stylesheet" href="assets/styles/style.css">
</head>
<body>
  <div id="game-container">
    <h1>Quiz de Engenharia de Software</h1>
    <p id="progress"></p>
    <div id="question-container">
      <p id="question-text"></p>
      <div id="options"></div>
    </div>
    <button id="next-btn" hidden>Próxima</button>
  </div>
  <script src="scripts/questions.js"></script>
  <script src="scripts/game.js"></script>
  <script src="scripts/ui.js"></script>
</body>
</html>
```

## 6. Estilização
Use um design simples e responsivo, com foco em boa legibilidade. Utilize ferramentas como Flexbox para centralizar conteúdo e Media Queries para responsividade.

## 6.1 Cores
Segue abaixo cores que deverão ser utilizadas no projeto:

```bash
  cor-principal: #0c29a9;
  cor-secundaria: #f1e05a;
  cor-branca: #ffffff;
  cor-escura: #363636;
```

## 7. Tarefas de Desenvolvimento
Semana 1-2:
- Estruturar o projeto (html e css).
- Implementar o fluxo básico do jogo (exibição de perguntas e respostas).

Semana 3-4:
- Adicionar habilidades (eliminar alternativas, pular questão).
- Melhorar a interface do usuário.

Semana 5-6:
- Testar o jogo e ajustar detalhes.
- Implementar estilos e finalizar a apresentação.