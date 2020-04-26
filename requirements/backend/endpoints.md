## authors

- `GET /api/authors` - get all authors with pagination
- `GET /api/authors/:author_id` - get details of a single author defined on the `author_id` path parameter
- `POST /api/author/create` - create a new author
- `PATCH /api/author/:author_id` - edit an existing author

## books

- `GET /api/books` - get all books with pagination
- `GET /api/boooks/:book_id` - get details of a single book defined in the `book_id` path parameter
- `POST /api/book/create` - create a new book
- `POST /api/book/borrow/:book_id` - 
- `PATCH /api/author/:author_id` - edit an existing author
- `POST /api/books/borrow/approve/:borrow_id` - approve(deny/approve) a borrow request from a user - only admin allowed to do this

## book instance

- `POST /api/instance/create/:book_id` - create an instance of a book defined in the `book_id` path parameter
- `GET /api/instance/:book_id` - get all instances of a book specified in `book_id` path parameter

## users

- `POST /api/users/create` - create a non-admin user for the library
- `PATCH /api/user/edit` - edit certain details about the user, can only be done by the user themselves
- `GET /api/users` - Get all non-admin users, only admins can access this route
- `GET /api/user/login` - Login a user with email and password
- `GET /api/user/checkAuth` - Check login status of a user


## genres

- `GET /api/genres` - get all genres with pagination
- `POST /api/genre/create` - create a new genre
- `PATCH /api/genre/:genre_id` - edit an existing genre



