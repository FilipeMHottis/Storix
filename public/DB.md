# Tables:

### 1. Table User:

| Field    | Type    | Description                    |
|----------|---------|--------------------------------|
| id       | INT     | Unique identifier for the user |
| username | VARCHAR | User's username                |
| email    | VARCHAR | User's email address           |
| password | VARCHAR | User's password                |

### 2. Table Product:

| Field            | Type       | Description                                      |
|------------------|------------|--------------------------------------------------|
| id               | INT        | Unique identifier for the product                  |
| name             | VARCHAR    | Product's name                                    |
| minQuantity      | INT        | Minimum quantity allowed in stock                  |
| currentQuantity  | INT        | Current quantity in stock                          |
| value            | DECIMAL    | Product's value                                   |

### 3. Table Tags:

| Field   | Type     | Description               |
|---------|----------|---------------------------|
| id      | INT      | Unique identifier for the tag|
| tag     | VARCHAR  | Tag name                  |

### 4. Table Barcode:

| Field          | Type      | Description                            |
|----------------|-----------|----------------------------------------|
| id             | INT       | Unique identifier for the barcode       |
| barcode        | VARCHAR   | Barcode number                         |
| productId      | INT       | Foreign key referencing Table Product  |

### 5. Table Product_Tags (Intermediate Table):

| Field       | Type  | Description                             |
|-------------|-------|-----------------------------------------|
| productId   | INT   | Foreign key from Table Product           |
| tagId       | INT   | Foreign key from Table Tags              |

### 6. Table Product_Barcode (Intermediate Table):

| Field            | Type  | Description                       |
|------------------|-------|-----------------------------------|
| productId        | INT   | Foreign key from Table Product     |
| barcodeId        | INT   | Foreign key from Table Barcode     |

### 7. Table Sales History:

| Field          | Type      | Description                           |
|----------------|-----------|---------------------------------------|
| id             | INT       | Unique identifier for the sale         |
| saleDate       | TIMESTAMP | Date and time of the sale              |

### 8. Table Sale_Details:

| Field          | Type      | Description                              |
|----------------|-----------|------------------------------------------|
| id             | INT       | Unique identifier for the sale detail     |
| saleId         | INT       | Foreign key referencing Table Sales History |
| productId      | INT       | Foreign key referencing Table Product    |
| quantity       | INT       | Quantity of product sold                 |
| totalPrice     | DECIMAL   | Total price of the product sold          |