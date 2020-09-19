const Koa = require('koa'); // 引入koa

const app = new Koa(); // 初始化koa对象

app.use(async (ctx, next) => { 
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>君不见黄河之水天上来，奔流到海不复回；君不见高堂明镜悲白发，朝如青丝暮成雪。</h1>'
})

app.listen(3001)
console.log('服务启动成功：3001');