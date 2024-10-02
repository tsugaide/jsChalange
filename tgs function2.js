const nama = document.querySelector("#nama");
const btn = document.querySelector("#btnGaji");
const gaji = document.querySelector("#gaji");
const hari = document.querySelector("#hari");
const hasil = document.querySelector("#hasil");

function total() {
  hasil.textContent = `Nama :${nama.value} Gaji/hari :${
    gaji.value
  } Hari masuk kerja :${hari.value}
   Total gaji :${hari.value * gaji.value}`;
}
