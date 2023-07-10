const app = require('./src/app')
const PORT = 3055
const server = app.listen(PORT, () => {
  console.log(`Wsv start with ${PORT}`)
})
// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log('exit server express');
//   });
//   //   nofity.send('ping..');
// });
