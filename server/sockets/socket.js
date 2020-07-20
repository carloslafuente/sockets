const { io } = require('../server');

io.on('connection', (client) => {
	console.log('Usuario conectado');

	client.on('clientMessage', (data, callback) => {
		console.log(data);
		let resp = {
			...data,
			clientID: client.id,
		};

		// if (data.user) {
		// 	callback({
		// 		body: resp,
		// 		response: 'Success',
		// 	});
		// } else {
		// 	callback({
		// 		body: resp,
		// 		response: 'Error',
		// 	});
		// }

		client.broadcast.emit('serverMessage', resp);
	});

	client.on('disconnect', () => {
		console.log('Usuario desconectado');
	});
});
