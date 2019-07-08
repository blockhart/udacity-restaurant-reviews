if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('sw.js', {scope: "/"})
	.then(reg => {
		console.log('serviceWorker registration successful' + reg.scope);
	})
	.catch(error => {
		console.log('serviceWorker registration failed' + error);
	});
}