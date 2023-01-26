---
theme: seriph
---

# RESTful API

### Resource-Oriented
###### Use nouns for paths
```http
GET https://api.books.com/getBooks HTTP/1.1 # Bad ❌
GET https://api.books.com/books HTTP/1.1 # Good ✅

POST https://api.books.com/rentBook?bookId=1 HTTP/1.1 # Bad ❌
POST https://api.books.com/rentals HTTP/1.1 # Good ✅
```

<br />
<br />

### CRUD Operations
- Create (POST)
- Read (GET)
- Update (PATCH, PUT)
- Delete (DELETE)

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

<!--
Resource-Oriented
- all communication between client and server is with respect to resources
- use nouns instead of verbs because we're referencing resources
  - verbs imply invoking some action (HTTP methods provide this for us)

CRUD Operations
- Create (POST)
- Read (GET)
- Update (PATCH, PUT)
- Delete (DELETE)
-->
