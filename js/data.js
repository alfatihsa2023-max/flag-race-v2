// ==========================================
// DATA PESERTA
// ==========================================

const players = [
    {
        id: "p1",
        code: "IDN",
        name: "Indonesia",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p2",
        code: "MYS",
        name: "Malaysia",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p3",
        code: "SGP",
        name: "Singapore",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p4",
        code: "THA",
        name: "Thailand",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p5",
        code: "VNM",
        name: "Vietnam",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p6",
        code: "PHL",
        name: "Philippines",
        position: 0,
        score: 0,
        finished: false
    },
    {
        id: "p7",
        code: "KHM",
        name: "Cambodia",
        position: 0,
        score: 0,
        finished: false
    }
];

// ==========================================
// STATUS GAME
// ==========================================

const gameState = {

    running: false,

    countdown: false,

    winner: null

};