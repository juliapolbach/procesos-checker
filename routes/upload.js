const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('file'), (req, res, next) => {
  console.log('hola')
  res.redirect('/')
})
module.exports = router;
