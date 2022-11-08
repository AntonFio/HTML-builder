const fs = require('fs')
const path = require('path')
const stylePath = path.join(__dirname, 'styles')
const assetsPath = path.join(__dirname, 'assets')


fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
  if (err) console.log(err);
})

const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'index.html'));


  fs.readdir(path.join(__dirname, 'assets'), { withFileTypes: true }, (err, data) => {
    
    for (let dat of data) {
      fs.mkdir((path.join(__dirname, 'project-dist/assets') + '/' + dat.name), { recursive: true }, (err) => {
        if (err) console.log(err);
      })
      
    }
  });



// (function copy() {
//   fs.readdir(path.join(__dirname, 'assets/fonts'),
//     (error, files) => {
//       if (error)
//         console.log(error);
//       else {
//         files.forEach(file => {
//           if (file) {
//             fs.copyFile(path.join(path.join(__dirname, 'assets/fonts'), file), path.join(path.join(__dirname, 'project-dist/assets/fonts'), file),
//               (error) => {
//                 if (error) {
//                   console.log(error);
//                 }
//               });
//           }
//         })
//       }
//     });
// })();

// (function copy() {
//   fs.readdir(path.join(__dirname, 'assets/img'),
//     (error, files) => {
//       if (error)
//         console.log(error);
//       else {
//         files.forEach(file => {
//           if (file) {
//             fs.copyFile(path.join(path.join(__dirname, 'assets/img'), file), path.join(path.join(__dirname, 'project-dist/assets/img'), file),
//               (error) => {
//                 if (error) {
//                   console.log(error);
//                 }
//               });
//           }
//         })
//       }
//     });
// })();

// (function copy() {
//   fs.readdir(path.join(__dirname, 'assets/svg'),
//     (error, files) => {
//       if (error)
//         console.log(error);
//       else {
//         files.forEach(file => {
//           if (file) {
//             fs.copyFile(path.join(path.join(__dirname, 'assets/svg'), file), path.join(path.join(__dirname, 'project-dist/assets/svg'), file),
//               (error) => {
//                 if (error) {
//                   console.log(error);
//                 }
//               });
//           }
//         })
//       }
//     });
// })();