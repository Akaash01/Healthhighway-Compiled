const baseUrl = "https://api.healthhighway.co.in/admin/get-feeds";
async function getFeeds() {
    const res = await axios.get(baseUrl);
    const feedobj = res.data.feeds
    console.log(feedobj);
    feedobj.forEach(element => {
        if (element.image_urls.length == 0 && element.video_urls.length == 0) {
            console.log("Noimg")
        } else if (element.image_urls.length == 1) {
            console.log("img")
        } else if (element.image_urls.length >= 2) {
            console.log("carousel")
        }
        if (element.video_urls.length == 1 && element.image_urls.length == 0) {
            console.log("Video")
        }

    });

}


//Refactor the code
//Make functions for building every container
//no image post, carousel post, img post and video post