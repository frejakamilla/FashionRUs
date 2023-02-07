console.log("produkt.js");

// lav url search objekt
const urlParameter = new URLSearchParams(window.location.search);
// Find Id

const id = urlParameter.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

hentProdukt();

async function hentProdukt() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  visProdukt(data);
}

function visProdukt(produkt) {
  document.querySelector(".purchaseBox h2").textContent = produkt.productdisplayname;
  document.querySelector(".purchaseBox h3").textContent = produkt.brandname;
  document.querySelector(".purchaseBox .pris").textContent = produkt.price + ",00 kr.";
  document.querySelector(".info .beskrivelse").innerHTML += `<div> ${produkt.description} </div>`;
  document.querySelector(".info .model").textContent = produkt.productdisplayname;
  document.querySelector(".info .farve").textContent = produkt.basecolour;
  document.querySelector(".info .id").textContent = produkt.id;
  document.querySelector(".img-container img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
}
