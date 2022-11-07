const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  
  for (let file of files) {
    if (path.extname(file.name) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', file.name), (err, data) => {
        if (err) {
          console.log(err)
        }
        writeStream.write(data)
      })
    }
  }

})

