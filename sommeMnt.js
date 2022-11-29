var obj = [
    { 'name': 'P1', 'mnt': 1500 },
    { 'name': 'P1', 'mnt': 1502 },
    { 'name': 'P2', 'mnt': 2006 },
    { 'name': 'P3', 'mnt': 4505 }
];

function sumMnt(objet,key){
    var valeurInitiale = 0;
    var somme = objet.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante[key]
        , valeurInitiale
    );

    console.log("somme= "+somme);
    return somme
}
sumMnt(obj,'mnt')