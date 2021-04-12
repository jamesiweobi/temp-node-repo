const os = require("os");

// info about user

const user = os.userInfo();
console.log(user);

// Method returns system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOs);
