const fs = require('fs');
const path = require('path');
const {stdin, stdout,  exit } = require('process');

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');
stdout.write('Введите текст\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    end();
  }
  output.write(data);
});

process.on('SIGINT', end);

function end() {
  console.log('Good by');
  exit();
}
