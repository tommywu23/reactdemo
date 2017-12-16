const Authorization = () => {
	let auth = JSON.parse(localStorage.getItem('auth'));
	//this is demo. we shall be to implementing encryption rules.

	if (auth && auth.access_token) {
		return auth.token_type + ' ' + auth.access_token;
	} else {
		return 'Basic bWZnYXBwOm15LXNlY3JldC10b2tlbi10by1jaGFuZ2UtaW4tcHJvZHVjdGlvbg==';
	}
};

// const msAuthorization =
// 	'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6MSwiYXVkIjpbInJlc19tZmciXSwidXNlcl9uYW1lIjoiMzkiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwidGVuYW50SWQiOiJNRkciLCJleHAiOjE1MTEyNTY3NDEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiNzcyODhiZDctNjFhZS00YjIzLTk5OWQtMGQyMDM0NDc0ZGIxIiwiY2xpZW50X2lkIjoibWZnYXBwIn0.ANezuLd7jPmFWO7AkJfOZzNgZRWYhaXGJVcE1CZ8Gvk4xMGsJQBcn5FBAkRHLWuLiDOFV5qVOYpRmdv0olEv9XZFm5_VX0X89T18Yn_piIv7QjWvWzbjz-QQMr6G8XDeOKtDJBQax2uUZEZA1mVNoiolpYWvZ3GO8FpyKj3oSihkmSJreArg1HDhU7wtJcS3qDWo1BymsogWcvm8zC1BLEiZJi7XTCqF9NjIm-q-d9qFXCiPUVSUTdNN2QQf2TXkR9XLHlNg8sCeKNbp3lSdRVSNaJ2Z3U4A80WUHVu_4BiI3DcZu6t9wr5nE6eEvAYsaibR57aFwauQbOge1BboZQ';

export const authHeader = {
	Authorization
};
