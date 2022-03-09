// 1 Inserito un numero, dire se è pari o disprari

let num=prompt("Inserisci un numero",0);
if (num%2==0) alert(num + " è un numero pari.");
else alert(num+" è un numero dispari.");

// 2 inserite due misure una in pollici e l'altra in centimetri dire quel'è la maggiore

let pollici= prompt("inserisci una misura in pollici");
let centimetri= prompt("Inserisci una misura in centimetri");

if(pollici*2.54>centimetri) alert(pollici+" pollici è la misura maggiore");
else alert(centimetri+"cm è la misura maggiore");

// 3 inserite le misure dei latri di 2 rettangoli dire quale delle due ha la superficce maggiore
alert("Inserisci base e altezza di due rettangoli A e B");
let base=prompt("Inserisci base di A: ");
let altezza=prompt("inserisci altezza di A: ");
let AreaA= base*altezza;
base=prompt("Inserisci base di B: ");
altezza=prompt("inserisci altezza di B: ");
let AreaB= base*altezza;
if(AreaA>AreaB) alert("L'area del rettangolo A è la maggiore");
else alert("l'area del rettangolo B è la maggiore");


// 4 inserita un eta dire se siamo in presenza di un minorenne o maggiorenne
num=prompt("Quanti anni hai?", 15);
if(num>=18) alert("Sei maggiorenne");
else alert("Sei Minorenne");

// 5 Inserito un carattere, dire se è una vocale o una consonante
num=prompt("Inserisci una lettera", "a");
num.toLowerCase;
if(num.charAt("a")||num.charAt("e")||num.charAt("i")||num.charAt("o")||num.charAt("u"))
    alert("il carattere è una vocale" );
else
    alert("il carattere è una consonante");

// 6 inseriti tre numeri A,B,C dore se C è compreso tra i primi due
let A=0;
let B=0;
let C=0;
alert("Inseriti tre numeri A,B,C dore se C è compreso tra i primi due");
A=prompt("Iserisci A",1);
A=prompt("Iserisci B",5);
A=prompt("Iserisci C",3);
if(C>B&&C<A) 
    alert("C è compreso nel intervallo A-B");
else(B>C&&C>A) 
    alert("C non è compreso nel intervallo A-B");