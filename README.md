# Spotify-API-GGI

# Database Structure

The database structure consists of three main collections: Users, Products, and Orders.

1. Users Collection:
   - User object:
   ```
   {
     id: integer,
     username: string,
     email: string,
     created_at: datetime(iso 8601),
     updated_at: datetime(iso 8601)
   }
   ```

2. Products Collection:
   - Product object:
   ```
   {
     id: integer,
     name: string,
     cost: float(2),
     available_quantity: integer,
     created_at: datetime(iso 8601),
     updated_at: datetime(iso 8601)
   }
   ```

3. Orders Collection:
   - Order object:
   ```
   {
     id: integer,
     user_id: <user_id>,
     total: float(2),
     products: [
       {
         product: <product_id>,
         quantity: integer
       },
       {
         product: <product_id>,
         quantity: integer
       },
       // more product entries if applicable
     ],
     created_at: datetime(iso 8601),
     updated_at: datetime(iso 8601)
   }
   ```

# API Structure

The API structure is divided into three main endpoints: Users, Products, and Orders. Each endpoint handles different CRUD operations for their respective collections.

1. Users Endpoint:
   - GET /users: Returns all users in the system.
   - GET /users/:id : Returns the specified user by ID.
   - GET /users/:id/orders : Returns all orders associated with the specified user.
   - POST /users: Creates a new user and returns the new object.
   - PATCH /users/:id : Updates fields on the specified user and returns the updated object.
   - DELETE /users/:id : Deletes the specified user.

2. Products Endpoint:
   - GET /products: Returns all products in the system.
   - GET /products/:id : Returns the specified product by ID.
   - GET /products/:id/orders: Returns all orders associated with the specified product.
   - POST /products: Creates a new product and returns the new object.
   - PATCH /products/:id : Updates fields on the specified product and returns the updated object.
   - DELETE /products/:id : Deletes the specified product.

3. Orders Endpoint:
   - GET /orders: Returns all orders in the system.
   - GET /orders/:id : Returns the specified order by ID.
   - GET /orders/:id/products: Returns all products associated with the specified order.
   - GET /orders/:id/user: Returns the user associated with the specified order.
   - POST /orders: Creates a new order and returns the new object.
   - PATCH /orders/:id : Updates fields on the specified order and returns the updated object.
   - DELETE /orders/:id : Deletes the specified order.

# How to Run in Local

To run the API locally, follow these steps:

1. Install Node.js and npm if you haven't already. You can download them from the official website (https://nodejs.org/).

2. Clone the repository and navigate to the project directory.

3. Install the project dependencies by running the following command in the terminal:
   ```
   npm install
   ```

4. Make sure you have MongoDB installed and running on your local machine. If not, install and start MongoDB.

5. Configure the MongoDB connection in the `app.js` file. Replace `'mongodb://127.0.0.1:27017/spotify-API-GGI'` with your MongoDB connection URL.

6. Run the API server with the following command:
   ```
   npm start
   ```

7. The API server should now be running locally at `http://localhost:3000`.

You can use tools like Postman or cURL to make requests to the API endpoints as described in the API structure section above.

## LIST API Request and Response
Certainly! Below is the rewritten List API request and response in the preferred format:

### Users

**User object**
```
{
  id: integer
  username: string
  email: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

**GET /users**
----
Returns all users in the system.

* **URL Params**
  None

* **Data Params**
  None

* **Headers**
  Content-Type: application/json

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    users: [
      {<user_object>},
      {<user_object>},
      {<user_object>}
    ]
  }
  ```

**GET /users/:id**
----
Returns the specified user.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <user_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "User doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /users/:id/orders**
----
Returns all Orders associated with the specified user.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    orders: [
      {<order_object>},
      {<order_object>},
      {<order_object>}
    ]
  }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "User doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**POST /users**
----
Creates a new User and returns the new object.

* **URL Params**
  None

* **Headers**
  Content-Type: application/json

* **Data Params**
  ```
  {
    username: string,
    email: string
  }
  ```

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <user_object> }
  ```

**PATCH /users/:id**
----
Updates fields on the specified user and returns the updated object.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  ```
  {
    username: string,
    email: string
  }
  ```

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <user_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "User doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**DELETE /users/:id**
----
Deletes the specified user.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 204

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "User doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

# Products

**Product object**
```
{
  id: integer
  name: string
  cost: float(2)
  available_quantity: integer
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

**GET /products**
----
Returns all products in the system.

* **URL Params**
  None

* **Data Params**
  None

* **Headers**
  Content-Type: application/json

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    products: [
      {<product_object>},
      {<product_object>},
      {<product_object>}
    ]
  }
  ```

**GET /products/:id**
----
Returns the specified product.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <product_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Product doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /products/:id/orders**
----
Returns all Orders associated with the specified product.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    orders: [
      {<order_object>},
      {<order_object>},
      {<order_object>}
    ]
  }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Product doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**POST /products**
----
Creates a new Product and returns the new object.

* **URL Params**
  None

* **Headers**
  Content-Type: application/json

* **Data Params**
  ```
  {
    name: string,
    cost: float(2),
    available_quantity: integer
  }
  ```

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <product_object> }
  ```

**PATCH /products/:id**
----
Updates fields on the specified product and returns the updated object.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  ```
  {
    name: string,
    cost: float(2),
    available_quantity: integer
  }
  ```

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <product_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Product doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**DELETE /products/:id**
----
Deletes the specified product.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 204

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Product doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

# Orders

**Order object**
```
{
  id: integer
  user_id: <user_id>
  total: float(2)
  products: [
    { 
      product: <product_id>,
      quantity: integer 
    },
    { 
      product: <product_id>,
      quantity: integer 
    },
    { 
      product: <product_id>,
      quantity: integer 
    }
  ]
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

**GET /orders**
----
Returns all orders in the system.

* **URL Params**
  None

* **Data Params**
  None

* **Headers**
  Content-Type: application/json

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    orders: [
      {<order_object>},
      {<order_object>},
      {<order_object>}
    ]
  }
  ```

**GET /orders/:id**
----
Returns the specified order.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <order_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Order doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /orders/:id/products**
----
Returns all products associated with the specified order.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**
  ```
  {
    products: [
      {<product_object>},
      {<product_object>},
      {<product_object>}
    ]
  }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Order doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /orders/:id/user**
----
Returns the user associated with the specified order.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <user_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Order doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**POST /orders**
----
Creates a new order and returns the new object.

* **URL Params**
  None

* **Headers**
  Content-Type: application/json

* **Data Params**
  ```
  {
    user_id: <user_id>,
    products: [
      {
        product: <product_id>,
        quantity: integer
      },
      {
        product: <product_id>,
        quantity: integer
      },
      ...
    ]
  }
  ```

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <order_object> }
  ```

**PATCH /orders/:id**
----
Updates fields on the specified order and returns the updated object.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  ```
  {
    products: [
      {
        product: <product_id>,
        quantity: integer
      },
      {
        product: <product_id>,
        quantity: integer
      },
      ...
    ]
  }
  ```

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 200
  * **Content:**  
  ```
  { <order_object> }
  ```

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Order doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

**DELETE /orders/:id**
----
Deletes the specified order.

* **URL Params**
  *Required:* `id=[integer]`

* **Data Params**
  None

* **Headers**
  Content-Type: application/json
  Authorization: Bearer `<OAuth Token>`

* **Success Response:**
  * **Code:** 204

* **Error Response:**
  * **Code:** 404
  * **Content:** `{ error : "Order doesn't exist" }`
  OR
  * **Code:** 401
  * **Content:** `{ error : "You are unauthorized to make this request." }`

Please note that the above information is a continuation of the original content you provided and follows the preferred format for documenting API requests and responses.



