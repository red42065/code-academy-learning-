const team = {
  _players: [
    {
      firstName: "Analisa",
      lastName: "Anderson",
      age: 21,
    },
    {
      firstName: "sucheth",
      lastName: "mekala",
      age: 23,
    },
    {
      firstName: "ria",
      lastName: "mekala",
      age: 2,
    },
  ],
  _games: [
    {
      opponent: "ripply",
      teamPoints: 3,
      opponentPoints: 2,
    },
    {
      opponent: "gong",
      teamPoints: 7,
      opponentPoints: 2,
    },
    {
      opponent: "uup",
      teamPoints: 9,
      opponentPoints: 7,
    },
  ],

  get players() {
    if (this._players) {
      return this._players;
    } else {
      return "no valid players";
    }
  },

  get games() {
    if (this._games) {
      return this._games;
    } else {
      return "no valid games";
    }
  },

  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },

  addGame(newOpponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    });
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
