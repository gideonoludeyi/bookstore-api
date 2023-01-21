---
theme: seriph
layout: cover
---

# HTTP

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
theme: seriph
layout: cover
---

<div style="display: flex">
  <div style="display: inline-block">
    <p class="scheme">https://</p>
    <p class="scheme">scheme</p>
  </div>
  <div style="display: inline-block">
    <p class="domain">api.books.com</p>
    <p class="domain">domain</p>
  </div>
  <div style="display: inline-block">
    <p class="path">/books/trending</p>
    <p class="path">path</p>
  </div>
  <div style="display: inline-block">
    <p class="query-params">?max_books=5&sort=ascending</p>
    <p class="query-params">query parameters</p>
  </div>
</div>


<style>
.scheme {
  color: magenta;
  text-align: center;
  margin: 0;
}
.domain {
  color: orange;
  text-align: center;
  margin: 0;
}
.path {
  color: cyan;
  text-align: center;
  margin: 0;
}
.query-params {
  color: coral;
  text-align: center;
  margin: 0;
}
</style>

---
theme: seriph
---

# HTTP Request Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

<br />
<hr />
<br />

# HTTP Request Body

can be any textual data
- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---
theme: seriph
---

# Example

```http
# Get Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1
```

<br/>

```http
# Post Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
theme: seriph
---

# HTTP Response Status Code
https://http.cat/

- 200 - OK
- 201 - Created
- 404 - Not Found
- 500 - Internal Server Error


<br />
<hr />
<br />

# HTTP Response Body
can be any textual data 

- JSON
- XML

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
theme: seriph
---

# Get todo with id=18

```http
# HTTP Request
GET https://jsonplaceholder.typicode.com/todos/18 HTTP/1.1

# HTTP Response
HTTP/1.1 200 OK
Date: Fri, 20 Jan 2023 23:55:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
# ... (other headers) ...

{
  "userId": 1,
  "id": 18,
  "title": "dolorum est consequatur ea mollitia in culpa",
  "completed": false
}
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
theme: seriph
---

# Create new todo

```http
# HTTP Request
POST https://jsonplaceholder.typicode.com/todos HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false
}

# HTTP Response
HTTP/1.1 201 Created
Date: Fri, 20 Jan 2023 23:57:51 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 78
# ... (other headers) ...

{
  "userId": 1,
  "title": "lorem ipsum",
  "completed": false,
  "id": 201
}
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
