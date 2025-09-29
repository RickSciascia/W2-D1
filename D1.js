/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* string: una datatype che può contenere valori alfanumerici es. let myName = "Riccardo" è una variabile di tipo String ma anche let myFavNumber = "14" è una variabile di tipo string

  number: datatype di tipo numero che contiene valori numerici, può essere usato per sommare/dividere ecc. diversi valori
  può assumere numeri interi, decimali ecc.

  es. let data1 = 12 il contenuto della variabile sarà proprio il numero 12 che potremmo poi usare per fare operazioni come somma sottrazione prodotti o divisioni

  differentemente da myFavNumber che invece se usata in una somma restituirà il valore di stringa sommata ad un'altra stringa.

  es. se dovessi sommare myFavNumber e data1 non uscirebbe 14+12 e quindi 26 ma uscirebbe 1412 proprio perchè uno è di tipo string e l altro
  number andando quindi a generare una nuova stringa che unifica le 2 variabili

  null: assegna un valore di tipo null significa una variabile vuota, che non contiene niente per DEFINIZIONE come se fosse una scatola vuota.

  undefined: differentemente da null, undefined è una variabile NON definita, es. let Giorgio senza dare poi un valore a Giorgio come variabile è un datatype undefined perchè il computer non sa che valore assegnare a Giorgio

  boolean: true o false, è tipicamente il risultato di una comparazione tra due condizioni o valori
  */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Riccardo";
console.log("il mio nome è", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log("la somma è", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("il valore di x è", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Sciascia";
const myLastName = "Sciascia";
console.log("la variabile myName è ora il mio cognome quindi", myName);
console.log("la costante myLastName dichiarata poco sopra è ", myLastName);
/* myLastName = "Armani";  commento questa riga altrrimenti si blocca l esecuzione del codice */
console.log("la costante non è cambiata ed è infatti", myLastName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log("il risultato della sottazione è", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let controllo = name1 !== name2;
console.log("il nome è differente? ", controllo);
let checkUguaglianza = name1 === name2.toLowerCase();
console.log(
  "il nome con applicata la regola toLowerCase() è uguale?",
  checkUguaglianza
);
