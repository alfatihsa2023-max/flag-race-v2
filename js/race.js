// ==========================================
// RACE ENGINE
// ==========================================

function movePlayer(player, distance) {

    if (!gameState.running) return;
    if (player.finished) return;

    player.position += distance;
    player.score += distance;

    if (player.position > CONFIG.FINISH_LINE) {

        player.position = CONFIG.FINISH_LINE;

    }

    UI.updatePosition(player);
    UI.updateScore(player);

    AnimationManager.move(player);
    AnimationManager.updateLeader();

    if (player.position >= CONFIG.FINISH_LINE) {

        finishPlayer(player);

    }

}

function finishPlayer(player) {

    if (player.finished) return;

    player.finished = true;

    AnimationManager.winner(player);

    if (gameState.winner === null) {

        gameState.winner = player;

        gameState.running = false;

        GameEngine.stop();

        setTimeout(() => {

            alert(
                "🏆 WINNER\n\n" +
                player.name +
                "\nScore : " +
                player.score
            );

        }, 250);

    }

}

function resetRace() {

    players.forEach(player => {

        player.position = 0;
        player.score = 0;
        player.finished = false;

    });

    gameState.running = false;
    gameState.countdown = false;
    gameState.winner = null;

    UI.refresh();

    AnimationManager.reset();
    AnimationManager.updateLeader();

}