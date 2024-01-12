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
| price            | DECIMAL    | Product's value                                   |
| image            | VARCHAR    | Product's Image                                   |

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
| price          | DECIMAL   | Total price of the product sold          |
| discount          | DECIMAL   | Total discount of the product sold          |

### 09. Tabela Discount_Rules (regras de descontos disponíveis):

| Field               | Type     | Description                             |
|---------------------|----------|-----------------------------------------|
| id                | INT      | Unique identifier for the discount rule |
| description       | VARCHAR  | Description of the discount rule        |
| code      | VARCHAR      | Code for using                          |
| type              | VARCHAR  | Type of discount (percentage, value, quantity) |
| value             | DECIMAL  | Value of the discount                    |
| min_quantity      | INT      | Minimum quantity of products for the discount |
