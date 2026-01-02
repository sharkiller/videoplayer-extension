# videoplayer-extension

A helper library for VideoPlayer Browser Extension

https://sharkiller.dev/videoplayer/

https://github.com/sharkiller/Reproductor-MPD-M3U8

## Installation

```bash
npm install videoplayer-extension
```

## Direct Usage
```html
<script type="module">
    import VideoPlayer from 'https://cdn.jsdelivr.net/npm/videoplayer-extension/+esm';
    VideoPlayer.isInstalled(
            // Installed
            () => {
                // Your code when detected extension is installed
                alert('installed');
            },
            // Uninstalled
            () => {
                // Your code when detected extension is uninstalled
                alert('uninstalled');
            }
    );
</script>
```