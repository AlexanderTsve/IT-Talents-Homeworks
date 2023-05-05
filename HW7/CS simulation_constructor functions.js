"use strict";

/**
 * Generates two teams of players - either one player per team or three players per team or five players per team
 * @returns an array of arrays containing the two teams
 */

function generateTeams() {
  const arrOfPlayers = [];
  const teamContra = [];
  const teamTerror = [];
  const arrOfPreviousPlayers = [];
  const arrOfPlayerNum = [2, 6, 10];
  const index = Math.floor(Math.random() * arrOfPlayerNum.length);

  /**
   *Generates a random player.
   */

  function generatePlayer() {
    const playerNames = [
      "Django",
      "Boba Fett",
      "Leon",
      "Frank Martin",
      "John Wick",
      "Mad Max",
      "Jack The Ripper",
      "Commander Shepard",
      "The Dragonborn",
      "The Terminator",
    ];

    /**
     * Constructor function for random player object.
     * @param {string} playerName - we set the player's name using the array of names called playerNames[].
     * @param {number} health - 100 at the beginning.
     * @param {string} accuracy - accuracy percentage between 51% and 100%, randomly generated.
     * @param {string} armor - armor percentage between 1% and 50%, randomly generated.
     * @param {object} weapon - a weapon object for the current player.
     */

    function Player(playerName, accuracy, armor, weapon) {
      this.playerName = playerName;
      this.health = 100;
      this.accuracy = accuracy;
      this.armor = armor;
      this.weapon = weapon;
    }

    /**
     * A function setting a name for the player.
     * @param {Array} arrOfNames - we set the player's name using the array of names called playerNames[].
     * @returns a string - the player's name.
     */

    function createPlayerName(arrOfNames) {
      const newName = arrOfNames[Math.floor(Math.random() * arrOfNames.length)];
      if (!arrOfPreviousPlayers.includes(newName)) {
        arrOfPreviousPlayers.push(newName);
        return newName;
      } else {
        return createPlayerName(arrOfNames);
      }
    }

    /**
     * Generates the accuracy percentage..
     */

    Player.prototype.generateAccuracy = function () {
      this.accuracy = 51 + Math.floor(Math.random() * 50) + "%";
    };

    /**
     * Generates the armor percentage.
     */

    Player.prototype.generateArmor = function () {
      this.armor = Math.floor(Math.random() * 50) + 1 + "%";
    };

    /**
     * Generates a weapon for the player.
     * @returns an object -  a weapon with some properties for the player.
     */

    Player.prototype.generateWeapon = function () {
      /**
       * Constructor function for random weapon object.
       * @param {number} caliber - weapon's caliber, between 1 and 50, randomly generated.
       * @param {number} jamChance - weapon's jam chance, between 1 and 50, randomly generated.
       * @param {number} ammunition - ammunition, between 5 and 20, randomly generated.
       */

      function Weapon(caliber, jamChance, ammunition) {
        this.caliber = caliber;
        this.jamChance = jamChance;
        this.ammunition = ammunition;
      }

      /**
       * Generates the weapon's caliber.
       */

      Weapon.prototype.generateCaliber = function () {
        this.caliber = Math.floor(Math.random() * 50) + 1;
      };

      /**
       * Generates the chance for jam.
       */

      Weapon.prototype.generateJamChance = function () {
        this.jamChance = Math.floor(Math.random() * 50) + 1;
      };

      /**
       * Generates the weapon's ammunition, between 5 and 20.
       */

      Weapon.prototype.generateAmmunition = function () {
        this.ammunition = 5 + Math.floor(Math.random() * 16);
      };

      const newWeapon = new Weapon();
      newWeapon.generateCaliber();
      newWeapon.generateJamChance();
      newWeapon.generateAmmunition();
      this.weapon = newWeapon;
    };
    const newPlayer = new Player();
    newPlayer.playerName = createPlayerName(playerNames);
    newPlayer.generateAccuracy();
    newPlayer.generateArmor();
    newPlayer.generateWeapon();
    arrOfPlayers.push(newPlayer);
    arrOfPlayers.length % 2 === 0
      ? teamContra.push(newPlayer)
      : teamTerror.push(newPlayer);
  }

  for (let i = 1; i <= arrOfPlayerNum[index]; i++) {
    generatePlayer();
  }
  console.log(
    `Team Contra - ${teamContra.map((el) => el.playerName)}` +
      "\n" +
      `vs` +
      "\n" +
      `Team Terror - ${teamTerror.map((el) => el.playerName)}`
  );
  return [teamContra, teamTerror];
}

/**
 * Function for generating a whole game between two teams.
 */

function generateGame() {
  const [readyTeamContra, readyTeamTerror] = generateTeams();

  /**
   * Function for generating rounds till one of the teams wins the game.
   */

  function generateRound() {
    while (
      readyTeamContra.some((el) => el.health > 0) &&
      readyTeamTerror.some((el) => el.health > 0)
    ) {
      /**
       * Function for generating the participants in the current round.
       * @returns an array of two objects - the participants.
       */

      function generateRoundParticipants() {
        const arrTeamContraLive = readyTeamContra.filter(
          (player) => player.health > 0
        );
        const playerContra =
          arrTeamContraLive[
            Math.floor(Math.random() * arrTeamContraLive.length)
          ];
        const arrTeamTerrorLive = readyTeamTerror.filter(
          (player) => player.health > 0
        );
        const playerTerror =
          arrTeamTerrorLive[
            Math.floor(Math.random() * arrTeamTerrorLive.length)
          ];
        return [playerContra, playerTerror];
      }

      const [currentPlayerContra, currentPlayerTerror] =
        generateRoundParticipants();

      /**
       * Function to determine the first player, the first one to shoot.
       * @param {object} playerContra - from the Team Contra
       * @param {object} playerTerror - from the Team Terror
       * @returns object (player) - the first one to shoot.
       */

      function chooseFirstPlayer(playerContra, playerTerror) {
        return Math.ceil(Math.random() * 10) > 5 ? playerContra : playerTerror;
      }

      const firstPlayer = chooseFirstPlayer(
        currentPlayerContra,
        currentPlayerTerror
      );
      const secondPlayer =
        currentPlayerContra === firstPlayer
          ? currentPlayerTerror
          : currentPlayerContra;
      let arrOfBattles = [];

      /**
       * Function for generating a shot from each player during the round.
       * @param {object} playerNow - the player to shoot currently.
       * @param {object}  playerNext - the player to be shot.
       * @returns the same function (recursion) with the params in the opposite order.
       */

      function shot(playerNow, playerNext) {
        if (arrOfBattles.length === 0) {
          console.log(
            "---------------------------------------------" +
              "\n" +
              `🤘New round! ${playerNow.playerName} vs. ${playerNext.playerName}!` +
              "\n" +
              "---------------------------------------------"
          );
        }
        if (playerNow.weapon.ammunition === 0) {
          if (playerNext.weapon.ammunition !== 0) {
            console.log(
              `Player ${playerNow.playerName}'s ammunition has finished! `
            );
            arrOfBattles.push("*");
            return shot(playerNext, playerNow);
          } else {
            playerNext.health > playerNow.health
              ? (playerNow.health = 0)
              : (playerNext.health = 0);
            const deadPlayer = playerNow.health === 0 ? playerNow : playerNext;
            console.log(
              `💥The round is over! ${deadPlayer.playerName} is dead!`
            );
            arrOfBattles = [];
            return;
          }
        } else {
          if (playerNow.weapon.jamChance > Math.ceil(Math.random() * 100)) {
            console.log(`${playerNow.playerName}: Shit! The weapon jammed! 😡`);
            arrOfBattles.push("*");
            return shot(playerNext, playerNow);
          } else {
            let decreaseHealth =
              playerNow.weapon.caliber *
              ((parseInt(playerNow.accuracy) - parseInt(playerNext.armor)) /
                100);
            playerNext.health =
              decreaseHealth > 0
                ? Math.floor(playerNext.health - decreaseHealth)
                : playerNext.health;
            playerNow.weapon.ammunition--;
            if (playerNext.health <= 0) {
              console.log(
                `💥The round is over! ${playerNext.playerName} is dead!`
              );
              arrOfBattles = [];
              return;
            }
            arrOfBattles.push("*");
            console.log(
              `Player ${playerNext.playerName}'s health: ${playerNext.health} `
            );
            return shot(playerNext, playerNow);
          }
        }
      }
      shot(firstPlayer, secondPlayer);
    }
    if (readyTeamContra.every((el) => el.health <= 0)) {
      console.log("Team Terror wins! 🏆💣");
      return;
    } else if (readyTeamTerror.every((el) => el.health <= 0)) {
      console.log("Team Contra wins! 🏆👮‍♂️");
      return;
    }
  }
  generateRound();
}
generateGame();
