function Link() {
    this.props = {};
    this.main = null;
    this.next = null;
  }
  
function create(props, main) {
    return function() {
        Link.call(this)
        this.props = props
        this.main = main
    }
}

exports.create = create