# videoplayer-extension

A helper library for VideoPlayer Browser Extension

https://sharkiller.dev/videoplayer/

https://github.com/sharkiller/Reproductor-MPD-M3U8

### Required

⚠️ This validate VideoPlayer Extension installation version > `26.1.5.8388`

## Direct Usage
```html
<script src="https://unpkg.com/videoplayer-extension@latest/index.min.js"></script>

<script>
    (async () => {
        console.log('getInstallUrl()? ', VideoPlayer.getInstallUrl());
        const vp = await VideoPlayer.init();
        console.log('isInstalled()? ', vp.isInstalled());
        console.log('getDirectPlayer()? ', vp.getDirectPlayer());
        console.log('getIPTVPlayer()? ', vp.getIPTVPlayer());
    })();
</script>
```