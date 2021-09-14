const team = {

  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 16
    },
    {
      firstName: 'Joseph',
      lastName: 'Hernandez',
      age: 17
    },
    {
      firstName: 'Rudy',
      lastName: 'Flores',
      age: 18
    }
  ],
  _games:[

    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Broncy',
      teamPoints: 45,
      opponentPoints: 28
    },
    {
      opponent: 'Bronsa',
      teamPoints: 41,
      opponentPoints: 26
    },
  ],

  get players(){
    return this._players;

  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    let player = {
      fisrtName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);

  },
  addGame(opp, points, oppoPoints){
   const game = {
     opponent: opp,
     teamPoints: points,
     opponentPoints: oppoPoints
   }
   this.games.push(game);

    }
  };


  // involk add player below team object
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  //console.log(team.players);
  team.addGame('Titans',100,98);
  team.addGame('Tito',102,100);
  team.addGame('Tity',101,99);




console.log(team.games);
