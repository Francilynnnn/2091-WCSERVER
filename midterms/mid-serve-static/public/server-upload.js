const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: fileStorage });

app.get('/upload', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Image Uploaded!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
