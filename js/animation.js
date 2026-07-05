// ==========================================
// ANIMATION MANAGER
// ==========================================

const AnimationManager = {

    move(player) {

        const runner = document.getElementById(player.id);

        if (!runner) return;

        runner.classList.remove("moving");

        void runner.offsetWidth;

        runner.classList.add("moving");

    },

    winner(player) {

        const runner = document.getElementById(player.id);

        if (!runner) return;

        runner.classList.add("winner");

    },

    reset() {

        players.forEach(player => {

            const runner = document.getElementById(player.id);

            if (!runner) return;

            runner.classList.remove("moving");
            runner.classList.remove("winner");

        });

    },

    updateLeader() {

        let leader = players[0];

        players.forEach(player => {

            if (player.position > leader.position) {

                leader = player;

            }

        });

        players.forEach(player => {

            const runner = document.getElementById(player.id);

            if (!runner) return;

            runner.classList.remove("leader");

        });

        const leaderRunner = document.getElementById(leader.id);

        if (leaderRunner) {

            leaderRunner.classList.add("leader");

        }

    }

};