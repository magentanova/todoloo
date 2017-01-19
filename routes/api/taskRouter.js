let Router = require('express').Router;
const taskRouter = Router()

let Task = require('../../db/schemas/taskSchema.js').Task

taskRouter
	.get(`/task`, function(req, res){
		Task.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/task/:_id`, function(req, res){
		Task.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/task`, function(req,res) {
		let newRecord = new Task(req.body)
		newRecord.save(function(err) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			}
			else {  
				res.json(newRecord)
			}
		})
	})

	.put(`/task/:_id`, function(req, res){
		Task.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send(`no record found with that id`)
			}
			else {
				res.json(req.body)
			}
		})
	})

	.delete(`/task/:_id`, function(req, res){
		Task.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = taskRouter
