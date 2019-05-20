"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(_name, _stats, _level) {
        this.Life = 1000;
        this.InitialLife = 1000;
        this.Name = _name;
        this.Stats = _stats;
        this.Level = _level;
    }
    Pokemon.prototype.isFirst = function (opponent) {
        if (opponent.Level > this.Level) {
            return true;
        }
        return false;
    };
    Pokemon.prototype.attack = function (opponent) {
        var fight = this.Stats.Attack - opponent.Stats.Defense;
        opponent.Life -= (fight > 0) ? this.Stats.HP : 0;
    };
    Pokemon.prototype.specialAttack = function (opponent) {
        var fight = this.Stats.SpAttack - opponent.Stats.Defense;
        opponent.Life -= (fight > 0) ? this.Stats.HP : 0;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map