const express = require('express');
const router = express.Router();
const Book = require('../DB/Book');
const Rent = require('../DB/Rent');

router.post('/addBook',async (req,res)=>{
    console.log(req.body);
    try{const book = await new Book({
        title: req.body.title,
        author: req.body.author,
        category:req.body.category,
        number: req.body.number
    })
    console.log(book)
    await book.save();
    res.send(book);}catch(err){ console.log(err)}
})

router.post('/rent',async (req,res)=>{
    console.log(req.body);
    try{const rent = await new Rent({
        book: req.body.book,
        user: req.body.user,
        days: req.body.days
    })
    console.log(rent);
    await rent.save();
    res.send(rent);}catch(err){ console.log(err)}
})
router.get('/allBook',async (req,res)=>{
    const books = await Book.find()
    console.log(books)
    res.send(books);
})
router.post('/allRent', async (req,res)=>{
    const rent = await Rent.find({user:req.body.user})
    console.log(rent);
    res.send(rent);
})

module.exports = router;