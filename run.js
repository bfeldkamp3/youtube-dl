const fs = require('fs');
const ytdl = require('ytdl-core');

const videos = [
  {"name": "video1", "url": "https://youtu.be/video1"},
  {"name": "video2", "url": "https://www.youtube.com/video2"}
]

for(const video of videos){
  console.log("Downloading: "+video.name);
  ytdl(video.url, {filter:"audioandvideo", quality:"highest"})
    .pipe(fs.createWriteStream(`${video.name}.mp4`));
}
