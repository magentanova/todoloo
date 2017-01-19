//libraries 
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

//modules
import AppView from './views/appView'
import User from './models/userModel'


Date.prototype.getSaturday = function() {
  var tillSat = 6 - this.getDay()
  var d = new Date
  d.setDate(this.getDate() + tillSat)
  return d
}


const app = function() {
  const AppRouter = Backbone.Router.extend({
  	routes: {
  		"home": "renderTestView",
      "login": "renderLoginView",
  		"*default": "redirect"
  	},

    renderLoginView: function() {
      ReactDOM.render(<AppView page="LoginPage" />, document.querySelector('.container'))
    },

  	renderTestView: function() {
  		ReactDOM.render(<AppView page="HomePage" />, document.querySelector('.container'))
  	},

  	redirect: function() {
  		location.hash = "home"
  	},

    initialize: function() {
      var checkAuth = ()=> {
        if (!User.getCurrentUser()) {
          location.hash = 'login'
        }
      }
      checkAuth()
      this.on('route', checkAuth)
      Backbone.history.start()
    }
  })
  new AppRouter

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..