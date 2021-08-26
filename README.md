# Jewlery App

## Application

### Production Server Link

- baseURL: https://jewlery-restapi.herokuapp.com

---

## User Credentials

### Admin User Credentials

- email: admin@gmail.com
- password: password

### Simple User Credentials

- email: jazim@gmail.com
- password: password

---

## Auth Module

### Routes Info

- /auth/register: post
- /auth/login: post

### Req Body Info

- /auth/register:

```js
{
    firstName: string,
    lastName: string,
    mobileNo: number,
    address: string,
    email: string,
    password: string
}
```

- /auth/login:

```js
{
    email: string,
    password: string
}
```

---

## User Module

### Routes Info

- /user: get
- /user/my-profile: get (authenticated)
- /user/profile/:id: get

### Req Info

- /user/my-profile: for getting the profile for authenticated user. So you must have to pass token in order to access this route ...

- /user/profile/:id: for fetching the profile for single user by passing that user id from client ...

---

## Contact Module

### Routes Info

- /contact: post

### Req Body Info

- /contact:

```js
{
    firstName: string,
    lastName: string,
    message: string,
    email: string
}
```

---

## Wishlist Module

### Routes Info

- /wishlist: post (authenicated)
- /wishlist/:id: delete (authenicated)

### Req Body Info

- /wishlist:

```js
{
  product: string(db_id);
}
```

---

## Product Module

### Routes Info

- /product: get
- /product/featured: get
- /product/featured/last: get
- /product/:id: get
- /product: post
- /product/upload/:id: patch
- /product/:id: patch
- /product/:id: delete

### Req Body Info

- /product:

```js
{
    name: string,
    description: string,
    size: string,
    color: string,
    category: string,
    price: number,
    isFeatured: bool,
    isAvailable: bool
}
```

- /product/:id

```js
{
    name: string (optional),
    description: string (optional),
    size: string (optional),
    color: string (optional),
    category: string (optional),
    price: number (optional),
    isFeatured: bool (optional),
    isAvailable: bool (optional)
}
```

---

## Order Module

### Route Info

- /order: get
- /order/user: get (authenicated)
- /order: post

### Req Body Info

- /order

```js
{
    [
        quantity: number,
        price: number,
        product: string(db_id)
    ]
}
```
