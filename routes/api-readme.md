# Restaurant RESTful API
This document provides guidelines and exmaples for FoodPickupOrdering Web APIs which allows the user to manager their restaurant's App.  

The API aims to support a RESTful JSON format available at localhost:8080/api

## API Routes
---

/customers  
/menu_items  
/tickets  
/locations  
/login
 

<br>

## Endpoints
---

<br>

### Login
---
`POST /login`  
handles a request for customer to log into app  

<br>

### Customer's Information
---
`GET /customers`  
returns an object of all customers with their information  

`POST /customers`  
handles a request to add an individual customer to db  

`GET /customers/:id`  
returns a specific customer given their customer id  

`PUT /customers/:id`  
handles a request to update individual customer in db  

<br>

### Menu
---
`GET /menu_items`  
returns an object with nested objects of available food  

<br>

### Food Tickets
---
`GET /tickets`  
returns a full list of tickets  

`POST /tickets`  
handles a request to add new ticket  

`GET /tickets/:id`  
returns a specific ticket  

`PUT /tickets/:id`  
handles a request to update individual ticket in db  

<br>

### Store Locations
---
`GET /locations`  
returns a list of all restaurants  

`POST /locations`  
handles a request to create a new restaurant  

`GET /locations/:id`  
returns a specific restaurant's information  

`PUT /locations/:id`  
handles a request to update an individual restaurant's information in  server's db
