console.log("coucou depuis la console");

// Fonction bonjour Monde
function helloWorld() {
  console.log("Bonjour Monde");
}

bonjour = document.getElementById('bonjour_monde');
bonjour.addEventListener('click', helloWorld);

// Fonction salut
function salut() {
  answer = prompt("C'est quoi ton blase ?");
  console.log("Bonjour, " + answer);
}

salut_var = document.getElementById('salut');
salut_var.addEventListener('click', salut);

// Fonction Calcul
function calculRapide() {
  answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
  console.log("le résultat est : " + factorielle(Number(answer)));
}

function factorielle(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

calcul = document.getElementById('calcul');
calcul.addEventListener('click', calculRapide);

// Fonction Pyramide
function pyramideMario() {
  stories = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  let build_line = "#";

  for (let count = 1; count <= stories - 1; count++) {
    build_line = " " + build_line;
  }

  console.log(build_line);

  for (let count = 1; count <= stories - 1; count++) {
    build_line = build_line.replace(" #", "##");
    console.log(build_line);
  }

}

pyramide = document.getElementById('pyramide');
pyramide.addEventListener('click', pyramideMario);

// Fonction Startup
function startupNation() {

  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  let entrepreneurs_count = entrepreneurs.length;
  let seventies = [];
  let names = [];
  const entrepreneur = { first: "", last: "" }

  console.log("Quels sont les entrepreneurs nés dans les années 70 ?");

  for (let count = 0; count <= entrepreneurs_count - 1; count++) {
    if (entrepreneurs[count].year <= 1979 && entrepreneurs[count].year >= 1970) {
      seventies.push(entrepreneurs[count].last);
    }
  }
  console.log(seventies);

  console.log("Voici le prénom et le nom des entrepreneurs");

  for (let count = 0; count <= entrepreneurs_count - 1; count++) {
    names[count] = entrepreneur
    names[count].first = entrepreneurs[count].first;
    names[count].last = entrepreneurs[count].last;
  }

  console.log(names)
  console.log(entrepreneurs)


  console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
  console.log("Voici les entrepreneurs par ordre alphabétique du nom de famille");

}

startup = document.getElementById('startup');
startup.addEventListener('click', startupNation);

// Fonction Biblio
function bibliothecaire() {
  console.log("Bonjour Monde");
}

biblio = document.getElementById('biblio');
biblio.addEventListener('click', bibliothecaire);

// Fonction Code
function lifeCode() {
  console.log("Bonjour Monde");
}

life = document.getElementById('life_code');
life.addEventListener('click', lifeCode);

// Fonction Bot
function acneBot() {
  let answer = "";
  let bot = "alors ?";

  while (answer !== "1234") {
    answer = prompt(bot);

    console.log(answer[answer.length - 1])

    if (answer[answer.length - 1] === "?") {
      bot = "Ouais Ouais...";
      console.log(bot);
    } else if (answer === "") {
      bot = "t'es en PLS ?";
      console.log(bot);
    } else if (answer === answer.toUpperCase()) {
      bot = "Pwa, calme-toi...";
      console.log(bot);
    } else if (answer.indexOf("Fortnite") !== -1) {
      bot = "on se fait une partie soum-soum ?";
      console.log(bot);
    } else {
      bot = "balek";
      console.log(bot);
    }

  }
  console.log("Merci, on s'est bien marré. Bye !");
}

bot = document.getElementById('bot');
bot.addEventListener('click', acneBot);
