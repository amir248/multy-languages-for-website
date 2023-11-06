//create fieldset and input checkbox;
const boxFieldset=document.createElement("fieldset");
boxFieldset.setAttribute('id','boxFieldset');
document.querySelector('main').prepend(boxFieldset);
//box fieldset

const label=document.createElement('legend');
label.innerHTML='language';
document.querySelector('fieldset').append(label);

//eng
const checkInput=document.createElement('input');
checkInput.type = 'checkbox';
checkInput.name = 'checkLanguageEng';
document.querySelector('fieldset').append(checkInput);

const switchLanguage=document.createElement('span');
switchLanguage.innerHTML=`eng`;
document.querySelector('fieldset').append(switchLanguage);

//rus
const checkInputRus=document.createElement('input');
checkInputRus.type = 'checkbox';
checkInputRus.name = 'checkLanguageRus';
document.querySelector('fieldset').append(checkInputRus);
const switchLanguageRus=document.createElement('span');
switchLanguageRus.innerHTML=`rus`;
document.querySelector('fieldset').append(switchLanguageRus);

//lat
const checkInputLat=document.createElement('input');
checkInputLat.type = 'checkbox';
checkInputLat.name = 'checkLanguageLat';
document.querySelector('fieldset').append(checkInputLat);
const switchLanguageLat=document.createElement('span');
switchLanguageLat.innerHTML=`lat`;
document.querySelector('fieldset').append(switchLanguageLat);

// select language
boxFieldset.elements.checkLanguageEng.addEventListener('click',()=>{
  // console.log('Eng');
  window.location.search='?eng';
  boxFieldset.elements.checkLanguageLat.checked=false;
  boxFieldset.elements.checkLanguageRus.checked=false;
  languageSelected();
});
boxFieldset.elements.checkLanguageLat.addEventListener('click',()=>{
  // console.log('Lat');
  window.location.search='?lat';
  boxFieldset.elements.checkLanguageEng.checked=false;
  boxFieldset.elements.checkLanguageRus.checked=false;
  languageSelectedLat();
});
boxFieldset.elements.checkLanguageRus.addEventListener('click',()=>{
  // console.log('Rus');
  window.location.search='?rus';
  boxFieldset.elements.checkLanguageLat.checked=false;
  boxFieldset.elements.checkLanguageEng.checked=false;
  languageSelectedRus();
  // useLocation();
});
function languageSelected(){
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
window.addEventListener('DOMContentLoaded',useLocation());
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
