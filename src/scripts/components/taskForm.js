import React from 'react'
import ACTIONS from '../actions.js'
import User from '../models/userModel'



const TaskForm = React.createClass({

	_closeForm: function() {
		ACTIONS.closeForm()
	},

	_handleSubmit: function(e) {
		e.preventDefault()
		console.log(this.props.taskFormType)
		var timeProp, timeVal
		if (this.props.taskFormType === 'today') {
			timeProp = 'day'
			timeVal = new Date()
		}
		if (this.props.taskFormType === 'week') {
			timeProp = 'saturday'
			var d = new Date
			timeVal = d.getSaturday()
		}
		if (this.props.taskFormType === 'someday') {
			timeProp = 'isSomeday'
			timeVal = true
		}
		var taskData = {
			name: e.target.name.value,
			user: User.getCurrentUser().get('_id')
		}
		taskData[timeProp] = timeVal
		ACTIONS.saveTask(taskData)
		e.target.reset()
	},

	 render: function() {
	 	var styleObj = {
	 		display: this.props.taskFormType ? 'block' : 'none'
	 	}
	 	return (
	 		<div style={styleObj} className="overlay">
		 		<form onSubmit={this._handleSubmit} className='task-form' >
			 		<a onClick={this._closeForm} className="btn red"><i>x</i></a>

		 			<input type='text' name="name" />
		 			<button type="submit" className="btn">submit</button>
		 		</form>
	 		</div>
	 	)
 	}
})

export default TaskForm