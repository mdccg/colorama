# pwa-demo

## Sumário

- [pwa-demo](#pwa-demo)
  - [Sumário](#sumário)
  - [*To-do list*](#to-do-list)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## *To-do list*

- [ ] [`service-worker.ts:60`](./src/service-worker.ts?plain=1#L60) Modificar esta linha para que o cacheamento suporte outros formatos de arquivo
- [ ] [`service-worker.ts:67`](./src/service-worker.ts?plain=1#L67) Modificar esta linha adicionando a propriedade `maxAgeSeconds` para fazer com que a memória cache seja limpa após um dia e diminuir o valor de `maxEntries` (lembrar o porquê)

## Motivação

Este app é um exemplo genérico de uma aplicação React que serve como um repositório de demonstração para ilustrar estratégias eficazes de atualização e cache. O foco deste repositório reside na solução para o problema de manter o conteúdo atualizado e acessível, enquanto otimiza a experiência do usuário.

No contexto deste projeto, destacamos a estratégia "stale-while-revalidate" (stale enquanto revalida). Esta abordagem permite que o aplicativo apresente conteúdo armazenado em cache (ou seja, "stale") aos usuários, enquanto realiza uma solicitação para buscar e validar os dados mais recentes. Essa técnica é especialmente valiosa em situações em que a latência da rede pode impactar o desempenho, permitindo que os usuários acessem instantaneamente o conteúdo, mesmo quando os dados são atualizados em segundo plano.

Este foi o quarto repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação IV.

| [&larr; Repositório anterior](https://github.com/mdccg/ai-que-fome-showcase) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Ambiente de desenvolvimento | [create-react-app](https://create-react-app.dev/) |
| Biblioteca de interface de usuário | [React](https://pt-br.reactjs.org/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```