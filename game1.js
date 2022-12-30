// Membuat fuct untuk pilihan random comp
function getPilihanComp() {
  const comp = Math.random();

  if (comp < 0.34) return "gunting";
  if (comp < 0.67) return "batu";
  return "kertas";
}

// Membuat func rules untuk game
function getHasil(comp, user) {
  if (user == comp) return "SERI!";
  if (user == "gunting") return comp == "kertas" ? "MENANG!" : "KALAH!";
  if (user == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (user == "kertas") return comp == "batu" ? "MENANG!" : "KALAH!";
  return "SALAH INPUT!";
}

// Membuat func gonta ganti gambar Comp
function putar() {
  const imgComputer = document.querySelector(".pilihan-comp");
  const gambar = ["tangan-gunting", "tangan-batu", "tangan-kertas"];
  let j = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[j++] + ".png");
    if (j == gambar.length) j = 0;
  }, 100);
}

// Membuat func untuk proses game
const pilihan = document.querySelectorAll(".game1user img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanUser = i.className;
    const hasil = getHasil(pilihanComp, pilihanUser);
    putar();

    // Mengatur Gambar Comp dan Hasil Akhir setelah putar gambar random
    setTimeout(function () {
      const imgComp = document.querySelector(".pilihan-comp");
      imgComp.setAttribute("src", "img/tangan-" + pilihanComp + ".png");
      const akhir = document.querySelector(".hasil");
      akhir.innerHTML = hasil;
    }, 1000);
  });
});
