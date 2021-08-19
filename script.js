console.log("coucou depuis la console");

// ---------------------------------------------------------------------------


// Fonction bonjour Monde
function helloWorld() {
  console.log("Bonjour Monde");
}

bonjour = document.getElementById('bonjour_monde');
bonjour.addEventListener('click', helloWorld);

// ---------------------------------------------------------------------------

// Fonction salut
function salut() {
  answer = prompt("C'est quoi ton blase ?");
  console.log("Bonjour, " + answer);
}

salut_var = document.getElementById('salut');
salut_var.addEventListener('click', salut);

// ---------------------------------------------------------------------------

// Fonction Calcul
function calculRapide() {
  answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
  console.log("le résultat est : " + factorielle(Number(answer)));
}

// Fonction Factorielle
function factorielle(n) {
  let fact = n
  if (n === 0 || n === 1)
    return 1
  else {
    while (n > 1) {
      fact *= (n - 1)
      n -= 1
    }
    return fact
  }
}

calcul = document.getElementById('calcul');
calcul.addEventListener('click', calculRapide);

// ---------------------------------------------------------------------------

// Fonction Mario

function mario() {
  etage = prompt("Combien d'étage pour ta pyramide ?")
  for (i = 1; i <= etage; i++) {
    ligne = (" ".repeat(etage - i) + "#".repeat(i))
    console.log(ligne)
  }
}

// Fonction Startup

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

function entrepreneurs_70() {
  liste = entrepreneurs
    .filter(el => el.year < 1980 && el.year > 1969)
    .map(tab => (tab.first + " " + tab.last))
    .join(', ')

  console.log("Quels sont les entrepreneurs nés dans les années 70 ?");
  console.log("Les entrepreneurs nés dans les 70s sont :", liste)
}

function nom_prenom() {
  liste = entrepreneurs.map(el => (el.first + " " + el.last))
  console.log("Voici le prénom et le nom des entrepreneurs", liste);
}

function age() {
  console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
  age = entrepreneurs.map(el => `${el.first} ${el.last} a/aurait aujourd'hui ${2021 - el.year} ans`)
  console.log(age)
}

function sort_az() {
  console.log("Tri par ordre alphabétique :")
  console.log(entrepreneurs.sort((a, b) => a.last < b.last ? -1 : 1))
}

function startupNation() {

  let entrepreneurs_count = entrepreneurs.length;
  let seventies = [];
  let names = [];
  let ages = [];


  entrepreneurs_70()
  nom_prenom()
  age()
  sort_az()


}
startup = document.getElementById('startup');
startup.addEventListener('click', startupNation);


// Fonction Biblio

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function bibliothecaire() {

  console.log("Liste initiale de livres :", books)

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  not_rented_count(books)

  console.log("Quel est livre le plus emprunté ?")
  most_rented(books)

  console.log("Trouve le livre avec l'ID: 873495")
  find_book(books, 873495)

  console.log("Supprime le livre avec l'ID: 133712")
  delete_book(books, 133712)
  console.log(books)

  console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
  books_sort(books)
}


function not_rented_count(books_arr) {
  let not_rented = 0;
  books_arr.forEach(book => book.rented === 0 ? not_rented += 1 : not_rented += 0)
  not_rented === 0 ? console.log("tous les livres ont été empruntés au moins une fois") : console.log("certains livres n'ont pas étés empruntés")
}

function most_rented(books_arr) {
  console.log(`Le livre le plus emprunté est : `, books_arr.sort((a, b) => (b.rented - a.rented))[0].title)
}

function find_book(books_arr, searched_id) {
  console.log(books_arr.filter(book => book.id === searched_id)[0].title)
}

function delete_book(books_arr, searched_id) {
  books_arr.splice(books_arr.indexOf(books_arr.filter(book => book.id === searched_id)[0]), 1)
}

function books_sort(books_arr) {
  books_arr.sort((a, b) => a.title < b.title ? -1 : 1)
  console.log(books_arr)
}

biblio = document.getElementById('biblio');
biblio.addEventListener('click', bibliothecaire);

// Fonction Code
function lifeCode() {
  let sequence1 = "CCGUCGUUGCGCUACAGC";
  let sequence2 = "CCUCGCCGGUACUUCUCG";
  let sequences = [sequence1, sequence2]
  let protein = [];


  // UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
  // CCU ou CCC ou CCA ou CCG => Proline
  // UUA ou UUG => Leucine
  // UUU ou UUC => Phénylalanine
  // CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
  // UAU ou UAC => Tyrosine

  sequences.forEach(sequence => {
    protein = [];
    for (let count = 0; count <= (sequence.length) / 3 - 1; count++) {
      // console.log(count)
      let codon = sequence.slice(count * 3, count * 3 + 3)
      // console.log(codon)
      switch (codon) {
        case 'UCC':
        case 'UCU':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
          protein.push('Serine');
          break;
        case 'CCG':
        case 'CCA':
        case 'CCC':
        case 'CCU':
          protein.push("Proline");
          break;
        case 'UUA':
        case 'UUG':
          protein.push("Leucine");
          break;
        case 'UUU':
        case 'UUC':
          protein.push("Phénylalanine");
          break;
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
          protein.push("Arginine");
          break;
        case 'UAU':
        case 'UAC':
          protein.push("Tyrosine");
          break;

        default:
          console.log("BUG");
          break;
      }
    }
    console.log(`Séquence ${sequence} :`, protein.join("-"));
  })

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
