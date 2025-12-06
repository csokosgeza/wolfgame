// WolfGame - Alap játéklogika
// Ezt a fájlt az agent fogja kiegészíteni a játék implementálásához

class WolfGame {
    constructor() {
        this.gameArea = document.getElementById('game-area');
        this.gameStatus = document.getElementById('game-status');
        this.scoreElement = document.getElementById('score');
        this.controlPanel = document.getElementById('control-panel');
        
        this.score = 0;
        this.isPlaying = false;
        this.gameState = 'ready';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateUI();
    }
    
    setupEventListeners() {
        // Itt lesznek az eseménykezelők
        // Az agent fogja kiegészíteni
    }
    
    startGame() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.gameState = 'playing';
        this.score = 0;
        
        // Itt kezdődik a játék
        // Az agent fogja implementálni
        
        this.updateUI();
    }
    
    pauseGame() {
        if (!this.isPlaying) return;
        
        this.isPlaying = false;
        this.gameState = 'paused';
        
        // Itt szünetel a játék
        // Az agent fogja implementálni
        
        this.updateUI();
    }
    
    resumeGame() {
        if (this.isPlaying || this.gameState !== 'paused') return;
        
        this.isPlaying = true;
        this.gameState = 'playing';
        
        // Itt folytatódik a játék
        // Az agent fogja implementálni
        
        this.updateUI();
    }
    
    endGame() {
        this.isPlaying = false;
        this.gameState = 'ended';
        
        // Itt ér véget a játék
        // Az agent fogja implementálni
        
        this.updateUI();
    }
    
    resetGame() {
        this.isPlaying = false;
        this.gameState = 'ready';
        this.score = 0;
        
        // Itt áll vissza a játék
        // Az agent fogja implementálni
        
        this.updateUI();
    }
    
    updateScore(points) {
        this.score += points;
        this.updateUI();
    }
    
    updateUI() {
        this.scoreElement.textContent = this.score;
        this.gameStatus.textContent = this.getStatusText();
    }
    
    getStatusText() {
        switch (this.gameState) {
            case 'ready':
                return 'Készen áll';
            case 'playing':
                return 'Játék folyamatban';
            case 'paused':
                return 'Szüneteltetve';
            case 'ended':
                return 'Vége';
            default:
                return 'Ismeretlen állapot';
        }
    }
    
    // Itt lesznek a játék-specifikus metódusok
    // Az agent fogja implementálni
    
    gameLoop() {
        if (!this.isPlaying) return;
        
        // Itt lesz a játék ciklusa
        // Az agent fogja implementálni
        
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Inicializálás, amikor betöltődik az oldal
document.addEventListener('DOMContentLoaded', () => {
    const game = new WolfGame();
    
    // Globális elérés (debuggoláshoz)
    window.wolfGame = game;
});

// Exportálás modulként (ha szükséges)
export default WolfGame;