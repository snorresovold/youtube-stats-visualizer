const youtubeKey = "AIzaSyCfTeazbNjD2f3FGJcTfwhYreV5eXyqxis";
const youtubeUser = "UCX8csL673ZPzx9yxuaTlp0A";


const subCount = document.getElementById('subcount');

const viewCount = document.getElementById('viewcount');

const getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
        // console.log(data["items"][0].statistics)
        for(let i = 0; i < data["items"][0].statistics.subscriberCount; i++){

            let tag = document.createElement("p")
            let text = document.createTextNode(i)
            tag.appendChild(text)
            let element = document.getElementById("yt-1")
            element.prepend(tag)
            
        }
    })
}

getSubscribers();
