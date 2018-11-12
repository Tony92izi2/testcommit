const dev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 8529,
        name: 'tony',
        username: 'root',
        password: 'admin',
        env: 'devMode'
    }
};
const prod = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 8529,
        name: 'tony',
        username: 'root',
        password: 'admin',
        env: 'prodMode'
    }
};
// module.exports = config;
// module.exports = function(){
    console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
    case 'development':
        module.exports = dev;
        break;
    case 'production':
        module.exports = prod;
        break;
    default:
        module.exports = dev;
}
// };