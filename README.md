# Jewlery App

## Auth Module

### Routes

- /auth/register: post
- /auth/login: post

### Req Body Info

- /auth/register:

```json
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

```json
{
    email: string,
    password: string
}
```

---
