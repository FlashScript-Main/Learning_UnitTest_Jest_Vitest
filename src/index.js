import { server } from './mocks/node'
 
server.listen()
 
// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const user = await response.json()
  console.log(user)
}
 
app()