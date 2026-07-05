// ==========================================
// AUDIO MANAGER
// ==========================================

const AudioManager = {

    sounds: {},

    // Memuat file audio
    load(name, path) {

        const audio = new Audio(path);
        audio.volume = CONFIG.AUDIO_VOLUME;

        this.sounds[name] = audio;

    },

    // Memainkan audio
    play(name) {

        const audio = this.sounds[name];

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

    },

    // Menghentikan audio
    stop(name) {

        const audio = this.sounds[name];

        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;

    }

};