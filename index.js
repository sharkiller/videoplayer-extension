module.exports = {
    /**
     * Is VideoPlayer Browser Extension installed?
     * @param {function} installed
     * @param {function} uninstalled
     */
    isInstalled: (installed, uninstalled) => {
        console.log(`isInstalled`);
        let img = document.createElement('img');
        img.onerror = uninstalled;
        img.onload = installed;
        img.src = 'chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/play-on.png'
    },
    getDirectPlayer: () => {
        console.log('getDirectPlayer');
        return 'chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/pages/player.html';
    },
    getIPTVPlayer: () => {
        console.log('getIPTVPlayer');
        return 'chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/iptv/player.html';
    }
};