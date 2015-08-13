var hapi = require('hapi');

var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Oi tudo bem ? ')
    }
});

server.start(function () {
    console.log('Running server at ', server.info.uri);
});