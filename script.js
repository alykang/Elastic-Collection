const bottles = [ 
  {
    "name": "Happy Tears Zero Sugar",
    "year": "2024",
    "material": "Aluminum",
    "fact": "Consumers say it tastes like coke infused with a pinch of salt and peach flavor. It only sold on TikTok shop and is meant to promote Random Acts of Kindness Day. ",
    "rating": "6/10: Unique packaging but not reminiscent of Coca-Cola or Random Acts of Kindness Day",
    "img": "happytears.png",
  },
  {
    "name": "Ultimate",
    "year": "2023",
    "material": "Plastic",
    "fact": "Coca-Cola's collaboration with League of Legends and has the flavor of +XP. Many consumers claim that it tastes like Coke mixed with a variety of different fruits.",
    "rating": "7/10: The gold makes the bottle stand out and matches the +XP theme in gaming. It would have been cool if the cap was also gold.",
    "img": "ultimate.png",
  },
  {
    "name": "Starlight",
    "year": "2022",
    "material": "Plastic",
    "fact": "Released as the first flavor from Coca-Cola Creations, an innovation platform of The Coca-Cola Company focused on selling limited-edition flavors, it provides a subtle cooling sensation with the classic Coca-Cola flavor. ",
    "rating": "7/10 I like how they emultaed the concept of space and the cosmos in the label through color.",
    "img": "Starlight.png"
  },
  {
    "name": "Japan Destination Bottle",
    "year": "2017",
    "material": "Aluminum",
    "fact": "This special edition bottle can only be found in specific areas of Japan that each of the nine bottles was designed for.",
    "rating": "9/10: I love the concept of this special edition and the region specific illustrations.",
    "img": "Japan.png"
  },
  {
    "name": "Skinny Can",
    "year": "2013",
    "material": "Aluminum",
    "fact": "The skinny can was released as a response to the growing health-concious prefernces of consumers. By releasing sleeker, taller cans in smaller 250ml portions, Coca-Cola aimed to appeal to the masses once again.",
    "rating": "7/10: I don't love aluminum cans because the condensation can get bothersome (unless it's a hot day). Also, the skinny shape of the can is off-putting. ",
    "img": "skinny.png"
  },
  {
    "name": "Share a Coke",
    "year": "2011",
    "material": "Plastic made with 100% recyclable materials.",
    "fact": "The campaign originated in Australia with the goal to strengthen the connection between the company and its younger consumers as well as inspire moments of happiness amongst consumers.",
    "rating": "9/10: I really like the Share a Coke campaign. The activity of searching for a specific name or profession made a mundane task entertaining.",
    "img": "share_bottle.png"
  },
  {
    "name": "PlantBottle",
    "year": "2009",
    "material": "100% recyclable; composed of 30% plant-based materials.",
    "fact": "Since introducing PlantBottle, Coca-Cola has allowed non-competitive companies to use the technology such as Heinz Tomato Ketchup, to the fabric interior in some Ford Fusion hybrid sedans",
    "rating": "10/10: Points for sustainability!",
    "img": "plant-based.png",
  },
  {
    "name": "Aluminum Contour",
    "year": "2008",
    "material": "Aluminum",
    "fact": "The aluminum contour bottle was the most difficult to create because of the malleable nature of aluminum and the complex shape of the classic Coca-Cola contour bottle.",
    "rating": "8/10: Unique concept and the full red bottle looks really cool.",
    "img": "contourcan.png",
  },
  {
    "name": "Mini",
    "year": "2007",
    "material": "Aluminum",
    "fact": "This mini can was released because of the steady decline in soda consumption in past years. By making smaller cans, Coca-Cola saves money on packaging and it appeals to consumers who are looking to cut back their soda consumption.",
    "rating": "8/10: The mini cans are so cute and convenient for a small craving for Coke.",
    "img": "mini.png",
  },
  {
    "name": "Coca-Cola Zero",
    "material": "Aluminum",
    "year": "2005",
    "fact": "Coca-Cola Zero was the company's largest new product launch in 22 years. In the U.S. it was advertised as calorie-free rather than diet because young males associated diet with women.",
    "rating": "10/10: My favorite Coca-Cola beverage.",
    "img": "Cokezero.png",
  },
  {
    "name": "Diet Coca-Cola",
    "year": "1982",
    "material": "Aluminum",
    "fact": "The creation of Diet Coke  was strictly top secret and made a top priority; only a handful of senior executives knew about it, and team members had to agree to the assignment before getting the details.",
    "rating": "9.5/10: My second favorite Coca-Cola beverage but I drink it the most often because it is the more common than Coke Zero.",
    "img": "diet.png",
  },
  {
    "name": "2 Liter Bottle",
    "year": "1978",
    "material": "PET Plastic",
    "fact": "It became extremely popular because it was lighter and wouldn't break like glass bottles, had a resealable top, and was recyclable.",
    "rating": "10/10: Excellent invention. I think the plastic bottles have the most carbonated sodas compared to the other materials.",
    "img": "plastic.png",
  },
  {
    "name": "Aluminum Can",
    "year": "1965",
    "material": "Aluminum",
    "fact": "Coca-Cola first tested the aluminum can in 1965 because they proved to have more benefits than steel cans. However the ubiquitous can packaging was not established until 1984.",
    "rating": "8/10: It's good. Aluminum cans keep the soda cold but makes my hands really cold and the condensation can be bothersome.",
    "img": "aluminumcan.png",
  },
  {
    "name": "Steel Can",
    "year": "1955",
    "material": "Steel",
    "fact": "The early packaging on the steel cans had a picture of the contour bottle so people would know the same Coca-Cola they found inside a bottle was inside the can.",
    "rating": "3/10: I do not like the idea of drinking my Coke out of steel.",
    "img": "steelCan.png",
  },
  {
    "name": "Two Color Label",
    "year": "1961",
    "material": "Glass bottle and Applied Color Labeling",
    "fact": "When the ACL process became more advanced, the two-color full wrap label was developed. This label was mainly used in international markets.",
    "rating": "6/10: Coke in glass bottles have low carbonation but the bottle looks fancy, which I like.",
    "img": "twoColorbottle.png",
  },
  {
    "name": "The White Label",
    "year": "1957",
    "material": "Glass bottle and white Applied Color Labeling",
    "fact": "Using white Applied Color Labeling, Coca-Cola moved away from embossing the glass bottle to printing their logo on the glass",
    "rating": "5/10: I miss the color red on the bottle.",
    "img": "whiteLabel.png",
  },
  {
    "name": "The Iconic Countour Bottle",
    "year": "1916",
    "material": "Glass",
    "fact": "The patent was renewed on December 25th, 1923 and was thus coined the Christmas bottle.",
    "rating": "6/10: Iconic, but I do not think Coke tastes the best when it come from a glass bottle.",
    "img": "christmas.png",
  },
  {
    "name": "Contour Bottle",
    "year": "1915",
    "material": "Glass",
    "fact": "Developed by the Root Glass Company and inspired by the cocoa bean, the prototype never made it to production because of its unstable structure.",
    "rating": "5/10: Somewhat ugly. The big bulging center makes me uncomftorable.",
    "img": "1915contour.png",
  },
  {
    "name": "Amber Bottle",
    "year": "1906",
    "material": "Glass",
    "fact": "An amber version of the glass bottle was introduced to help it stand out from competitors. Unfortunately many knock off soda comapnies began to copy the bottle and take business away from Coca-Cola.",
    "rating": "5/10: I don't like sticker labels because they always peel off and the amber stained glass is reminiscnet of beer, not Coca-Cola.",
    "img": "amberGlass.png",
  },
  {
    "name": "Glass Bottle",
    "year": "1900",
    "material": "Glass",
    "fact": "A diamond shaped bottle with a colorful label in the center. However, the label would often peel off and lose recognizablility.",
    "rating": "5/10: Again, I don't like the sticker label. However, I do like how the logo is embossed into the glass.",
    "img": "glass.png",
  },
  {
    "name": "The First Bottle",
    "year": "1894",
    "material": "Glass with a horseshoe stopper",
    "fact": "Also known as the Hutchinson bottle, this was the first bottled product of Coca-Cola. When the stopper was removed, the seal made a 'pop' sound which coined the popular term, soda pop. ",
    "rating": "4/10: It looks heavy and inconvenient to drink out of but it was monumental for Coca-Cola so I give it 4 points.",
    "img": "firstGlass.png",
  },
]



window.addEventListener('load', ()=>{
  init();
})


const init = function(){
  const timeline = document.getElementById("timeline");

  bottles.forEach(function(bottle, index){
    const bottleItem = buildBottleItem(bottle, index);
    timeline.innerHTML = timeline.innerHTML + bottleItem;
  });
}
const buildBottleItem = function(bottle, index){
  return `<div class="section" id="section">
              <img src="${bottle.img}" alt="share a coke">
              <div class="line"></div>
              <div class="dot"></div>
                <div class="year">${bottle.year}</div>
            <div class="details">
                <div class="one">${bottle.name}</div>
                <div class="two">${bottle.material}</div>
                <div class="three">${bottle.fact}</div>
                <div class="four">${bottle.rating}</div>
            </div>
          </div>`
}


const title = document.getElementById('title-card');
const intro = document.getElementById('intro');

// Add a click event listener to the cover image
title.addEventListener('click', function() {
    // Fade out the cover
    title.style.opacity = '0';
    title.style.transition = 'opacity 1s ease';
    // Fade in the intro
    setTimeout(() => {
      intro.style.opacity = '1';
      intro.style.display = 'flex';
    }, 1000);
});
addEventListener("DOMContentLoaded", (event) => {

  const firstSection = document.querySelector('.bottle-container');

  // Add click event listener to the intro element
  intro.addEventListener('click', function() {
      // Scroll to the first section
      firstSection.scrollIntoView({ behavior: 'smooth' });
  });
});
