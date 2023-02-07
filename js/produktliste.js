console.log("produktliste.js");
//https://kea-alt-del.dk/t7/api/products

//1. grab the data
async function hentData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=100");
  const data = await response.json();

  //2. Loope + for hver
  data.forEach(visProdukt);
}
hentData();

function roundTo(n, place) {
  return +(Math.round(n + "e+" + place) + "e-" + place);
}

function visProdukt(produkt) {
  console.log(produkt);
  //4. fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  //5. clone
  const klon = template.cloneNode(true);
  //6. skifte data
  klon.querySelector("h3").textContent = produkt.productdisplayname;
  klon.querySelector("h4").textContent = produkt.brandname;
  klon.querySelector(".price").textContent = produkt.price + ",00 kr.";
  klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  klon.querySelector("a").href = "produkt.html?id=" + produkt.id;
  if (produkt.soldout) {
    klon.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    klon.querySelector("article").classList.add("onSale");
    klon.querySelector(".price").textContent = produkt.price + ",00 kr.";
    // klon.querySelector(".new-price").textContent = Math.round(produkt.price - (produkt.price / 100) * produkt.discount) + ",00 kr.";

    const number = produkt.price - (produkt.price / 100) * produkt.discount;
    klon.querySelector(".new-price").textContent = roundTo(number, 2);

    klon.querySelector(".discount").textContent = "-" + produkt.discount + "%";
  }
  //7. appende
  document.querySelector(".produktgalleri").appendChild(klon);
}

// articletype: "Tshirts";
// brandname: "Nike";
// category: "Apparel";
// discount: null;
// gender: "Men";
// id: 1163;
// price: 895;
// productdisplayname: "Sahara Team India Fanwear Round Neck Jersey";
// productionyear: 2011;
// season: "Summer";
// soldout: 0;
// subcategory: "Topwear";
// usagetype: "Sports";
