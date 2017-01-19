import _ from 'underscore'
import Backbone from 'backbone'
import {TaskCollection,TaskModel} from './models/taskModel'

const STORE = _.extend(Backbone.Events,{
	data: {
		taskCollection: new TaskCollection,
		taskFormType: null
	},

	emitChange: function() {
		this.trigger('change')
	},

	getData: function() {
		return this.data
	},

	get: function(key) {
		return this.data[key]
	},

	set: function(attrs) {
		this.data = _.extend(this.data,attrs)
		this.emitChange()
	},

	initialize: function() {
		this.get('taskCollection').on('all',this.emitChange.bind(this))
	}
})

STORE.initialize()

export default STORE