// // console.log("Hello all, I am back.");
// // const http = require('http');

// // const hostname = '127.0.0.1';
// // const port = 3000;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });







const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alerts</title>
  </head>
  <body>
      <h1>I am Mohonto</h1>
      <script>
          // Alert is browser javascript does not return anything
          alert("This is a Message");
  
          //Prompt
          let name = prompt("What is your name", "Enter your name");
          console.log(name);
  
          // confirms in javascript
          let deletePost = confirm("Do you want to delete this post");
          console.log(deletePost);
          if(deletePost)
          {
              console.log("Your post has been deleted successfully");
          }
          else
          {
              console.log("Your post has not been deleted successfully");
          }
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});