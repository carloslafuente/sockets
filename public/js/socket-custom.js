var socket = io();

socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('Se ha perdido la conexion con el servidor');
});

socket.emit(
	'clientMessage',
	{
		user: 'Carlos',
		message: 'Mensaje desde el cliente',
	},
	function (data) {
		console.log(`Respuesta del servidor: ${data.response}`);
	}
);

socket.on('serverMessage', function (data) {
	console.log(data);
	var message = document.createElement('p');
	var node = document.createTextNode(`${data.message}: ${data.clientID}`);
	message.appendChild(node);
	var element = document.getElementById('messages');
	element.appendChild(message);
});
