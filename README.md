
  <pre>-------------- SIMPLE API OF STORE PRODUCTS ---------</pre>
  <p>IN THIS API USER CAN GET ALL PRODUCTS AND THEIR ALL FIELDS
  USER CAN GET SOME SELECTED FIELDS
  USER CAN SEARCH USING NAME OF PRODUCT AND COMPANY 
  USER CAN SORT PRODUCTS
  USER CAN LIMIT PRODUCTS
  </p>

<h1>REQUESTS</h1>
<p>get('api/v1/products');</p>


<h1>Search by name</h1>
<p>get('api/v1/products?name=(name here)')</p>


<h1>search by company</h1>
<p>get('api/v1/products?company=(comapny name here)')</p>


<h1>sort</h1>
<p>get('api/v1/products?sort=(name,price)')</p>
<p>add a - prefix for decending </p>


<h1>limit</h1>
<p>get('api/v1/products?limit=(limit here)')</p>


<h1>only selected fields</h1>
<p>get('api/v1/products?select=(fields here separated by comma)')</p>
<h1>Example</h1>
<code>
{
"_id":"63fe4fc543b8fd3fe12f13da"
"featured":"false"
"rating":4
"createdAt":"2023-02-28T19:01:59.291+00:00"
"name":"accent chair"
"price":25
"company":"marcos"
}

</code>

