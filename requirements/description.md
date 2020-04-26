## General Idea

The project is to build a library management system using Postgres, React and Node.

## Basic Workflow

- Users can view the library, browse books and authors without needing to be authenticated
- Logged in users can add books to their favorites
- Users can borrow books, at which point they need to sign in to the system and make a request to borrow a book (a book instance)
- If a book instance of that book is available, the request is logged.
- Librarians can login and view the requests to borrow books.
- They can view a user and all their details and choose either to approve or disaprove the request
- A user is notified by mail whether their request has been approved or not.
- Librarians can also return borrowed books
- Librarians can create books, book instances, authors and genres
- Users can edit their profiles, add pictures, add their preferences for books etc

## Validation

- Users cannot borrow the same book over the same period again
- Users can borrow a maximum of 10 books
- Maximum period to borrow a book is 31 days, minimum is 1 day
- You cannot of course insert a date that has already passed 
- Librarians can also borrow books, in which case there is not approval process

## Additional Challenges - Later

- Send email notification when a borrow request is about to expire
- Charge for every day that the book is not returned
- add social sign in
- Use AI to recommend books to users

## Technologies

- React for the frontend client - use hooks and context for global state management instead of redux, add testing
- Node with Express for the backend client
- Postgres for the Database
- Netlify to host the frontend
- Heroku to host the backend
- azure storage or s3 or cloudinary for object storage (profile images, book images)
- GitHub + GitHub actions for CI/CD

