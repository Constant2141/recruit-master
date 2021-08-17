var express = require('express');
var router = express.Router();
const { studentsModel } = require('../tool/db')
const vwx = require('../tool/wx')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '招新招新' });
});

router.post('/submit', function (req, res, next) {
  let body = req.body;
  let data = new studentsModel({
    name: body.name,
    sex: body.sex,
    like: body.like,
    intro: body.intro,
    stuID: body.stuID,
    subject:body.subject,
    call:body.call
  })
  console.log(data);
  data.save().then(suc => {
    res.json({
      msg: '成功',
      code: 200
    })
  }, fail => {
    res.json({
      fail,
      msg: '失败',
      code: 400
    })
  }).catch(err => {
    console.log(err);
  })
})

router.get('/config', function (req, res) {
  // let url = decodeURIComponent(req.query.url);
  console.log('40行'+req.query.url);
  let url = decodeURIComponent(req.query.url);//这个一定要encodeURIComponent
	if (!url) return res.json({
		code: 403,
		data: 'query.url not found'
	});
  // console.log('45行'+url);
	let sign_obj = vwx.sdk.wxConfig(url);

	res.json({
		code: 200,
		data: sign_obj
	});
})



router.post('/show',function(req,res){
  let where = req.body.name;
  studentsModel.find({name:where},function(err,doc){
    if(err) throw err;
    let lastOne = doc.pop();
    res.json({
      code:200,
      doc:lastOne
    })
  })
})
module.exports = router;
