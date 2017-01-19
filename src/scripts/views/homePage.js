import React from 'react'
import moment from 'moment'

import ACTIONS from '../actions'
import TaskForm from '../components/taskForm.js'
import Task from '../components/task.js'
const HomePage = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchTasks()
	},

	 render: function() {
	 	return (
	 		<div className='home-page' >
	 			<TaskColumns {...this.props} />
	 			<TaskScroll {...this.props} />
	 			<TaskForm {...this.props} />
	 		</div>
	 	)
 	}
})

const TaskColumns = React.createClass({
	 render: function() {
	 	var todayTasks = this.props.taskCollection.filter(mod =>
	 			mod.get('day') && 
	 			moment(mod.get('day')).isSame(moment(),'day')),
	 		weekTasks = this.props.taskCollection.filter(mod => 
	 			moment(mod.get('saturday')).isSame(moment(new Date().getSaturday()),'day')
	 			),
	 		somedayTasks = this.props.taskCollection.filter(mod=>mod.get('isSomeday'))

	 	return (
	 		<div className='task-columns' >
	 			<Col tasks={todayTasks} btnVal='today' title='to do'/>
	 			<Col tasks={weekTasks} btnVal='week' title='this week'/>
	 			<Col tasks={somedayTasks} btnVal='someday' title='someday'/>
	 		</div>
	 	)
 	}
})


const Col = React.createClass({

	_makeTask: function(mod) {
		return <Task key={mod.cid} taskModel={mod} />
	},

	_showForm: function(e) {
		ACTIONS.showForm(this.props.btnVal)
	},

	 render: function() {
	 	return (
	 		<div className='col' >
	 			<h2>{this.props.title}</h2>
	 			{this.props.tasks.map(this._makeTask)}
	 			<button 
	 				onClick={this._showForm} 
	 				className="btn circle btn-large waves-effect waves-light red"
	 				>
	 				<i className="material-icons">+</i>
	 			</button>
	 		</div>
	 	)
 	}
})


const TaskScroll = React.createClass({
	 render: function() {
	 	return (
	 		<div className='task-scroll' >
	 			TaskScroll
	 		</div>
	 	)
 	}
})

export default HomePage
