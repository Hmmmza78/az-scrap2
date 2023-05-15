import errorHandler from 'errorhandler'

import app from './app'

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler())
const server = require("http").createServer(app);
import { socket } from "./socket";
import { connectToDatabase } from './config/db';
socket(server);

/**
 * Start Express server.
 */
server.listen(app.get('port'), () => {
  console.log(
    ' 🥸 App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
});
connectToDatabase()


// export default server
