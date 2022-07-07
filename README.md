# dictionary-api
Read and write in a dictionary

It is a simple api that allow to search for words and register new ones.

### Install
npm install

### Run
npm run dev (dev mode) or npm start

GET /:word search for a word
POST /     register a new word or update an existing one
  params: 
    word: The word to register
    definition: The word's definition
