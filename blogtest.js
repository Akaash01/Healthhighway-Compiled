const baseUrl = "https://api.healthhighway.co.in/post/get-feeds/1/10";


setTimeout(getFeeds, 5000)



async function getFeeds() {
    const res = await axios.get(baseUrl);
    const feedobj = res.data.feeds
    console.log(feedobj);
    feedobj.forEach(element => {
        if (element.image_urls.length == 0 && element.video_urls.length == 0) {
            console.log("Noimg")

        } else if (element.image_urls.length == 1) {
            singleImgPost(element);


        } else if (element.image_urls.length >= 2) {
            console.log("carousel")
        }
        if (element.video_urls.length == 1 && element.image_urls.length == 0) {
            console.log("Video")
        }
    });




    slides = document.querySelectorAll('.feed-slide')

    showslides(index);


}

let slides = [];

//Refactor the code
//Make functions for building every container
//no image post, carousel post, img post and video post

//after making the posts save them into an array for sliding purposes.

const prev_btn = document.querySelector(".feed-nav-btn-ls")
    // prev_btn.addEventListener('click', plusSlides(-1))
const next_btn = document.querySelector(".feed-nav-btn-rs")
    // next_btn.addEventListener('click', nextSlide(1));





const feedswiper = document.querySelector(".feed-swiper")

function singleImgPost(feed) {

    //Created the post container
    const imgpost = document.createElement('DIV');
    imgpost.classList.add('feed-slide');
    imgpost.classList.add('imgpost');

    feedswiper.appendChild(imgpost);

    //Add Content to container
    const post_author = document.createElement('DIV')
    const author_img = document.createElement('IMG')
    const source_img = document.createElement('IMG')
    const author_name = document.createElement('P')
    author_name.innerHTML = feed.author_name

    //append author Div
    imgpost.appendChild(post_author);

    post_author.appendChild(author_img)
    post_author.appendChild(source_img)
    post_author.appendChild(author_name)

    post_author.classList.add('post-author')
    author_img.classList.add('author-img')
    source_img.classList.add('source-img')

    author_img.src = feed.author_image_url
    source_img.src = "https://ik.imagekit.io/healthhighway2020/facebook_UYaHdH2t-.png?updatedAt=1639325122432"


    //Post Image
    const post_cover = document.createElement('DIV')
    const cover_img = document.createElement('IMG')



    post_cover.classList.add('post-cover')
    cover_img.src = feed.image_urls[0]
    post_cover.appendChild(cover_img)

    imgpost.appendChild(post_cover);

    //Share and redirect
    const shnred = document.createElement('DIV')
    const shareico = document.createElement('IMG')
    shareico.classList.add('share')
    const redico = document.createElement('IMG')
    redico.classList.add('redirect')

    shareico.src = "https://ik.imagekit.io/healthhighway2020/Share__1__g2V2rzCX6.svg"
    redico.src = "https://ik.imagekit.io/healthhighway2020/Direct_link_to_Source_TvLcvWJL3.svg"


    shnred.classList.add('share-red')

    shnred.appendChild(shareico)
    shnred.appendChild(redico)

    imgpost.appendChild(shnred);

    //Post text
    const post_text = document.createElement('P')
    post_text.classList.add('post-text')
    post_text.innerHTML = feed.body


    imgpost.appendChild(post_text)
}

let index = 1;

function nextSlide(n) {
    showslides(index += n);
}

function showslides(n) {
    let i = 0;



    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[index - 1].style.display = "flex";
    if (mediaQuery.matches) {
        slides[index - 1].style.display = "grid";
    }
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
    // Check if the media query is true