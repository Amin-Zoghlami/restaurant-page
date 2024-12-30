import manImage from "./man.jpg";

export default function() {
    const content = document.getElementById("content");
    
    const aboutImage = document.createElement("div");
    aboutImage.classList.add("about", "image");
    const img = document.createElement("img");
    img.src = manImage
    img.alt = "man";
    aboutImage.appendChild(img);
    content.appendChild(aboutImage);

    const aboutDesc = document.createElement("div");
    aboutDesc.classList.add("about");
    const text = document.createElement("div");
    text.classList.add("text");
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    const p = document.createElement("p");
    p.textContent = "Sizzling burgers opened Febuary 29, 2000. Founder John Doe started making burgers in Miami, Florida in a food truck branded as Sizzling Burgers. Today, we have kept this name and our locations span from Florida up to New York. We promise to only use the best of ingredients, and make sure our food is always of the highest quality. Come join us to finally taste a Sizzling Burger for yourself!";
    text.appendChild(h1);
    text.appendChild(p);
    aboutDesc.appendChild(text);
    content.appendChild(aboutDesc);
}