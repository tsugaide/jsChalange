function check(number) {
  const formats = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555",
  ];

  const removeS = number.replace(/[\s\-()]/g, "");
  console.log(removeS);

  let resultNum1;
  let resultNum2;

  if (removeS.length == 10) {
    resultNum1 = number.replace(/\d/g, "5");
    console.log(resultNum1);
  } else if (removeS.length == 11) {
    const num2 = number.slice(1).replace(/\d/g, "5");
    resultNum2 = number.charAt(0) + num2;
    console.log(resultNum2);
  }

  let pesan = "";
  const hasil = formats.includes(resultNum1 || resultNum2);
  if (hasil == true) {
    pesan = "Valid US number:" + " " + number;
  } else {
    pesan = "Invalid US number:" + " " + number;
  }

  console.log(hasil);
  console.log(pesan);
}

check("123-456-7890");
