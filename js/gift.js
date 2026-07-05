// ==========================================
// GIFT HANDLER
// ==========================================

// Mencari pemain berdasarkan kode negara
function getPlayerByCode(code) {

    return players.find(player => player.code === code);

}

// Memproses hadiah yang diterima
function processGift(data) {

    if (!gameState.running) return;

    const player = getPlayerByCode(data.country);

    if (!player) {

        console.error("Player tidak ditemukan:", data.country);
        return;

    }

    movePlayer(player, data.distance);

}