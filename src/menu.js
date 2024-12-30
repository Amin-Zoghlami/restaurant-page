export default function() {
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    const burgers = document.createElement("div");
    burgers.classList.add("burgers");
    menu.appendChild(burgers);
    
    const burgersh1 = document.createElement("h1");
    burgersh1.textContent = "Burgers";
    burgers.append(burgersh1);

    const burgerList = document.createElement("ul");
    burgers.append(burgerList);

    const classic = document.createElement("li");
    burgerList.appendChild(classic);

    const classich2 = document.createElement("h2");
    classich2.textContent = "The Classic Sizzle";
    const classicp = document.createElement("p");
    classicp.textContent = "A sizzling beef patty with lettuce, tomato, pickles, and our signature sizzling sauce.";
    classic.appendChild(classich2);
    classic.appendChild(classicp);

    const bbq = document.createElement("li");
    burgerList.appendChild(bbq);
    
    const bbqh2 = document.createElement("h2");
    bbqh2.textContent = "The BBQ Sizzle";
    const bbqp = document.createElement("p");
    bbqp.textContent = "Beef patty with sizzled bacon, crispy onions, and a tangy BBQ sauce.";
    bbq.appendChild(bbqh2);
    bbq.appendChild(bbqp);

    const inferno = document.createElement("li");
    burgerList.appendChild(inferno);

    const infernoh2 = document.createElement("h2");
    infernoh2.textContent = "The Inferno Sizzle";
    const infernop = document.createElement("p");
    infernop.textContent = "Beef patty with serrano pappers, pepper jack cheese, spice mayo, and our sizzling heat sauce.";
    inferno.appendChild(infernoh2);
    inferno.appendChild(infernop);

    const sides = document.createElement("div");
    sides.classList.add("sides");
    menu.appendChild(sides);
    
    const sidesh1 = document.createElement("h1");
    sidesh1.textContent = "Sides";
    sides.append(sidesh1);

    const sidesList = document.createElement("ul");
    sides.append(sidesList);

    const fries = document.createElement("li");
    sidesList.appendChild(fries);

    const friesh2 = document.createElement("h2");
    friesh2.textContent = "Sizzling Fries";
    const friesp = document.createElement("p");
    friesp.textContent = "Golden, crispy, sizzling fries served with a dipping sauce of your choice.";
    fries.appendChild(friesh2);
    fries.appendChild(friesp);

    const onionRings = document.createElement("li");
    sidesList.appendChild(onionRings);
    
    const onionRingsh2 = document.createElement("h2");
    onionRingsh2.textContent = "Onion Rings";
    const onionRingsp = document.createElement("p");
    onionRingsp.textContent = "Thick, crispy, sizzling onion rings with a dipping sauce of your choice.";
    onionRings.appendChild(onionRingsh2);
    onionRings.appendChild(onionRingsp);

    const coleslaw = document.createElement("li");
    sidesList.appendChild(coleslaw);

    const coleslawh2 = document.createElement("h2");
    coleslawh2.textContent = "Coleslaw";
    const coleslawp = document.createElement("p");
    coleslawp.textContent = "Creamy, tangy coleslaw with a hint of sweet and spice.";
    coleslaw.appendChild(coleslawh2);
    coleslaw.appendChild(coleslawp);

}