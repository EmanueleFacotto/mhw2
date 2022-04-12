const checked = 'checked.png'
const unChecked = 'images/unchecked.png'

const domande= document.querySelectorAll('.choice-grid div');

const pulsante = document.querySelector('#ricominciamo')
pulsante.addEventListener('click', Reset);

const risultato=document.querySelector(".risultato");

for (const domanda of domande) {
  domanda.addEventListener('click', seleziona);
}

let risposte = {
  'one': '',
  'two': '',
  'three': ''
}

function risposteSelezionate() {
    if(risposte['one']==='') 
      return false
        if(risposte['two']==='')
            return false;
          if(risposte['three']==='')
              return false;
   return true;  
}


function seleziona(e) {
const sectionElement = e.currentTarget;
const sceltaID=sectionElement.dataset.choiceId
const sceltaQuestionId= sectionElement.dataset.questionId;
const scartati=[];

let scelta='';

if (!risposteSelezionate()){

 for (const domanda of domande) {
  if(domanda.dataset.choiceId === sceltaID && domanda.dataset.questionId === sceltaQuestionId ){
    scelta=domanda;
  }else if(sceltaQuestionId === domanda.dataset.questionId){
    scartati.push(domanda);
  }
}
  for (const scarto of scartati){
    const noSpunta= scarto.querySelector('.checkbox');
    noSpunta.src=unChecked;
    scarto.style.backgroundColor= "#f4f4f4";
    scarto.classList.add('opacizza');
      }
  const Spunta= scelta.querySelector('.checkbox');
  Spunta.src=checked;
  scelta.classList.remove('opacizza');
  scelta.style.backgroundColor= "#cfe3ff";
  risposte[sceltaQuestionId]=sceltaID;
    }
    if (risposteSelezionate()){
      risultati();
      } 
  }


function risultati(){
let max;

if (risposte['one']===risposte['two']){
  max=risposte['one'];
} else if (risposte['one']===risposte['three']){
  max=risposte['one'];
} else if (risposte['two']===risposte['three']){
  max=risposte['two'];
} else {
  max=risposte['one'];
}
const titolo=risultato.querySelector('#titolo');
const testo=risultato.querySelector('#Contenuto');
testo.innerHTML= RESULTS_MAP[max].contents;
titolo.innerHTML= RESULTS_MAP[max].title;
risultato.classList.remove("hidden");
}

function Reset(){
  for (const domanda of domande) {
  domanda.classList.remove("opacizza");
  domanda.style.backgroundColor = "#f4f4f4";
  const resetIMG= domanda.querySelector('.checkbox');
  resetIMG.src=unChecked;
  risultato.classList.add("hidden");
     } 
   risposte = {
    'one': '',
    'two': '',
    'three': ''
   }
}




