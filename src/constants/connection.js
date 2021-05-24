class Connection {
  constructor() {
    this.useAccessTokenVerificationAPI = false;
    this.socket = {
      "initSocket": false,
      "socketDefaultOptions": {},
      "accessTokenVerification": false
    };
    this.bypassBackend = true;
    this.useDeakinSSO = true;
  }
}

const instance = new Connection();
export default instance;