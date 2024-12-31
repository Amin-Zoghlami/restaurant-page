export default function() {
    const content = document.getElementById("content");
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    content.appendChild(menuContainer);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menuContainer.appendChild(menu);

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
    classich2.textContent = "The Classic Sizzle  - $7.99";
    const classicPrice = document.createElement("span");
    const classicp = document.createElement("p");
    classicp.textContent = "A sizzling beef patty with lettuce, tomato, pickles, and our signature sizzling sauce.";
    classic.appendChild(classich2);
    classic.appendChild(classicp);

    const bbq = document.createElement("li");
    burgerList.appendChild(bbq);
    
    const bbqh2 = document.createElement("h2");
    bbqh2.textContent = "The BBQ Sizzle - $8.99";
    const bbqp = document.createElement("p");
    bbqp.textContent = "Beef patty with sizzled bacon, crispy onions, and a tangy BBQ sauce.";
    bbq.appendChild(bbqh2);
    bbq.appendChild(bbqp);

    const inferno = document.createElement("li");
    burgerList.appendChild(inferno);

    const infernoh2 = document.createElement("h2");
    infernoh2.textContent = "The Inferno Sizzle - $8.49";
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
    friesh2.textContent = "Sizzling Fries - $2.49";
    const friesp = document.createElement("p");
    friesp.textContent = "Golden, crispy, sizzling fries served with a dipping sauce of your choice.";
    fries.appendChild(friesh2);
    fries.appendChild(friesp);

    const onionRings = document.createElement("li");
    sidesList.appendChild(onionRings);
    
    const onionRingsh2 = document.createElement("h2");
    onionRingsh2.textContent = "Sizzling Onion Rings - $2.99";
    const onionRingsp = document.createElement("p");
    onionRingsp.textContent = "Thick, crispy, sizzling onion rings with a dipping sauce of your choice.";
    onionRings.appendChild(onionRingsh2);
    onionRings.appendChild(onionRingsp);

    const coleslaw = document.createElement("li");
    sidesList.appendChild(coleslaw);

    const coleslawh2 = document.createElement("h2");
    coleslawh2.textContent = "Coleslaw - $1.99";
    const coleslawp = document.createElement("p");
    coleslawp.textContent = "Creamy, tangy coleslaw with a hint of sweet and spice.";
    coleslaw.appendChild(coleslawh2);
    coleslaw.appendChild(coleslawp);

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");
    menu.appendChild(drinks);
    
    const drinksh1 = document.createElement("h1");
    drinksh1.textContent = "Drinks";
    drinks.append(drinksh1);

    const drinksList = document.createElement("ul");
    drinks.append(drinksList);

    const cola = document.createElement("li");
    drinksList.appendChild(cola);

    const colah2 = document.createElement("h2");
    colah2.textContent = "Classic Cola - $1.49";
    const colap = document.createElement("p");
    colap.textContent = "A refreshing cola served ice-cold.";
    cola.appendChild(colah2);
    cola.appendChild(colap);

    const lemonade = document.createElement("li");
    drinksList.appendChild(lemonade);
    
    const lemonadeh2 = document.createElement("h2");
    lemonadeh2.textContent = "Lemonade - $0.99";
    const lemonadep = document.createElement("p");
    lemonadep.textContent = "Lemonade made with freshly squeezed lemons, served ice-cold.";
    lemonade.appendChild(lemonadeh2);
    lemonade.appendChild(lemonadep);

    const milkshake = document.createElement("li");
    drinksList.appendChild(milkshake);

    const milkshakeh2 = document.createElement("h2");
    milkshakeh2.textContent = "Milkshake  - $3.49";
    const milkshakep = document.createElement("p");
    milkshakep.textContent = "Choose between a vanilla, strawberry, and/or chocolate rich and creamy milkshake topped with whipped cream and peanuts.";
    milkshake.appendChild(milkshakeh2);
    milkshake.appendChild(milkshakep);

    

}