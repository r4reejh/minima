/**
 * Parent for Prototypal Inheritance
 */
function Link() {
  this.main = null;
  this.next = null;
}

/**
 *
 * @param {Object} {main}
 * @return {Object}
 */
function create({main}) {
  return function() {
    Link.call(this);
    this.main = main;
  };
}

exports.create = create;
