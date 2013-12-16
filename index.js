
/**
 * Module dependencies.
 */

var model = require('model');

/**
 * Story model.
 */

var Story = model('Story')
  .attr('id', { type: 'number' })
  .attr('title', { required: true, type: 'string' })
  .attr('total', { type: 'number' })
  .attr('closed', { type: 'number' });

Story.prototype.open = function() {
  return this.total() - this.closed();
};


/**
 * Expose `Story`.
 */

module.exports = Story;

