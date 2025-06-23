//! Javascript Advanced Minioppgave: High order methods

//! Online store - Alvas Magiske Marked

// Les oppgaveteksten NØYE.

// Legg til kommentarer i koden din som kort beskriver hva koden gjør.

// Du får et objekt-array som representerer produkter i en nettbutikk, Alvas Magiske Marked. Alva er en innovativ gründer som selger alt fra elektronikk til klær og kjøkkenapparater. En dag møter hun en utfordring: hun trenger hjelp til å analysere produktlisten sin for å få bedre kontroll på lageret.

// Kan du hjelpe Alva med å løse problemene hennes? Hvis du klarer det, lover hun deg 20% rabatt på hele butikken! 🎉
// Case 1.

//     Finn de mest prisgunstige varene for Alva
//     Bruk .filter() for å hente ut alle produkter som koster mindre enn 200 gullmynter. Disse varene selger hun ofte ut raskt, og hun vil gjerne ha dem samlet i en liste.

//     Lag en liste med produktnavnene for rask oversikt
//     Bruk .map() for å lage en liste som kun inneholder navnene på produktene. Alva vil bruke denne listen til å skrive ut skilt i butikken.

//     Finn de populære elektronikk-varene
//     Alva elsker elektronikk, men hun har mistet oversikten over hva som finnes i denne kategorien. Bruk en kjedet kombinasjon av .filter() og .map() for å lage en liste som kun inneholder navnene til produktene i kategorien "electronics".

//     Finn luksusproduktene i Alvas sortiment
//     Bruk .some() for å sjekke om det finnes produkter som koster mer enn 1000 gullmynter. Hvis ja, vil Alva legge dem i et spesielt luksushjørne i butikken.

//     Regn ut verdien av hele Alvas lager
//     Bruk .reduce() for å finne den totale kostnaden av alle produktene. Alva må vite dette for å sette riktig pris på forsikringen av varene sine.

//  Case 2:

// Alva har bestemt seg for å rydde opp i lageret sitt ved å kjøre et stort salg. Hun trenger din hjelp til å analysere produktene og finne de beste måtene å sette opp tilbudene på.

//     Finn alle produkter som koster mindre enn 200 – disse skal få en ekstra rabatt for å bli solgt ut raskt.
//     Lag en liste med navnene på alle produktene - slik at Alva kan printe ut et reklameark for salget.
//     Finn navnene på alle produkter i kategorien "clothing" – klær selger alltid godt, og Alva vil markedsføre disse spesielt.
//     Sjekk om det finnes produkter som koster mer enn 1000 – de dyre produktene kan være litt vanskelige å selge, og Alva vurderer å gi spesialtilbud på dem.
//     Regn ut hvor mye hele lageret er verdt før salget starter - Så Alva vet hvor mye hun kan tjene.

const products = [
   { name: "Smartphone", price: 800, category: "electronics" },
   { name: "Headphones", price: 150, category: "electronics" },
   { name: "Coffee Maker", price: 100, category: "home appliances" },
   { name: "Blender", price: 250, category: "home appliances" },
   { name: "Laptop", price: 1200, category: "electronics" },
   { name: "T-shirt", price: 50, category: "clothing" },
   { name: "Sneakers", price: 300, category: "clothing" },
];
