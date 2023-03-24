# backend of a store

## controllers - controls.js

This is a set of functions that interact with a MongoDB server to retrieve and return data about products.

The productCollection is imported from the ../model/UserModel module, which defines the schema for the products in the database.

The getProducts function is an asynchronous function that takes req and res objects as parameters. It extracts three query parameters from the req object: featured, name, and company. It then constructs a queryObject based on which parameters are present. If featured is present, the function sets queryObject.featured to true if the value of featured is "true" (a string), and false otherwise. If name or company is present, the function sets queryObject.name or queryObject.company to a regular expression that matches the corresponding value, with the $options parameter set to "i" to perform a case-insensitive search. Finally, the function queries the productCollection using the constructed queryObject, and returns the resulting products in the response.

The getProductById function is an asynchronous function that takes req and res objects as parameters. It extracts the id parameter from the req object, and queries the productCollection using the findById method with the extracted id. If a document is found, the function returns the document in the response. If no document is found, the function throws an error, which is caught and handled by the catch block, which returns a 404 status code and an error message.

These functions can be used to implement endpoints for retrieving products from a MongoDB database based on various criteria. The getProducts function can be used to retrieve products based on whether they are featured, their name, or their company, while the getProductById function can be used to retrieve a single product by its ID.