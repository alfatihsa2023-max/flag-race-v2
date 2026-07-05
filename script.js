// ==========================================
// FLAG RACE ASEAN
// ==========================================

// ------------------------------
// DATA PESERTA
// ------------------------------

const peserta = [

    {
        id: "p1",
        kode: "IDN",
        nama: "Indonesia",
        posisi: 0
    },

    {
        id: "p2",
        kode: "MAS",
        nama: "Malaysia",
        posisi: 0
    },

    {
        id: "p3",
        kode: "JPN",
        nama: "Japan",
        posisi: 0
    },

    {
        id: "p4",
        kode: "SGP",
        nama: "Singapore",
        posisi: 0
    },

    {
        id: "p5",
        kode: "PHI",
        nama: "Philippines",
        posisi: 0
    },

    {
        id: "p6",
        kode: "THA",
        nama: "Thailand",
        posisi: 0
    },

    {
        id: "p7",
        kode: "VIE",
        nama: "Vietnam",
        posisi: 0
    }

];

// ------------------------------
// VARIABEL
// ------------------------------

const arena = document.getElementById("arena");

const statusGame = document.getElementById("status");

let interval = null;
// ============================
// STATUS GAME
// ============================

let gameDimulai = false;
let selesai = false;

// ------------------------------
// MEMBUAT ARENA
// ------------------------------

peserta.forEach((item) => {

    arena.innerHTML += `

    <div class="lane">

        <div class="country">

            ${item.kode}

        </div>

        <img
            id="${item.id}"
            class="flag"
            src="https://flagcdn.com/w80/${getKode(item.kode)}.png"
        >

        <div class="finish"></div>

    </div>

    `;

});

// ------------------------------
// KODE NEGARA
// ------------------------------

function getKode(kode) {

    switch (kode) {

        case "IDN":
            return "id";

        case "MAS":
            return "my";

        case "JPN":
            return "jp";

        case "SGP":
            return "sg";

        case "PHI":
            return "ph";

        case "THA":
            return "th";

        case "VIE":
            return "vn";

    }

}

// ------------------------------
// GERAKKAN PESERTA
// ------------------------------

function movePlayer(id, langkah) {

    if (selesai) return;

    const player = peserta.find(p => p.id === id);

    if (!player) return;

    player.posisi += langkah;

    document.getElementById(id).style.left =
        (90 + player.posisi) + "px";

    if (player.posisi >= 900) {

        selesai = true;

        clearInterval(interval);

        statusGame.innerHTML =
            "🏆 WINNER : " + player.nama;

    }

}

// ------------------------------
// MULAI BALAP
// ------------------------------

function mulaiRace(){

    if(gameDimulai){
        return;
    }

    gameDimulai = true;

    selesai = false;

    statusGame.innerHTML = "🏁 BALAP DIMULAI";

} {

    if (interval) {

        clearInterval(interval);

    }

    selesai = false;

    statusGame.innerHTML = "🏁 BALAP DIMULAI";

    interval = setInterval(() => {

        let angka = Math.floor(Math.random() * peserta.length);

        let langkah = Math.floor(Math.random() * 25) + 5;

        movePlayer(peserta[angka].id, langkah);

    }, 200);

}

// ------------------------------
// RESET GAME
// ------------------------------

function resetRace() {

    clearInterval(interval);

    selesai = false;

    statusGame.innerHTML = "Game Segera Dimulai...";

    peserta.forEach((item) => {

        item.posisi = 0;

        document.getElementById(item.id).style.left = "90px";

    });

}

// ------------------------------
// GIFT TIKTOK
// ------------------------------

function giftMasuk(kodeNegara, diamond) {

    const player = peserta.find(p => p.kode === kodeNegara);

    if (!player) return;

    let langkah = diamond * 5;

    movePlayer(player.id, langkah);

}

// ------------------------------
// CONTOH TEST
// ------------------------------

// Buka Console (F12), lalu coba:
//
// giftMasuk("IDN",50)
//
// giftMasuk("JPN",100)
//
// giftMasuk("THA",30)