# Projeto de Extensão - Jogo Lúdico (Show do Milhão)

### Descrição do Jogo

Este projeto consiste em um **quiz interativo** voltado para o ensino de conceitos de **Planejamento de Projetos de Software**, sendo o último trabalho da disciplina de extensão da Universidade Estadual do Ceará (UECE).

A temática do jogo foi escolhida para auxiliar os jogadores a compreenderem aspectos fundamentais do planejamento na Engenharia de Software, como gestão de requisitos, cronogramas, riscos e metodologias ágeis. A abordagem lúdica facilita a absorção desses conceitos ao transformar o aprendizado em uma experiência interativa e divertida.

O jogo é composto por três páginas principais:
- Página Inicial: Contém dois botões que permitem iniciar o jogo ou acessar a página de ajuda.
- Página de Ajuda: Explica as regras principais, como avançar no jogo e utilizar habilidades extras.
- Página do Jogo: Contém um container onde o jogo é jogado, apresentando as questões e as opções de resposta.

### Motivação tecnológica
A escolha das tecnologias para este projeto seguiu princípios de **simplicidade e acessibilidade** para toda a equipe. Como o grupo possui pouca experiência em projetos front-end, optamos por um projeto Vanilla (HTML, CSS e JavaScript puro), garantindo maior compreensão e facilitação no desenvolvimento colaborativo.

Além disso, decidimos não utilizar um banco de dados para armazenar as perguntas, pois isso simplifica a implementação e elimina a necessidade de servidores, permitindo que o jogo seja facilmente hospedado e acessado.

### Equipe elaboradora do projeto
- Pedro Otávio de Sousa Bezerra
- James Taylor Pires Bezerra
- Pedro Henrique Rocha Dos Santos Nonato
- Matheus Alencar Castelo Branco
- Oscar Vinicius Da Silva Rodrigues

### Estrutura do Projeto

Segue abaixo uma estrutura prévia do que seria a organização de pastas ao final do projeto
```
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

### Funcionalidades do Game
**Funcionalidades gerais:**
- [x]. Estrutura geral de código html
- [x]. Adicionar classes e id´s em html
- [x]. Estilizar o css conforme o necessário
- [x]. Aplicar a lógica principal do jogo
- [x]. Adicionar habilidades do jogador (Passar, eliminar 2 e dica da plateia)
- [x]. Enviar o diretório para a hospedagem gratuita 

**Funcionalidades a serem adicionadas:**
- [x]. Alterar texto explicativo em tela de ajuda
- [ ]. Alterar mensagem de exibição ao final do jogo
- [ ]. Verificar a responsividade completa
- [ ]. Deixar código organizado e documentado
- [x]. Adicionar uma sequencia aleatória no banco de questões
- [x]. Verificar lógica de habilidades (1 por rodada)
- [ ]. Implementar uma maneira de salvar o progresso do jogo
- [ ]. Adicionar sistema de pontuação no jogo (ex.: R$1000, R$3000, etc)
- [x]. Adicionar sons e imagem de fundo ao jogo
- [x]. Corrigir iteração de sons
- [ ]. Elaborar o documento de avaliação do jogo

### Como Colaborar

Para contribuir com o projeto, siga as boas práticas abaixo:

1. Faça um Fork do Repositório:
 - Acesse o repositório principal e crie um fork para sua conta.

2. Clone o Repositório para Seu Computador:
```
  git clone https://github.com/seu-usuario/quiz-game.git
```

3. Crie uma Nova Branch para sua Feature:
```
  git checkout -b minha-nova-feature
```

4. Implemente as Modificações e Faça um Commit:
```
  git add .
  git commit -m "Adiciona nova funcionalidade X"
```
5. Envie para o Repositório Remoto:
```
  git push origin minha-nova-feature
```

6. Crie um Pull Request:
- Acesse o repositório no GitHub e abra um PR com suas alterações.
- Aguarde a revisão e aprovação da equipe.

Seja bem-vindo para contribuir com melhorias no código, otimizações ou novas funcionalidades! 🚀