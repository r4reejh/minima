function Link() {
    this.main = null;
    this.next = null;
  }
  
function create({main}) {
    return function() {
        Link.call(this)
        this.main = main
    }
}

exports.create = create