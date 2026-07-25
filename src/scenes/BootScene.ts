import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../config/constants';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create(): void {
    // Sanity check Phase 0 : un carré visible confirme que Vite + Phaser tournent correctement.
    this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, 120, 120, 0xc9a24b);
    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 100, 'Arène Olympe', {
        fontFamily: 'sans-serif',
        fontSize: '32px',
        color: '#f4e9d8',
      })
      .setOrigin(0.5);
  }
}
