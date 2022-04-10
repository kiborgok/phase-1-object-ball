const gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};

function numPointsScored(playerName) {
  const players = "players";
  const points = "points";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let allPlayers = gameObject[key][players];
      for (const key in allPlayers) {
        if (allPlayers[key] === allPlayers[playerName]) {
          return allPlayers[key][points];
        }
      }
    }
  }
}

function shoeSize(playerName) {
  const players = "players";
  const shoe = "shoe";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let allPlayers = gameObject[key][players];
      for (const key in allPlayers) {
        if (allPlayers[key] === allPlayers[playerName]) {
          return allPlayers[key][shoe];
        }
      }
    }
  }
}

function teamColors(tName) {
  const teamName = "teamName";
  const colors = "colors";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let team = gameObject[key];
      if (team[teamName] === tName) {
        return team[colors];
      }
    }
  }
}

function teamNames() {
  const teamNames = [];
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let team = gameObject[key];
      teamNames.push(team["teamName"]);
    }
  }
  return teamNames;
}

function playerNumbers(tName) {
  const jerseyNumbers = [];
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let team = gameObject[key];
      if (team["teamName"] === tName) {
        let players = team["players"];
        for (const key in players) {
          jerseyNumbers.push(players[key]["number"]);
        }
      }
    }
  }
  return jerseyNumbers;
}

function playerStats(playerName) {
  const players = "players";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let allPlayers = gameObject[key][players];
      for (const key in allPlayers) {
        if (allPlayers[key] === allPlayers[playerName]) {
          return allPlayers[key];
        }
      }
    }
  }
}

function bigShoe() {
  let bigShoeArray = [];
  const players = "players";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let allPlayers = gameObject[key][players];
      for (const key in allPlayers) {
        bigShoeArray.push(allPlayers[key]["shoe"]);
      }
    }
  }
  let bigShoe = Math.max(...bigShoeArray);

  return bigShoe;
}

function bigShoeRebounds() {
  const players = "players";
  if (typeof gameObject === "object") {
    for (const key in gameObject) {
      let allPlayers = gameObject[key][players];
      for (const key in allPlayers) {
        if (allPlayers[key]["shoe"] === bigShoe()) {
          return allPlayers[key]["rebounds"];
        }
      }
    }
  }
}
