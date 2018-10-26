var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/test', (req, res)=>{
  console.log(req.headers)
  res.json(req.body)
})

router.get('/login', function(req, res, next){
  res.status = 200
  const { username, password  } = req.query
  const err = {
    code: 0,
    err: {}
  }

  const result = {
    code: 1,
    data: req.query
  }
  if (!username) {
    err.err['username'] = '用户名不能为空'
  }

  if (!password) {
    err.err['password'] = '密码不能为空'
  }

  if(Object.keys(err.err).length > 0) {
    res.json(err)
  } else {
    res.json(result)
  }
})

module.exports = router;
