const grid = document.getElementById('video-grid')
$.get("http://localhost:8080/videos", (data, status) => {
    console.log(data);
    var length = Object.keys(data).length;
    for (var i = 0; i < length; i++) {
        const box = document.createElement('div');
        box.className = "video-preview";

        const video = document.createElement('video');
        video.src = data[i].link;
        video.type = "video/mp4";
        video.controls = true
        video.height = 400;

        const box2 = document.createElement('div');
        box2.className="video-info-grid";
        const title = document.createElement('p');
        const text = document.createTextNode(data[i].title);
        title.appendChild(text);
        box.appendChild(video);
        box.appendChild(title);
        grid.appendChild(box);

    }
});