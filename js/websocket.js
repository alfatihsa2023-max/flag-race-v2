// ==========================================
// WEBSOCKET MANAGER
// ==========================================

const WebSocketManager = {

    socket: null,

    reconnectDelay: 3000,

    connect() {

        console.log("Menghubungkan ke WebSocket...");

        this.socket = new WebSocket(CONFIG.WS_URL);

        this.socket.onopen = () => {

            console.log("✅ WebSocket Connected");

        };

        this.socket.onmessage = (event) => {

            this.handleMessage(event.data);

        };

        this.socket.onerror = (error) => {

            console.error("WebSocket Error:", error);

        };

        this.socket.onclose = () => {

            console.warn("WebSocket Closed");

            setTimeout(() => {

                this.connect();

            }, this.reconnectDelay);

        };

    },

    handleMessage(message) {

        try {

            const data = JSON.parse(message);

            if (data.type === "gift") {

                GameEngine.addGift(data);

            }

        } catch (err) {

            console.error("JSON Error:", err);

        }

    },

    send(data) {

        if (!this.socket) return;

        if (this.socket.readyState !== WebSocket.OPEN) return;

        this.socket.send(JSON.stringify(data));

    }

};