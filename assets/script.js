$(function(){
  
  const cats = [
    {
      nome: 'Peppe',
      age: 2,
      color: '#D94242',
      gender: 'male'
    },
    {
      nome: 'Paul',
      age: 3,
      color: '#139019',
      gender: 'male'
    },
    {
      nome: 'Morpheus',
      age: 1,
      color: '#070707',
      gender: 'male'
    },
    {
      nome: 'Luna',
      age: 0.8,
      color: '#213F45',
      gender: 'female'
    },
    {
      nome: 'Briciola',
      age: 5,
      color: '#DED604',
      gender: 'female',
    }
  ];

  cats.forEach((cat) =>{
   $('#mailes-1 ul').append(listGenerator(cat.color, cat.nome));
  });

  const pink = '#FF00FC';
  const blue = '#1F10B2';

  const newCats = cats.map((cat) => {
    let color = (cat.gender === 'female') ? pink : blue;
    let opacity = cat.age / 10;
    return{
      ...cat,
      ribbon:{
        color,
        opacity
      }
    }
  });

  const femaleCats = newCats.filter((cat) => cat.gender === 'female');
  const maleCats = newCats.filter((cat) => cat.gender === 'male');

  femaleCats.forEach((cat) =>{
    $('#mailes-2-female ul').append(listGenerator(cat.color, cat.nome, cat.ribbon.color, cat.ribbon.opacity));
   });

   maleCats.forEach((cat) =>{
    $('#mailes-2-male ul').append(listGenerator(cat.color, cat.nome, cat.ribbon.color, cat.ribbon.opacity));
   });

   const orderedCats = [...femaleCats,...maleCats];

   const catsTarget = orderedCats.map((cat) =>{
     const {nome, color, ribbon} = cat;
     $('#mailes-3 ul').append(listGenerator(color, nome, ribbon.color, ribbon.opacity));
     return {name,color,ribbon};
   });

});

function listGenerator(catColor, name, ...ribbon){
  let ribbonTag = '';
  if(ribbon.length > 0){
    ribbonTag =`<i class='fas fa-ribbon'
                          style='color:${ribbon[0]};
                                opacity:${ribbon[1]}'></i>`
  }

  let html = `
    <li>
      <i class='fas fa-cat' style='color:${catColor}'></i>
      ${ribbonTag}
      <span>${name}</span>
    </li>
  `;
  return html;
}