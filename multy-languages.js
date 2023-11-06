//create fieldset and input checkbox;
const boxFieldset=document.createElement("fieldset");
boxFieldset.setAttribute('id','boxFieldset');
document.querySelector('main').prepend(boxFieldset);
//box fieldset
const label=document.createElement('legend');
label.innerHTML='language';
document.querySelector('fieldset').append(label);
//lat
const labelLat=document.createElement('label');
document.querySelector('fieldset').prepend(labelLat);
const checkInputLat=document.createElement('input');
checkInputLat.type = 'checkbox';
checkInputLat.name = 'checkLanguageLat';
document.querySelector('fieldset > label').append(checkInputLat);
const switchLanguageLat=document.createElement('span');
switchLanguageLat.innerHTML=`lat`;
document.querySelector('fieldset > label').append(switchLanguageLat);
//rus
const labelRus=document.createElement('label');
document.querySelector('fieldset').prepend(labelRus);
const checkInputRus=document.createElement('input');
checkInputRus.type = 'checkbox';
checkInputRus.name = 'checkLanguageRus';
document.querySelector('fieldset > label').append(checkInputRus);
const switchLanguageRus=document.createElement('span');
switchLanguageRus.innerHTML=`rus`;
document.querySelector('fieldset >  label').append(switchLanguageRus);
//eng
const labelEng=document.createElement('label');
document.querySelector('fieldset').prepend(labelEng);
const checkInput=document.createElement('input');
checkInput.type = 'checkbox';
checkInput.name = 'checkLanguageEng';
document.querySelector('fieldset > label').append(checkInput);
const switchLanguage=document.createElement('span');
switchLanguage.innerHTML=`eng`;
document.querySelector('fieldset > label').append(switchLanguage);
//create fieldset and input finished O_o but it's would have been better to write with hands in document.html ^_^
// select language
boxFieldset.elements.checkLanguageEng.addEventListener('click',()=>{
  // console.log('Eng');
  boxFieldset.elements.checkLanguageLat.checked=false;
  boxFieldset.elements.checkLanguageRus.checked=false;
  languageSelected();
  // window.location.search='?eng';//reloads
  history.pushState(null,null, '?eng');

});
boxFieldset.elements.checkLanguageLat.addEventListener('click',()=>{
  // console.log('Lat');
  boxFieldset.elements.checkLanguageEng.checked=false;
  boxFieldset.elements.checkLanguageRus.checked=false;
  languageSelectedLat();
  // window.location.search='?lat';//reloads
  history.pushState(null,null, '?lat');
});
boxFieldset.elements.checkLanguageRus.addEventListener('click',()=>{
  // console.log('Rus');
  boxFieldset.elements.checkLanguageLat.checked=false;
  boxFieldset.elements.checkLanguageEng.checked=false;
  languageSelectedRus();
  // window.location.search='?rus'; //reloads
  history.pushState(null,null, '?rus');
});
function languageSelected(){
  document.querySelector('head > meta[name="description"]').setAttribute('content','switching languages in pure Javascript, multi-language script for a website, one-pager, landing page.');
  document.title='multy language script for website';
  for(let j=0;j<=document.querySelectorAll('#eng').length;j++){
    if(boxFieldset.elements.checkLanguageEng.checked==true){
      if(document.querySelectorAll('#rus')[j]==null){
        // console.log('oooK');
      }else{
        document.querySelectorAll('#lat')[j].style.display='none';
      }
      if(typeof document.querySelectorAll('#lat')[j]!=="undefined"){
        document.querySelectorAll('#eng')[j].style.display='block';
      }
      if(document.querySelectorAll('#rus')[j]==null){
        // console.log('oojiK');
      }else{
        document.querySelectorAll('#rus')[j].style.display='none';
      }
    }//ifMainBox
  }
}
function languageSelectedLat(){
  document.querySelector('head > meta[name="description"]').setAttribute('content','mutandi linguas in pura Javascript, multi-language script pro a website, one-pager, pagina.');
  document.title='multa lingua scriptum pro website';
  for(let j=0;j<=document.querySelectorAll('#lat').length;j++){
    if(boxFieldset.elements.checkLanguageLat.checked==true){
      if(document.querySelectorAll('#rus')[j]==null){
        // console.log('rus null');
      }else{
        document.querySelectorAll('#rus')[j].style.display='none';
      }
      if(document.querySelectorAll('#eng')[j]==null){
        // console.log('eng null');
      }else{
        document.querySelectorAll('#eng')[j].style.display='none';
      }
      if(typeof document.querySelectorAll('#lat')[j]!=="undefined"){
        document.querySelectorAll('#lat')[j].style.display='block';
      }
    }//ifMain
  }
}
function languageSelectedRus(){
  document.querySelector('head > meta[name="description"]').setAttribute('content','переключение языков на чистом яваскрипте, мультиленговый скрипт для сайта, одностраничника, кредитный пейдж.');
  document.title='многоязычный скрипт для сайта';
  for(let j=0;j<=document.querySelectorAll('#rus').length;j++){
  if(boxFieldset.elements.checkLanguageRus.checked==true){
      if(document.querySelectorAll('#eng')[j]==null){
        // console.log('use');
      }else{
        document.querySelectorAll('#eng')[j].style.display='none';
      }
      if(document.querySelectorAll('#lat')[j]==null){
        // console.log('fdsfe');
      }else{
        document.querySelectorAll('#lat')[j].style.display='none';
      }
      if(typeof document.querySelectorAll('#rus')[j]!=="undefined"){
        document.querySelectorAll('#rus')[j].style.display='block';
      }
    }//ifMainBox
  }//for
}//funcion
window.addEventListener('DOMContentLoaded',useLocation);
function useLocation(){
  if(window.location.search=="?eng"){
    boxFieldset.elements.checkLanguageEng.checked=true;
    languageSelected();
  }else if(window.location.search=='?lat'){
    boxFieldset.elements.checkLanguageLat.checked=true;
    languageSelectedLat();
  }else if(location.search=='?rus'){
    boxFieldset.elements.checkLanguageRus.checked=true;
    languageSelectedRus();
  }else{
    console.log(window.location.search);
  }
}
