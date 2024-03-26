'use strict';

//Here, utilities and custom commands will be stored
module.exports = {
    sleep: async function (milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
};
