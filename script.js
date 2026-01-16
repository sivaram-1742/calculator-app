// ===== GAME STATE =====
const GameState = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    gameActive: true,
    scores: {
        X: 0,
        O: 0,
        ties: 0
    }
};

// ===== WIN CONDITIONS =====
const WINNING_COMBINATIONS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// ===== DOM ELEMENTS =====
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const currentPlayerSpan = document.getElementById('current-player');
const resetBtn = document.getElementById('reset-btn');
const xScoreElement = document.getElementById('x-score');
const oScoreElement = document.getElementById('o-score');
const tieScoreElement = document.getElementById('tie-score');

// ===== INITIALIZE GAME =====
function initializeGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetBtn.addEventListener('click', resetGame);

    // Load scores from localStorage if available
    loadScores();
    updateScoreDisplay();
    updateStatus();
}

// ===== HANDLE CELL CLICK =====
function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    // Validate move
    if (GameState.board[cellIndex] !== '' || !GameState.gameActive) {
        return;
    }

    // Make move
    makeMove(cell, cellIndex);

    // Check for win or tie
    checkResult();
}

// ===== MAKE MOVE =====
function makeMove(cell, index) {
    GameState.board[index] = GameState.currentPlayer;
    cell.textContent = GameState.currentPlayer;
    cell.classList.add(GameState.currentPlayer.toLowerCase());
    cell.disabled = true;

    // Update ARIA label
    const cellNumber = index + 1;
    cell.setAttribute('aria-label', `Cell ${cellNumber}, ${GameState.currentPlayer}`);
}

// ===== CHECK RESULT =====
function checkResult() {
    let roundWon = false;
    let winningCombination = null;

    // Check all winning combinations
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];

        if (GameState.board[a] === '' ||
            GameState.board[b] === '' ||
            GameState.board[c] === '') {
            continue;
        }

        if (GameState.board[a] === GameState.board[b] &&
            GameState.board[b] === GameState.board[c]) {
            roundWon = true;
            winningCombination = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        handleWin(winningCombination);
        return;
    }

    // Check for tie
    if (!GameState.board.includes('')) {
        handleTie();
        return;
    }

    // Continue game - switch player
    switchPlayer();
}

// ===== HANDLE WIN =====
function handleWin(winningCombination) {
    GameState.gameActive = false;

    // Highlight winning cells
    winningCombination.forEach(index => {
        cells[index].classList.add('win');
    });

    // Update status
    statusText.textContent = `Player ${GameState.currentPlayer} Wins!`;
    currentPlayerSpan.textContent = `${GameState.currentPlayer} Wins! 🎉`;
    currentPlayerSpan.className = `player-${GameState.currentPlayer.toLowerCase()}`;

    // Update score
    GameState.scores[GameState.currentPlayer]++;
    updateScoreDisplay();
    saveScores();

    // Disable all cells
    cells.forEach(cell => cell.disabled = true);
}

// ===== HANDLE TIE =====
function handleTie() {
    GameState.gameActive = false;
    statusText.textContent = "It's a Tie!";
    currentPlayerSpan.textContent = "It's a Tie! 🤝";
    currentPlayerSpan.className = '';

    // Update score
    GameState.scores.ties++;
    updateScoreDisplay();
    saveScores();

    // Disable all cells
    cells.forEach(cell => cell.disabled = true);
}

// ===== SWITCH PLAYER =====
function switchPlayer() {
    GameState.currentPlayer = GameState.currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
}

// ===== UPDATE STATUS =====
function updateStatus() {
    statusText.textContent = `Current Player: `;
    currentPlayerSpan.textContent = GameState.currentPlayer;
    currentPlayerSpan.className = `player-${GameState.currentPlayer.toLowerCase()}`;
}

// ===== RESET GAME =====
function resetGame() {
    // Reset game state
    GameState.board = ['', '', '', '', '', '', '', '', ''];
    GameState.currentPlayer = 'X';
    GameState.gameActive = true;

    // Reset cells
    cells.forEach((cell, index) => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'win');
        cell.disabled = false;

        // Reset ARIA label
        const cellNumber = index + 1;
        cell.setAttribute('aria-label', `Cell ${cellNumber}, empty`);
    });

    // Update status
    updateStatus();

    // Add subtle animation
    cells.forEach((cell, index) => {
        setTimeout(() => {
            cell.style.animation = 'popIn 0.3s ease-out';
            setTimeout(() => {
                cell.style.animation = '';
            }, 300);
        }, index * 30);
    });
}

// ===== SCORE MANAGEMENT =====
function updateScoreDisplay() {
    xScoreElement.textContent = GameState.scores.X;
    oScoreElement.textContent = GameState.scores.O;
    tieScoreElement.textContent = GameState.scores.ties;
}

function saveScores() {
    try {
        localStorage.setItem('ticTacToeScores', JSON.stringify(GameState.scores));
    } catch (error) {
        console.warn('Could not save scores to localStorage:', error);
    }
}

function loadScores() {
    try {
        const savedScores = localStorage.getItem('ticTacToeScores');
        if (savedScores) {
            const parsedScores = JSON.parse(savedScores);
            GameState.scores = {
                X: parsedScores.X || 0,
                O: parsedScores.O || 0,
                ties: parsedScores.ties || 0
            };
        }
    } catch (error) {
        console.warn('Could not load scores from localStorage:', error);
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (event) => {
    // Allow reset with 'R' key
    if (event.key.toLowerCase() === 'r') {
        resetGame();
    }

    // Allow cell selection with number keys 1-9
    if (event.key >= '1' && event.key <= '9') {
        const cellIndex = parseInt(event.key) - 1;
        const cell = cells[cellIndex];

        if (cell && !cell.disabled && GameState.gameActive) {
            cell.click();
            cell.focus();
        }
    }
});

// ===== START GAME =====
initializeGame();

// ===== ANNOUNCEMENT FOR SCREEN READERS =====
// Announce game start
const announcement = document.createElement('div');
announcement.setAttribute('role', 'status');
announcement.setAttribute('aria-live', 'polite');
announcement.setAttribute('aria-atomic', 'true');
announcement.className = 'sr-only';
announcement.style.position = 'absolute';
announcement.style.left = '-10000px';
announcement.style.width = '1px';
announcement.style.height = '1px';
announcement.style.overflow = 'hidden';
document.body.appendChild(announcement);

// Update announcement when game state changes
function announceGameState(message) {
    announcement.textContent = message;
}

// Listen for game state changes
const originalHandleWin = handleWin;
handleWin = function(winningCombination) {
    originalHandleWin(winningCombination);
    announceGameState(`Player ${GameState.currentPlayer} wins the game!`);
};

const originalHandleTie = handleTie;
handleTie = function() {
    originalHandleTie();
    announceGameState("The game is a tie!");
};

console.log('🎮 Tic-Tac-Toe game initialized!');
console.log('💡 Tip: Use number keys 1-9 to make moves, or press R to reset');
