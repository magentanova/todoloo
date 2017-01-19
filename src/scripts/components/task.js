import React from 'react'

const Task = React.createClass({
	 render: function() {
	 	return (
	 		<div className='task card blue-grey' >
		 		<div className="card-content white-text">
		 			<p>{this.props.taskModel.get('name')}</p>
	 			</div>
	 		</div>
	 	)
 	}
})

export default Task
