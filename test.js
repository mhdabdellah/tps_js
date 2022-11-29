var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var elementsInvalides = 0;

function filtrerParID(obj) {
  // Si c'est un nombre
  if (obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}

var arrByID = arr.filter(filtrerParID);

console.log('Tableau filtré\n', arrByID);
// Le tableau filtré est :
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Nombre d\'éléments invalides = ', elementsInvalides);
// Nombre d'éléments invalides 4
