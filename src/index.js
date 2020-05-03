const app = require("./app");

// Listen

const PATH = process.env.PATH || 8080;

app.listen(PATH, () => {
  console.info(`The app is listening on PORT ${PATH}`);
});
