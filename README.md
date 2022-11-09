# TrabalhoPratico1-S206
Trabalho Pratico 1, da materia S206, sobre Teste de UI, utilizando Cypress

Site de testes: https://myanimelist.net/

## Testes realizados :

1: Realizando o registro de um usuario onde o campo de senha esta vazio, assim o botao de registra deve estar desativado.

2: Realizando o registro de um usuario onde o nome de usuario e conflitante com outro ja existente, gerando um erro.

3: Realiza o login onde o usuario e a senha nao existem.

4: Testa os botoes de "Forgot Username" e "Forgot Password".

5: Testa se as obras com genero Fantasia estao classificadas como Fantasia no site.

6: Testa a ferramenta de busca do site, com o intuito de se alcancar a mesma obra em 2 linguagens diferentes(Ingles e Japones).


## Execucao do Projeto:

1: Clonar o repositorio para sua maquina.

2: Instalar o Node.js
```
https://nodejs.org/en/
```

3: Realizar a instalacao do cypress dentro da pasta "projeto":
    ```
    npm install cypress
    ```

4: Para executar o projeto:
    ```
    Abrir cypress pela utilizando a linha comando: ./node_modules/.bin/cypress open

    Rodar as specs diretamente do terminal: ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
    ```

## Gerar o Relatorio de Testes:

1: Adicionar o mochawesome ao projeto:
    ```
    npm i --save-dev cypress-mochawesome-reporter
    ```

2: Executar o projeto:
    ```
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
    ```