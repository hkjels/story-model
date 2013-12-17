
/**
 * Module dependencies.
 */

var model = require('model')
  , Collection = require('collection');

/**
 * Story model.
 */

var Story = model('Story')
  .attr('id', { type: 'number' })
  .attr('title', { required: true, type: 'string' })
  .attr('timeTotal', { type: 'number' })
  .attr('timeClosed', { type: 'number' });

/**
 * Tasks will be stored as a collection
 * in each story.
 */

Story.prototype.tasks = new Collection();

/**
 * Time left until story is completed.
 */

Story.prototype.timeOpen = function() {
  return this.timeTotal() - this.timeClosed();
};

/**
 * Add task to collection.
 */

Story.prototype.addTask = function(task) {
  if (!'Task' instanceof task) {
    throw new Error('You must supply a valid Task');
  }
  this.timeTotal(this.timeTotal + task.estimate());
  if ('done' == task.state()) {
    this.timeClosed(this.timeClosed() + task.estimate());
  }
  this.tasks.push(task);
};

/**
 * Expose `Story`.
 */

module.exports = Story;

