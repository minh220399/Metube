
function getAllVideo() 
{
    const grid = document.getElementById('video-grid')
    $.get("http://localhost:8080/videos", (data, status) => {
        var length = Object.keys(data).length;
        for (var i = 0; i < length; i++) {
            const box = document.createElement('div');
            box.className = "video-preview";
            const video_div = document.createElement('div');

            const video = document.createElement('video');
            video.src = data[i].link;
            video.type = "video/mp4";
            video.controls = true
            video.width = 450;
            video.height = 300;
            video_div.appendChild(video);


            const video_info_div = document.createElement('div');
            video_info_div.className = "video-info-grid";

            const title = document.createElement('p');
            title.className = "video-title";
            const text = document.createTextNode(data[i].title);
            title.appendChild(text);
            video_info_div.appendChild(title);


            box.appendChild(video_div);
            box.appendChild(video_info_div);
            grid.appendChild(box);

        }
    });
}
function reloadPage()
{
    (() => {
        if (window.localStorage) {

            // If there is no item as 'reload'
            // in localstorage then create one &
            // reload the page
            if (!localStorage.getItem('reload')) {
                localStorage['reload'] = true;
                window.location.reload();
            } else {

                // If there exists a 'reload' item
                // then clear the 'reload' item in
                // local storage
                localStorage.removeItem('reload');
            }
        }
    })()
}

function getAllVideoByGame(game)
{
    $.get("http://localhost:8080/videosByGame/" + game, (data, status) => {
        const grid = document.getElementById('video-grid')

        var length = Object.keys(data).length;
        for (var i = 0; i < length; i++) {
            const box = document.createElement('div');
            box.className = "video-preview";
            const video_div = document.createElement('div');

            const video = document.createElement('video');
            video.src = data[i].link;
            video.type = "video/mp4";
            video.controls = true
            video.width = 450;
            video.height = 300;
            video_div.appendChild(video);


            const video_info_div = document.createElement('div');
            video_info_div.className = "video-info-grid";

            const title = document.createElement('p');
            title.className = "video-title";
            const text = document.createTextNode(data[i].title);
            title.appendChild(text);
            video_info_div.appendChild(title);


            box.appendChild(video_div);
            box.appendChild(video_info_div);
            grid.appendChild(box);

        }
        reloadPage();
    });
}