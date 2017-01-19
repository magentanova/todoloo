import Backbone from 'backbone'

const TaskModel = Backbone.Model.extend({
	urlRoot: '/api/task',
	idAttribute: '_id'
})

const TaskCollection = Backbone.Collection.extend({
	model: TaskModel,
	url: '/api/task'
})

export {TaskCollection,TaskModel}