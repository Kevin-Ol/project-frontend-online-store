# Projeto Frontend Online Store
![frontend_store](https://user-images.githubusercontent.com/82068881/128215284-392c8e91-bb01-441d-80e4-0a8b4eb26049.png)

***
Você pode acessar o site no ar [aqui](https://kevin-ol.github.io/project-frontend-online-store/).

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Foram utilizadas as tecnologias HTML, CSS, Javascript e a biblioteca React.JS.

O objetivo do projeto foi aprimorar softskills de trabalho em grupo, focando em colaboração, comunicação, e aplicação das metodologias ágeis Scrum e Kanban.

Foi criada uma página simulando uma loja virtual, onde podem ser feitas pesquisas de acordo com uma lista de categorias ou palavras chave. A lista de categorias 
bem como os produtos pesquisados são resultados de uma consulta à **API do Mercado Livre**. Ao pesquisar os produtos, são renderizados os resultados que podem ser
clicados, redirecionando o usuário para a página de detalhes daquele produto. Há também um botão para adicionar cada produto ao carrinho.

Na página de detalhes do produto, é possível adicionar uma avaliação sobre ele e também adicioná-lo ao carrinho. Ao clicar no ícone de carrinho, o usuário é 
redirecionado para a página contendo a descrição de todos produtos adicionados, contendo também opções para manipular suas quantidades. Por fim, ao finalizar 
a compra, existe uma página de checkout simulando um formulário de preenchimento de dados que, com o nome preenchido e confirmado, é renderizada uma mensagem 
de agradecimento pela compra.
***
Os requisitos que compõem projeto são:

:white_check_mark: Criar página de listagem de produtos que:
- Implemente o módulo de acesso à api do Mercado Livre
- Liste as categorias de produtos disponíveis via API na página principal;
- Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos;
- Selecione uma categoria e mostre somente os produtos daquela categoria;
- Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto;
- Adicione produtos a partir da tela de listagem de produtos;

:white_check_mark: Criar página de carrinho de compras que:
- Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade;

:white_check_mark: Criar página de detalhes do produto que:
- Avalie e comente acerca de um produto em sua tela de exibição detalhada;
- Adicione um produto ao carrinho a partir de sua tela de exibição detalhada;

:white_check_mark: Criar página de checkout que:
- Finalize a compra preenchendo os seus dados;

:white_check_mark: Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece;

:white_check_mark: Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque;

:white_check_mark: Mostre quais produtos tem o frete grátis;
