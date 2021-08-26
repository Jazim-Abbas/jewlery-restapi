# Jewlery App

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

- /user/my-profile: get (authenticated)
- /user/profile/:id: get

### Req Info

- /user/my-profile: for getting the profile for authenticated user. So you must have to pass token in order to access this route ...

- /user/profile/:id: for fetching the profile for single user by passing that user id from client ...
