// ==========================================
// UI RENDERER
// ==========================================

const UI = {

    arena: null,

    init() {

        this.arena = document.getElementById("arena");

        this.renderTracks();

    },

    renderTracks() {

        this.arena.innerHTML = "";

        players.forEach(player => {

            this.arena.innerHTML += `

            <div class="track">

                <div class="country">

                    <img
                        class="flag-icon"
                        src="assets/flags/${player.code}.png"
                        alt="${player.name}"
                    >

                    <span>${player.name}</span>

                </div>

                <div class="lane">

                    <div class="runner" id="${player.id}">

                        <img
                            src="assets/flags/${player.code}.png"
                            alt="${player.name}"
                        >

                    </div>

                    <div class="finish"></div>

                </div>

                <div class="score" id="${player.id}-score">

                    0

                </div>

            </div>

            `;

        });

    },

    updatePosition(player) {

        const runner = document.getElementById(player.id);

        if (!runner) return;

        runner.style.left = player.position + "px";

    },

    updateScore(player) {

        const score = document.getElementById(player.id + "-score");

        if (!score) return;

        score.textContent = player.score;

    },

    refresh() {

        players.forEach(player => {

            this.updatePosition(player);

            this.updateScore(player);

        });

    }

};