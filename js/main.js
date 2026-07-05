// ==========================================
// GAME ENGINE
// ==========================================

const GameEngine = {

    running: false,
    giftQueue: [],
    lastFrame: 0,

    init() {

        console.log("=================================");
        console.log(" FLAG RACE ENGINE START ");
        console.log("=================================");

        UI.init();

        resetRace();

        UI.refresh();

        this.bindEvents();

    },

    bindEvents() {

        // START
        document.getElementById("btn-start").addEventListener("click", () => {

            if (gameState.running) return;

            gameState.running = true;

            this.start();

            document.getElementById("game-status").textContent = "Running";

        });

        // RESET
        document.getElementById("btn-reset").addEventListener("click", () => {

            this.stop();

            resetRace();

            UI.refresh();

            document.getElementById("game-status").textContent = "Idle";

        });

        // Gift Simulator
        document.addEventListener("keydown", (e) => {

            if (!gameState.running) return;

            const map = {
                "1": "IDN",
                "2": "MYS",
                "3": "SGP",
                "4": "THA",
                "5": "VNM",
                "6": "PHL",
                "7": "KHM"
            };

            if (!map[e.key]) return;

            this.addGift({

                country: map[e.key],
                distance: 25

            });

        });

    },

    start() {

        if (this.running) return;

        this.running = true;

        requestAnimationFrame(this.loop.bind(this));

    },

    stop() {

        this.running = false;

    },

    addGift(giftData) {

        this.giftQueue.push(giftData);

    },

    loop(timestamp) {

        if (!this.running) return;

        this.lastFrame = timestamp;

        while (this.giftQueue.length > 0) {

            processGift(this.giftQueue.shift());

        }

        UI.refresh();

        requestAnimationFrame(this.loop.bind(this));

    }

};

window.addEventListener("load", () => {

    GameEngine.init();

    // WebSocketManager.connect();

    console.log("Semua sistem siap.");

});