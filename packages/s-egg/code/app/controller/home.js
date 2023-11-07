'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('home.nj', {})
  }

  async post() {
    const { ctx } = this
    ctx.body = { id: 1, name: '我是一段post请求数据' }
  }
}

module.exports = HomeController
