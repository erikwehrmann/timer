const timer = function(input) {
  for (const val of input) {
    if (val >= 0) {
      setTimeout (() => {
        process.stdout.write('\x07');
        console.log(val);
      }, (val * 1000));
    }
  }
}

timer(process.argv.splice(2))