function solve(s) {
  const angka = "1234567890";
  const word = "abcdefghijklmnopqrstuvwxyz";
  const upper = [];
  const lower = [];
  const digits = [];
  const specialChars = [];

  s.split("").forEach((e) => {
    if (word.toUpperCase().includes(e)) {
      upper.push(e);
    } else if (word.includes(e)) {
      lower.push(e);
    } else if (angka.includes(e)) {
      digits.push(e);
    } else {
      specialChars.push(e);
    }
  });

  console.log([upper.length, lower.length, digits.length, specialChars.length]);
}

solve("AbCd32!!");
