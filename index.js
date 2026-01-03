/**
 * Check if the VideoPlayer Extension is installed
 * @classDesc Use the static init() method to initialize the class.
 * @author Sharkiller
 * @hideconstructor
 */
class VideoPlayer {

    #initialized = false;
    #isInstalled = false;
    #extensionUrl = false;

    constructor(init) {
        if(init === 'init'){
            this.#initialized = true;
        }else{
            console.warn("Use: const videoplayer = await VideoPlayer.init();");
        }
    }

    /**
     * Return installation link for the VideoPlayer Extension.
     * @returns {string}
     */
    static getInstallUrl() {
        return 'https://sharkiller.dev/videoplayer/';
    }

    /**
     * Initializes the VideoPlayer detector.
     * Must be called before using any instance methods.
     * @returns {Promise<VideoPlayer>}
     */
    static async init() {
        const videoplayer = new VideoPlayer('init');
        await videoplayer.checkExtension();
        return videoplayer;
    }

    async checkExtension() {
        if (!this.#isInitialized()) {
            return;
        }
        try {
            const response = await fetch('isInstalled.mpd', {method: 'HEAD', redirect: 'follow'});

            if (response.redirected && response.url.endsWith('/pages/player.html') ) {
                const regex = /^(.*\/)pages\/player\.html$/i;
                const result = regex.exec(response.url);
                this.#extensionUrl = result[1];
                this.#isInstalled = true;
            }
        } catch (error) {}
    }

    #isInitialized() {
        if (!this.#initialized) {
            console.warn("VideoPlayer class not initialized! Use first: const videoplayer = await VideoPlayer.init();");
        }
        return this.#initialized;
    }

    /**
     * Returns TRUE if the VideoPlayer is installed or FALSE if not.
     * @returns {boolean}
     */
    isInstalled() {
        if (!this.#isInitialized()) {
            return false;
        }
        return this.#isInstalled;
    }

    /**
     * Return the full extension path to the Direct Player extension.
     * @returns {string|false}
     */
    getDirectPlayer() {
        if (!this.#isInitialized() || !this.#isInstalled) {
            console.warn("VideoPlayer extension is not installed! Check isInstalled() first.");
            return false;
        }
        return this.#extensionUrl + 'pages/player.html';
    }

    /**
     * Return the full extension path to the IPTV Player extension.
     * @returns {string|false}
     */
    getIPTVPlayer() {
        if (!this.#isInitialized() || !this.#isInstalled) {
            console.warn("VideoPlayer extension is not installed! Check isInstalled() first.");
            return false;
        }
        return this.#extensionUrl + 'iptv/player.html';
    }

}

window.VideoPlayer = VideoPlayer;