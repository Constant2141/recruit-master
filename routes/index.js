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
    major: body.major,
    intro: body.intro,
    tel: body.tel
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
  // console.log(req.query);
  let url = req.query.url;
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



// router.post('/share', function (req, res, next) {
//   let hrefURL = req.body.urlhref;
//   wxShare.prototype.accessToken(hrefURL, function (data) {
//     res.json(data);
//   });
// })
module.exports = router;
