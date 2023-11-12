let fieldset=document.createElement('fieldset');
document.querySelector('main > h1').after(fieldset);
// legend
let legend=document.createElement('legend');
legend.innerHTML=`Language`;
document.querySelector('main > fieldset').prepend(legend);
//
let label=document.createElement('label');
document.querySelector('main > fieldset').prepend(label);
// create checkbox
let checkbox=document.createElement('input');
checkbox.setAttribute('type','checkbox');
document.querySelector('main > fieldset > label').append(checkbox);
//view select language
let languageSelect=document.createElement('span');
languageSelect.style.cssText=`margin-left:3%;`;
languageSelect.innerHTML=`English`;
document.querySelector('main > fieldset > label').append(languageSelect);

document.querySelector('input[type="checkbox"]').addEventListener('click',()=>{
  if(document.querySelector('input[type="checkbox"]').checked){
    // console.log('CheckeD oN English language');
    document.querySelector('bbody > main:nth-child(2) > p:nth-child(3)').innerHTML=`The second method is when the site already exists, but you only need to embed the translation. For money regions or to display ads in developed countries. As they say. Kazakhstan, Uzbekistan, Kyrgyzstan. After the collapse of the USSR, they jumped forward and are now far behind in terms of living standards.`;
    document.querySelector('body > main:nth-child(2) > p:nth-child(4)').innerHTML=`In this translation method: from the Google Chrome developer panel or mastic. Yes, and the whole danger is that the selectors of Mazila and Google Chrome sometimes do not match. If you just copy and paste it. Therefore, the method with id is much more stable. Because browsers dynamically insert tags mainly in the header and behind the footer. Most often there is nothing at the beginning of the body of the document. Therefore, the method also works, but anything can happen and this feature must be taken into account.`;
    document.querySelector('body > main:nth-child(1) > p:nth-child(5)').innerHTML=`In this javascript script, selectors are copied from copy > CSS selector`;
    document.querySelector('body > main:nth-child(2) > p:nth-child(5)').innerHTML=`English`;
  }else{
    // console.log('checked off Russian language');
    document.querySelector('body > main:nth-child(1) > p:nth-child(3)').innerHTML=`Второй способ когда сайт уже есть, а нужно встроить только перевод. Для денежных регионов или для показе объявлений в развитых странах. Как говорят. Казахстан, Узбекистан, Кыргызстан. После распада СССР скакнули вперед и сейчас далеко позади по уровню жизни.`;
    document.querySelector('body > main:nth-child(1) > p:nth-child(4)').innerHTML=`В этом способе перевода: из панели разработчика гугл хрома или мазилы. Да, и вся опасность что селекторы мазилы и гугл хрома иногда не совпадают. Если его просто скопировать и вставить. Поэтому способ с id куда стабильнее. Потому что браузеры вставляют динамическим способом теги в основнов в шапку и за футером. Чаще всего в начале тела документа ничего нет. Поэтому способ тоже рабочий, но всякое бывает и эту особенность нужно учитывать.`;
    document.querySelector('body > main:nth-child(1) > p:nth-child(5)').innerHTML=`В этом скрипте на javascript скопированы селекторы из мазилы copy > CSS selector `;
    document.querySelector('body > main:nth-child(1) > fieldset:nth-child(2) > label:nth-child(1) > span:nth-child(2)').innerHTML=`Russian`;
  }
});
