## youtube-dl

This is a very simple tool to download multiple videos from youtube at the same time using the [node-ytdl-core](https://github.com/fent/node-ytdl-core) library.

## pre-reqs

1. node installed (tested with v12.16.2)
2. run npm install

## How to use

Simply replace the `videos` array in `run.js` with config for the videos you want to download:

```
const videos = [
  {"name": "video1", "url": "https://youtu.be/video1"},
  {"name": "video2", "url": "https://www.youtube.com/video2"}
]
```

Then run, `node run.js`

The downloaded videos will be saved as an mp4 with the name specified.  
