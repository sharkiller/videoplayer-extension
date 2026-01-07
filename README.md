# videoplayer-extension

A helper library for VideoPlayer Browser Extension

https://sharkiller.dev/videoplayer/

https://github.com/sharkiller/Reproductor-MPD-M3U8

### How to use

https://github.com/sharkiller/Reproductor-MPD-M3U8/wiki/Embed-player

### Required

⚠️ This validate VideoPlayer Extension and get the path of the players on different browsers.

## Direct Usage Example
```html
<!-- Use unpkg, or you can host the script on your own. -->
<script src="https://unpkg.com/videoplayer-extension@latest/index.min.js"></script>

<script>
    (async () => {
        // This check if the extension is installed and populate the variables.
        const vp = await VideoPlayer.init();

        // Ask if the extension could be found
        if ( vp.isInstalled() ) {
            // Firefox: moz-extension://{RANDOM-UUID}/pages/player.html
            // Chrome: chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/pages/player.html
            let direct_player_url = vp.getDirectPlayer();

            // Firefox: moz-extension://{RANDOM-UUID}/iptv/player.html
            // Chrome: chrome-extension://opmeopcambhfimffbomjgemehjkbbmji/iptv/player.html
            let iptv_player_url = vp.getIPTVPlayer();

            /**
             * Your code when the extension is found.
             */

                    // Example
            const extension_url = new URL(direct_player_url);

            const media_url = new URL('https://livesim.dashif.org/livesim2/testpic4_8s/Manifest.mpd');
            media_url.searchParams.set('title', 'Stream Test Example');
            // HTTP Headers example
            media_url.searchParams.set('headers', btoa(JSON.stringify({
                'User-Agent': 'VideoPlayer Extension',
                'referer': 'https://sharkiller.dev/videoplayer/',
            })));
            // ClearKey example
            media_url.searchParams.set('ck', btoa(JSON.stringify({
                "11223344556677889900aabbccddeeff":"11223344556677889900aabbccddeeff",
                "223344556677889900aabbccddeeff11":"223344556677889900aabbccddeeff11",
                "3344556677889900aabbccddeeff1122":"3344556677889900aabbccddeeff1122"
            })));

            // Or you can assign, to the extension hash, your full media url directly
            extension_url.hash = media_url.href;

            const iframe = document.querySelector('iframe.example');
            iframe.setAttribute('src', extension_url.href);
            iframe.style.display = 'block';

        } else {
            // Return https://sharkiller.dev/videoplayer/ to let users install the extension.
            let install_url = VideoPlayer.getInstallUrl();

            /**
             * Your code when the extension cannot be found.
             */

                    // Example
            const div = document.querySelector('div.install');
            div.innerHTML = `Install the extension: <a href="${install_url}" target="_blank">${install_url}</a>`;
            div.style.display = 'block';
        }
    })();
</script>

<div class="install" style="display: none"></div>
<iframe class="example" allow="encrypted-media *; autoplay" width="1280" height="720" style="display: none"></iframe>
```