const express = require("express");
const router = express.Router();
const validateNewWord = require('../validation/validateNewWord')

const dictionary = {}

const getWord = (word) => {
    const key = word.toLowerCase()
    if (dictionary[key]) return { word: word, definitions: dictionary[key] }
    return null
}

// GET /:word
// PUBLIC
// DESCRIPTION: Get a word in the dictionary
router.get('/:word', async (req, res) => {
    const definition = getWord(req.params.word)
    if (definition) return res.json({ definition })
    return res.status(400).json({ error: 'Word not found' })
})

// POST /
// PUBLIC
// DESCRIPTION: Add a word and its definition in the dictionary
router.post('/', async (req, res) => {
    const validation = validateNewWord(req.body)
    if (validation.hasErrors) return res.status(400).json(validation)

    const {
        word,
        definition
    } = req.body

    const wordExists = getWord(word)
    if (wordExists) {
        dictionary[word.toLowerCase()].unshift({ definition: definition, createdAt: new Date() })
    } else {
        dictionary[word.toLowerCase()] = [{ definition: definition, createdAt: new Date() }]
    }

    const newWord = getWord(word)
    res.json(newWord)

})


module.exports = router