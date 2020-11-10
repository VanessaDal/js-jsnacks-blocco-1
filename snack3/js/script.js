// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

var team=[{'nome':'juventus', 'punti':0, 'falli':0},
          {'nome':'inter', 'punti':0, 'falli':0},
          {'nome':'catania', 'punti':0, 'falli':0},
          {'nome':'napoli', 'punti':0, 'falli':0},
          {'nome':'roma', 'punti':0, 'falli':0}
         ];

// console.log(team);

for (var index = 0; index < team.length; index++) {
    team[index].punti=Math.floor(Math.random()*10+1);
    team[index].falli=Math.floor(Math.random()*10+1);
}

console.log(team);