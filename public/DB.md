# Tables:

### 01. Table User:

| Field    | Type    | Description                    |
|----------|---------|--------------------------------|
| id       | INT     | Unique identifier for the user |
| username | VARCHAR | User's username                |
| email    | VARCHAR | User's email address           |
| password | VARCHAR | User's password                |

### 02. Table Product:

| Field            | Type       | Description                                      |
|------------------|------------|--------------------------------------------------|
| id               | INT        | Unique identifier for the product                  |
| name             | VARCHAR    | Product's name                                    |
| minQuantity      | INT        | Minimum quantity allowed in stock                  |
| currentQuantity  | INT        | Current quantity in stock                          |
| value            | DECIMAL    | Product's value                                   |

### 03. Table Tags:

| Field   | Type     | Description               |
|---------|----------|---------------------------|
| id      | INT      | Unique identifier for the tag|
| tag     | VARCHAR  | Tag name                  |

### 04. Table Barcode:

| Field          | Type      | Description                            |
|----------------|-----------|----------------------------------------|
| id             | INT       | Unique identifier for the barcode       |
| barcode        | VARCHAR   | Barcode number                         |
| productId      | INT       | Foreign key referencing Table Product  |

### 05. Table Product_Tags (Intermediate Table):

| Field       | Type  | Description                             |
|-------------|-------|-----------------------------------------|
| productId   | INT   | Foreign key from Table Product           |
| tagId       | INT   | Foreign key from Table Tags              |

### 06. Table Product_Barcode (Intermediate Table):

| Field            | Type  | Description                       |
|------------------|-------|-----------------------------------|
| productId        | INT   | Foreign key from Table Product     |
| barcodeId        | INT   | Foreign key from Table Barcode     |

### 07. Table Sales History:

| Field          | Type      | Description                           |
|----------------|-----------|---------------------------------------|
| id             | INT       | Unique identifier for the sale         |
| saleDate       | TIMESTAMP | Date and time of the sale              |

### 08. Table Sale_Details:

| Field          | Type      | Description                              |
|----------------|-----------|------------------------------------------|
| id             | INT       | Unique identifier for the sale detail     |
| saleId         | INT       | Foreign key referencing Table Sales History |
| productId      | INT       | Foreign key referencing Table Product    |
| quantity       | INT       | Quantity of product sold                 |
| totalPrice     | DECIMAL   | Total price of the product sold          |

### 09. Tabela Tags (para armazenar as tags):

| Field   | Type     | Description               |
|---------|----------|---------------------------|
| tag_id  | INT      | Unique identifier for the tag|
| tag_name| VARCHAR  | Tag name                  |

### 10. Tabela Product_Tags (para relacionar produtos com tags):

| Field       | Type  | Description                             |
|-------------|-------|-----------------------------------------|
| product_id  | INT   | Foreign key referencing Table Product   |
| tag_id      | INT   | Foreign key referencing Table Tags      |

### 11. Tabela Discount_Rules (regras de descontos disponíveis):

| Field               | Type     | Description                             |
|---------------------|----------|-----------------------------------------|
| rule_id             | INT      | Unique identifier for the discount rule |
| rule_description    | VARCHAR  | Description of the discount rule        |
| rule_type           | VARCHAR  | Type of discount (percentage, value, quantity) |
| rule_value          | DECIMAL  | Value of the discount                    |
| min_quantity        | INT      | Minimum quantity of products for the discount |

### 12. Tabela Discount_Usage (utilização de desconto por compra):

| Field               | Type     | Description                                |
|---------------------|----------|--------------------------------------------|
| usage_id            | INT      | Unique identifier for discount usage        |
| rule_id             | INT      | Foreign key referencing Table Discount_Rules |
| purchase_id         | INT      | Purchase identifier                         |