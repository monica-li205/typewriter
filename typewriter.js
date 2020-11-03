const sentence = 'hello there from lighthouse labs';

const helloTimeout = (string) => {
  let timer = 0;

  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }
  console.log('\n');
  return;
}
helloTimeout(sentence);
