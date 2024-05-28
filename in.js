const soruKutusu = document.getElementById("soru");
const cevap = document.getElementById("cevap");

const sorularCevaplar = {
  "yoshing": "18",
  "yiling": "400"
};

const cevapGoster = e => {
  e.preventDefault();

  const girilenSoru = soruKutusu.value.toLowerCase();

  if (sorularCevaplar.hasOwnProperty(girilenSoru)) {
    cevap.innerHTML = Cevap: ${sorularCevaplar[girilenSoru]};
  } else {
    cevap.innerHTML = "Cevap bulunamadı.";
  }
};

soruKutusu.addEventListener("input", cevapGoster);