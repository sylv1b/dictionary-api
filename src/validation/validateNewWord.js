const validateNewWord = (game) => {
    const errors = { hasErrors: false }
    const {
        word,
        definition
    } = game

    if (!word || word === '') errors.word = 'Missing user word'
    if (!definition) errors.definition = 'Missing definnition'

    if (errors.word || errors.definition) errors.hasErrors = true

    return errors
}

module.exports = validateNewWord 