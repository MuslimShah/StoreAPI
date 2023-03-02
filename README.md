
  -------------- SIMPLE API OF STORE PRODUCTS ---------
  IN THIS API USER CAN GET ALL PRODUCTS AND THEIR ALL FIELDS
  USER CAN GET SOME SELECTED FIELDS
  USER CAN SEARCH USING NAME OF PRODUCT AND COMPANY 
  USER CAN SORT PRODUCTS
  USER CAN LIMIT PRODUCTS
  

#REQUESTS
get('api/v1/products');

#Search by name
get('api/v1/products?name=(name here)')

#search by company
get('api/v1/products?company=(comapny name here)')

#sort
get('api/v1/products?sort=(name,price)')
add a - prefix for decending 

#limit
get('api/v1/products?limit=(limit here)')

#only selected fields
get('api/v1/products?select=(fields here separated by comma)')
