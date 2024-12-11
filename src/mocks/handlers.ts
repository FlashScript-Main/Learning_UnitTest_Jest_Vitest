// Root 👉🏻 "src" Folder 👉🏻 "mocks" Folder 👉🏻 handlers.ts

/*
    🔹 within this file we are going to handle all the HTTP requests 
    and respond with a mock response 
    we handle the request and hence the file name handlers
    for our scenario we need to mock rest APIs
    so at the top import "rest" from MSW 
    the other alternative being graphql 🔹
*/

/*
    🔹 next we export an array called handlers to handle a rest API request 
    we need to specify its method path and a function 
    that would return the mocked response 
    So within the array let's start with "rest" followed by the method
    in our case it is the "get" method 🔹
*/
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
        {
            name: "John Doe",
        },
        {
            name: "Clark Kent",
        },
        {
            name: "Ali Yaseen",
        },
    ])
  }),
]
