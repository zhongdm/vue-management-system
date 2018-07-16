const Vue = require('vue')
const express = require('express')()
// const bodyParser = require('body-parser')
const vueSsr = require('vue-server-renderer') // vue的ssr
const fs = require('fs')
const cp = require('child_process') // 启动成功，自动打开默认浏览器模块

// const urlEncodedParser =bodyParser.urlencoded({ extended: false })
express.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是su： {{ url }}</div>`
  })

  const renderer = vueSsr.createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
  })
  const context = {
    title: "my app for ssr",
    singlePara: '<p>this is a single paragraph</p>'
  }
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
     // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
    res.end(
     `${html}`
     )
  })
})

const server = express.listen(9000,'localhost', function(){
  console.log("project is running at: http://%s:%s",server.address().address, server.address().port )
})

cp.exec("start http://localhost:9000")

