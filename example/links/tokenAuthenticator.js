function tokenAuthenticator(accessLevel) {
    this.main = function(req, res){
        switch(accessLevel) {
            case "admin":
                this.next(req, res);
                return true;
            case "user":
                this.next(req, res);
                return true;
            default:
                return false;
        }
    };
}

module.exports = tokenAuthenticator;