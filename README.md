# CoinsDev

**CoinsDev** é um projeto de interface dinâmica desenvolvido em **React.js**, que permite aos usuários explorar informações sobre diversas criptomoedas. O projeto utiliza **Axios** para fazer chamadas à API da CoinCap, apresentando propriedades como preço, valor de mercado, volume e mudança percentual em 24 horas. Os valores são exibidos em formatos amigáveis para o usuário.

## Funcionalidades

- **Busca Dinâmica de Moedas**: Utilize o campo de pesquisa para encontrar detalhes sobre criptomoedas específicas.
- **Listagem de Criptomoedas**: Exibe uma tabela com informações como:
  - Nome da moeda
  - Símbolo
  - Valor de mercado (formatado)
  - Preço (formatado)
  - Volume 24h (formatado)
  - Mudança percentual em 24 horas
- **Detalhes da Moeda**: Clique em uma moeda para visualizar informações detalhadas em uma página específica.
- **Paginação**: Carregue mais moedas dinamicamente ao clicar no botão "Carregar mais...".

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para construção de interfaces de usuário.
- **React Hooks**:
  - `useState`: Gerenciamento de estado local (por exemplo, moedas e input do usuário).
  - `useEffect`: Gerenciamento de efeitos colaterais (como chamadas de API).
  - `useParams`: Obtenção de parâmetros da URL para carregamento de dados específicos (detalhes da moeda).
- **Axios**: Biblioteca para requisições HTTP à API da CoinCap.
- **CSS Modules**: Estilização modular para componentes React.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:


### Principais Componentes

- **Home.tsx**:
  - Lista criptomoedas.
  - Permite buscar por uma moeda específica.
  - Utiliza a API CoinCap para buscar dados de moedas.
  - Formata valores de preços, mercado e volume em um formato amigável.

- **Detail.tsx**:
  - Exibe detalhes específicos de uma moeda selecionada.
  - Usa o parâmetro da URL (`useParams`) para buscar dados da moeda correspondente.
  - Inclui botão para voltar à página inicial.

- **Api.ts**:
  - Gerencia instâncias do Axios para chamadas à API CoinCap.
  - Funções reutilizáveis para busca de dados gerais e detalhes de moedas.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/coinsdev.git
   cd coinsdev
