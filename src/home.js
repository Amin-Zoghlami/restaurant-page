import burgerImage from "./burger.jpg";

export default function () {
    const content = document.getElementById("content");
    
    const homeImage = document.createElement("div");
    homeImage.classList.add("home", "image");
    const img = document.createElement("img");
    img.src = burgerImage;
    img.alt = "Burger";
    homeImage.appendChild(img);
    content.appendChild(homeImage);

    const homeDesc = document.createElement("div");
    homeDesc.classList.add("home", "description");
    const text = document.createElement("div");
    text.classList.add("text");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Sizzling Burgers";
    const p = document.createElement("p");
    p.textContent = "Our burgers are made with fresh ingredients and grilled to statisfy. Ranging from classic burgers to our own specialties, we can assure everyone can find something for them. Order online or visit at our location for an experience you will remember!";
    text.appendChild(h1);
    text.appendChild(p);
    homeDesc.appendChild(text);
    content.appendChild(homeDesc);
}