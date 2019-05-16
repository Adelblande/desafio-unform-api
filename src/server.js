const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://Adelblande:adel2323@cluster0-jtm8i.mongodb.net/bd_contatos?retryWrites=true', {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

app.listen(process.env.PORT || 3333)
