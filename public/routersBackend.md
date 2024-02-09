# Routers Backend

## Rota: /login [POST]

### Descrição
Autentica um usuário e retorna um token de acesso.

### Parâmetros de Entrada
- **username**: String (Nome de usuário)
- **password**: String (Senha do usuário)

### Retorno
- **token**: String (Token de acesso)

---

## Rota: /produtos [GET]

### Descrição
Retorna a lista de todos os produtos.

### Retorno
- Array de objetos de produto, cada um contendo:
  - **id**: UUID
  - **nome**: String (Nome do produto)
  - **preco**: Float (Preço do produto)
  - **quantidade**: Inteiro (Quantidade disponível)

---

## Rota: /pesquisa [GET]

### Descrição
Pesquisa produtos por nome, tag ou código de barras.

### Parâmetros de Entrada
- **query**: String (Termo de pesquisa)

### Retorno
- Array de objetos de produto (mesmo formato da rota /produtos)

---

## Rota: /verificacao [POST]

### Descrição
Verifica disponibilidade e preço de produtos.

### Parâmetros de Entrada
- Array de objetos de produto, cada um contendo:
  - **id**: UUID
  - **quantidade**: Inteiro

### Retorno
- Array de objetos de produto, cada um contendo:
  - **id**: UUID
  - **nome**: String
  - **preco**: Float
  - **quantidade_disponivel**: Inteiro

---

## Rota: /venda [POST]

### Descrição
Realiza uma venda, atualizando o estoque.

### Parâmetros de Entrada
- Array de objetos de produto, cada um contendo:
  - **id**: UUID
  - **quantidade**: Inteiro

### Retorno
- Mensagem de confirmação da venda.

---

## Rota: /adicionar-estoque/:produtoId [POST]

### Descrição
Adiciona produtos ao estoque.

### Parâmetros de URL
- **produtoId**: UUID

### Parâmetros de Entrada
- **quantidade**: Inteiro (Quantidade a ser adicionada)

### Retorno
- Mensagem de confirmação.

---

## Rota: /adicionar-produto [POST]

### Descrição
Adiciona um novo produto.

### Parâmetros de Entrada (Opcionais)
- **nome**: String
- **quantidade_minima**: Inteiro
- **imagem**: String (URL da imagem)
- **barcode**: String
- **tag**: String
- **preco**: Float

### Retorno
- Objeto de produto recém-adicionado.

