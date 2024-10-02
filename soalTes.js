function gen(words, num) {
  const sisa = num % words.length;
  let jawaban;

  if (sisa <= 0) {
    jawaban = "tidak ada";
  } else if (sisa > 0) {
    jawaban = words[sisa - 1];
  }
  console.log(jawaban);
}
gen("adn", 7);
