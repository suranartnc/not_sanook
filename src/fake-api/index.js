const db = require('./db.json')

module.exports = () => {
  const contents = db.map(function (content, index) {
    return {
      ...content,
      image: 'https://picsum.photos/id/' + (index + 1) + '/555/333',
    }
  })

  return { contents }
}
