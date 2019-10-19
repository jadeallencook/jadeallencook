const fs = require('fs');

const photos = JSON.parse(fs.readFileSync('../src/assets/photos.json'));
const videos = JSON.parse(fs.readFileSync('../src/assets/videos.json'));

fs.writeFile('../src/assets/feed.json', JSON.stringify([
    ...Object.keys(photos).map(key => [photos[key].date, key, 'photos']),
    ...Object.keys(videos).map(key => [videos[key].date, key, 'videos'])
].sort((a, b) => new Date(b[0]) - new Date(a[0])).map(post => {
    return {
        type: post[2],
        id: post[1]
    };
})), error => {
    if (error) {
        console.log(error);
    } else {
        console.log('success');
    }
});