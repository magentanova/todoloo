import STORE from './store'
import User from './models/userModel'
import {TaskCollection,TaskModel} from './models/taskModel'

const ACTIONS = {

	saveTask: function(taskData) {
		var taskMod = new TaskModel(taskData)
		taskMod.save().then(
			function(resp) {
				console.log(resp)
				alert('task saved!')
				ACTIONS.closeForm()
				ACTIONS.fetchTasks()
			},
			function(resp) {
				console.log(resp)
				alert('trouble with the saving of the task, is what it is')
			})
	},

	closeForm: function() {
		STORE.set({
			taskFormType: null
		})
	},

	fetchTasks: function() {
		STORE.get('taskCollection').fetch({
			data: {
				user: User.getCurrentUser().get('_id')
			}
		})
	},

	logOneIn: function(email,password) {
		User.login(email,password).then(
			(resp) => {
				console.log(resp)
				alert('good job loggin in!')
				location.hash = 'home'
			}),
			(err) => {
				console.log(err)
				alert('problem logging you in')
			}
	},

	logOneOut: function() {
		User.logout().then(
			(resp)=>location.hash = 'login'
			)
	},

	signOneUp: function(dataObj) {
		User.register(dataObj).then(
			(resp) => {
				console.log(resp)
				ACTIONS.logOneIn(dataObj.email,dataObj.password)
			}),
			(err) => {
				console.log(err)
				alert('problem signing you up')
			}

	},

	showForm: function(formType) {
		STORE.set({
			taskFormType: formType
		})
	}
}

export default ACTIONS