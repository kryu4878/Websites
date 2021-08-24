let html = '';

for ( let i = 0; i < pets.length; i++ ) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <h4>${pet.personality}</h4>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
   `;
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);