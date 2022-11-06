const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true },()=>{})

function del() {
  fs.readdir(path.join(__dirname, 'files-copy'),
(error, files) => {
  if (error) {
    console.log(error);
  }
    files.forEach(file => {
      if (file) {
        fs.unlink(path.join(__dirname, 'files-copy',file),
          (error) => {
            if (error) {
              console.log(error);
            }
          });
      }
    });
});
}

function copy() {
  fs.readdir(path.join(__dirname, 'files'),
    (error, files) => {
      if (error)
        console.log(error);
      else {
        files.forEach(file => {
          if (file) {
            fs.copyFile(path.join(path.join(__dirname, 'files'), file), path.join(path.join(__dirname, 'files-copy'), file),
              (error) => {
                if (error) {
                  console.log(error);
                }
              });
          }
        })
      }
    });  
}

del();
copy();