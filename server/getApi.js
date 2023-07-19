
function getImageSrc(pov) {
    switch (pov) {
        case "hm":
            return "assests/images/HM.webp";
        case "phong":
            return "assests/images/Phong.webp";
        case "den":
            return "assests/images/Den.webp";
        case "chua":
            return "assests/images/Chua.webp";
        case "thang":
            return "assests/images/Thang.webp";
        case "Khoi":
            return "assests/images/Khoi.webp";
        case "hoang":
            return "assests/images/Hoang.webp";
        case "unknown":
            return "assests/images/Unknown.webp";
    }
}
function getAllVideo() {
    const grid = document.getElementById('video-grid')
    $.get("http://localhost:8080/videos", (data, status) => {
        var length = Object.keys(data).length;
        for (var i = 0; i < length; i++) {
            const box = document.createElement('div');
            box.className = "video-preview";
            box.className = data[i].game;
            const video_div = document.createElement('div');
            const video = document.createElement('video');
            video.src = data[i].link;
            video.type = "video/mp4";
            video.controls = true
            video.width = 450;
            video.height = 250;
            video_div.appendChild(video);


            const video_info_div = document.createElement('div');
            video_info_div.className = "video-info-grid";
            video_info_div.style.display = "flex";
            video_info_div.style.flexDirection = "row";

            const pov_div = document.createElement('div');
            pov_div.className = "pov_div";
            const pov_img = document.createElement('img');
            pov_img.className = "pov_img";
            pov_img.src = getImageSrc(data[i].pov);
            pov_div.appendChild(pov_img);

            const title_div = document.createElement('div');
            const title = document.createElement('p');
            title.className = "video-title";
            const text = document.createTextNode(data[i].title);
            title.appendChild(text);
            title_div.appendChild(title);

            video_info_div.appendChild(pov_div);
            video_info_div.appendChild(title_div);


            box.appendChild(video_div);
            box.appendChild(video_info_div);
            grid.appendChild(box);

        }
    });
}

function getAllVideoByGame(game) {
    if (game == "csgo") {
        const vid1 = document.querySelectorAll('.valorant');
        vid1.forEach(vid => {
            vid.style.display = "none";
        });

        const vid2 = document.querySelectorAll('.lol');
        vid2.forEach(vid => {
            vid.style.display = "none";
        });

        const vid3 = document.querySelectorAll('.csgo');
        vid3.forEach(vid => {
            vid.style.display = "grid";
        });

    }
    else if (game === "valorant") {
        const vid1 = document.querySelectorAll('.csgo');
        vid1.forEach(vid => {
            vid.style.display = "none";
        });

        const vid2 = document.querySelectorAll('.lol');
        vid2.forEach(vid => {
            vid.style.display = "none";
        });

        const vid3 = document.querySelectorAll('.valorant');
        vid3.forEach(vid => {
            vid.style.display = "grid";
        });

    }
    else {
        const vid1 = document.querySelectorAll('.csgo');
        vid1.forEach(vid => {
            vid.style.display = "none";
        });

        const vid2 = document.querySelectorAll('.valorant');
        vid2.forEach(vid => {
            vid.style.display = "none";
        });

        const vid3 = document.querySelectorAll('.lol');
        vid3.forEach(vid => {
            vid.style.display = "grid";
        });
    }

}

function homePage() {
    location.reload();
}
