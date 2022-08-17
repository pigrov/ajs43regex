import Character from './Character';

export default class Zombie extends Character {
  constructor(options) {
    super({ ...options, type: 'Zombie' });
    this.attack = 40;
    this.defence = 10;
  }
}