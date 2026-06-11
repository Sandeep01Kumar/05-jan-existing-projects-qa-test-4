const express = require('express');                                                   // Import the Express framework via CommonJS (replaces the native 'http' module)
const hostname = '127.0.0.1';                                                          // Loopback hostname to bind to (preserved from the original local-only server)
const port = 3000;                                                                     // TCP port to listen on (preserved from the original server)
const app = express();                                                                 // Create the Express application instance used to register routes

app.get('/', (req, res) => res.type('text/plain').send('Hello, World!\n'));            // GET / -> preserve the original plain-text greeting for backward compatibility
app.get('/good-evening', (req, res) => res.type('text/plain').send('Good evening'));   // GET /good-evening -> new plain-text endpoint returning "Good evening"

app.listen(port, hostname, () => {                                                     // Start the Express server listening on the configured host and port
  console.log(`Server running at http://${hostname}:${port}/`);                        // Log the running server URL once the server has successfully bound
});                                                                                    // End of the app.listen callback / startup invocation
