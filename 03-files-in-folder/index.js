const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, data) => {
  if (err) throw err;

  for (let dat of data) {
    fs.stat(path.join(__dirname, 'secret-folder') + '/' + dat, (err, stats) => {
      if (err) throw err;

      if (!stats.isDirectory()) {
        console.log(path.basename(dat).split('.')[0]+ ' - ' + path.extname(dat).replace('.', '') + ' - ' + stats.size + ' байт')
        
      }
    })
  }

})