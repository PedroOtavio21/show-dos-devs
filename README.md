# Projeto de Extensão - Jogo Lúdico (Show do Milhão)

### Descrição do Jogo

Este projeto consiste em um quiz interativo voltado para o ensino de conceitos de Engenharia de Software. O jogo tem uma abordagem lúdica e dinâmica, permitindo que os jogadores testem seus conhecimentos enquanto se divertem. O jogador deve responder corretamente às perguntas para avançar e pode utilizar habilidades especiais para auxiliá-lo durante a partida.

### Estrutura do Projeto

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

### Funcionalidades / TO-DO ☑️
**Principais atividades:**
- [x]. Estrutura geral de código html
- [x]. Adicionar classes e id´s em html
- [x]. Estilizar o css conforme o necessário
- [x]. Aplicar a lógica principal do jogo
- [x]. Adicionar habilidades do jogador (Passar, eliminar 2 e dica da plateia)
- [ ]. Enviar o diretório para a hospedagem gratuita 

**Extras:**
- [ ]. Verificar a responsividade completa
- [ ]. Verificar lógica de habilidades (1 por rodada)
- [ ]. Implementar uma maneira de salvar o progresso do jogo
- [ ]. Adicionar sons e vídeo no jogo

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