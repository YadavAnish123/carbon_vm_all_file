const { setWorldConstructor } = require('cucumber');

function CustomWorld() {
  this.driver = null;
}

setWorldConstructor(CustomWorld);
