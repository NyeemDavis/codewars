class Warrior {
  
    constructor() {
      this.myLevel = 1;
      this.myExperience = 100;
      this.myRank = 'Pushover';
      this.myAchievements = [];
      this.ranks = [
            { maxLevel: 9, rank: 'Pushover'},
            { maxLevel: 19, rank: 'Novice' },
            { maxLevel: 29, rank: 'Fighter' },
            { maxLevel: 39, rank: 'Warrior' },
            { maxLevel: 49, rank: 'Veteran' },
            { maxLevel: 59, rank: 'Sage' },
            { maxLevel: 69, rank: 'Elite' },
            { maxLevel: 79, rank: 'Conqueror' },
            { maxLevel: 89, rank: 'Champion' },
            { maxLevel: 99, rank: 'Master' },
            { maxLevel: 100, rank: 'Greatest' },
      ];
        // Return stats of character
      this.level = () => {
        return this.myLevel
      };
      this.experience = () => {
        return this.myExperience
      };

      this.rank = () => {
        return this.myRank
      };

      this.achievements = () => {
        return this.myAchievements
      };
        // Handle ranking up, exp gain and level calculation
      this.updateRank = () => {
          for (const rankInfo of this.ranks) {
            if (this.myLevel <= rankInfo.maxLevel) {
              this.myRank = rankInfo.rank;
              break;
            }
          }
      };

      this.calculateLevel = () => {
        this.myLevel = Math.floor((this.myExperience - 100) / 100) + 1;
        if (this.myLevel > 100) {
            this.myLevel = 100;
            this.myExperience = 10000;
          }
        this.updateRank()
      }
      this.gainExp = (expAmount) => {
        this.myExperience += expAmount
        this.calculateLevel();
      }
        // Battle logic
      this.battle = (enemyLevel) => {
        if(enemyLevel <= 0 || enemyLevel > 100) {
            return 'Invalid level'
        }
        let experienceGained = 0
        const enemyRank = this.getRankFromLevel(enemyLevel)
        const diff = enemyLevel - this.myLevel
        // Checks for defeat
        if ((this.isRankLower(this.myRank, enemyRank) && diff >= 5) || (this.myRank === enemyRank && diff >= 10)) {
            return "You've been defeated";
          }
        // Calculate experience 
        if (diff === 0) {
            experienceGained = 10;
          } else if (diff === -1) {
            experienceGained = 5;
          } else if (diff < -1) {
            experienceGained = 0;
          } else {
            experienceGained = 20 * diff * diff;
          }

        // Add the experience
        this.gainExp(experienceGained)

        // Fight ending status
        if (this.myLevel >= enemyLevel + 2) {
            return 'Easy fight';
          } else if (this.myLevel >= enemyLevel + 1 || this.myLevel === enemyLevel) {
            return 'A good fight';
          } else {
            return 'An intense fight';
          }
      };
        // Training logic
      this.training = ([desc, expGain, levelReq]) => {
        // Check player level
        if(this.myLevel < levelReq) {
            return 'Not strong enough'
        }
        // Add exp and achievement
        this.gainExp(expGain)
        this.myAchievements.push(desc)
        return desc
      }

      this.getRankFromLevel = (enemyLevel) => {
        let rank = ''
          for (const rankInfo of this.ranks) {
            if (enemyLevel <= rankInfo.maxLevel) {
              rank = rankInfo.rank;
              break;
            }
          }
          return rank 
      }

      this.isRankLower = (characterRank, enemyRank) => {
            const rankLevels = {
                'Pushover': 0,
                'Novice': 1,
                'Fighter': 2,
                'Warrior': 3,
                'Veteran': 4,
                'Sage': 5,
                'Elite': 6,
                'Conqueror': 7,
                'Champion': 8,
                'Master': 9,
                'Greatest': 10,
            }
            return rankLevels[characterRank] < rankLevels[enemyRank]
      }
    }
};


const goku = new Warrior()

console.log(goku.level()) // 1
console.log(goku.rank()) // Pushover
console.log(goku.achievements()) // []
console.log(goku.training(['Do ten push-ups', 95, 1])) // Do ten push-ups
console.log(goku.level()) // 1
console.log(goku.battle(0)) // Invalid level
console.log(goku.battle(1)) // A good fight
console.log(goku.level()) // 2
console.log(goku.achievements()) // ['Do ten push-ups']
console.log(goku.rank()) // Pushover
console.log(goku.battle(3)) // An intense fight
console.log(goku.level()) // 2
console.log(goku.training(['Survive one night at the Forest of Death', 170, 2])) // Survive one night at the Forest of Death
console.log(goku.training(['Mastered the Spirit Bomb', 1580, 10])) // Not strong enough
console.log(goku.achievements()) // ['Do ten push-ups', 'Survive one night at the Forest of Death']
console.log(goku.battle(2)) // A good fight
console.log(goku.level()) // 4
console.log(goku.experience()) // 400
console.log(goku.battle(9)) // An intense fight
console.log(goku.battle(14)) // You've been defeated
console.log(goku.level()) // 9
console.log(goku.battle(12)) // An intense fight
console.log(goku.battle(8)) // Easy fight
console.log(goku.rank()) // Novice
console.log(goku.experience()) // 1080
console.log(goku.battle(140)) // Invalid level
console.log(goku.training(['Mastered the Spirit Bomb', 1580, 10])) // Mastered the Spirit Bomb
console.log(goku.level()) // 26
console.log(goku.rank()) // Fighter
console.log(goku.battle(30)) // An intense fight
console.log(goku.rank()) // Fighter
console.log(goku.level()) // 29
console.log(goku.experience()) // 2980
console.log(goku.training(['Mastered the Shadow Clone Jutsu', 19, 6])) // Mastered the Shadow Clone Jutsu
console.log(goku.experience()) // 2999
console.log(goku.level()) // 29
console.log(goku.battle(32)) // An intense fight
console.log(goku.rank()) // Warrior
console.log(goku.experience()) // 3179
console.log(goku.battle(39)) // An intense fight
console.log(goku.rank()) // Veteran
console.log(goku.experience()) // 4459
console.log(goku.level()) // 44
console.log(goku.training(['Defeat Superman', 10000, 100])) // Not strong enough
console.log(goku.training(['Mastered the Spirit Gun', 1340, 43])) // Mastered the Spirit Gun
console.log(goku.rank()) // Sage
console.log(goku.experience()) // 5799
console.log(goku.level()) // 57
console.log(goku.battle(61)) // An intense fight
console.log(goku.rank()) // Elite
console.log(goku.experience()) // 6119
console.log(goku.training(['Mastered the Perfect Roundhouse Kick', 1781, 60])) // Mastered the Perfect Roundhouse Kick
console.log(goku.rank()) // Conqueror
console.log(goku.experience()) // 7900
console.log(goku.battle(83)) // An intense fight
console.log(goku.level()) // 82
console.log(goku.rank()) // Champion
console.log(goku.experience()) // 8220
console.log(goku.training(['Defeat The Four Horsemen', 1100, 82])) // Defeat The Four Horsemen
console.log(goku.battle(100)) // You've been defeated
console.log(goku.rank()) // Master
console.log(goku.level()) // 93
console.log(goku.experience()) // 9320
console.log(goku.training(['Win the Intergalaxtic Tournament', 679, 91])) // Win the Intergalaxtic Tournament
console.log(goku.experience()) // 9999
console.log(goku.training(['Fight Superman to a draw', 11000, 99])) // Fight Superman to a draw
console.log(goku.level()) // 100
console.log(goku.experience()) // 10000
console.log(goku.rank()) // Greatest
console.log(goku.training(['Defeat Superman', 10000, 100])) // Defeat Superman

