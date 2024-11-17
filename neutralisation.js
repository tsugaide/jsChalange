function neutralise(s1, s2) {
  let hasil = "";
  for (let index = 0; index < s1.length; index++) {
    if (s1[index] == s2[index]) {
      hasil += s1[index];
    } else if (s1[index] != s2[index]) {
      hasil += "0";
    }
  }
  return hasil;
}
console.log(neutralise("----", "----"));
