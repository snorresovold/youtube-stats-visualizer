const youtubeKey = "AIzaSyCfTeazbNjD2f3FGJcTfwhYreV5eXyqxis";
const youtubeUser = "UCX8csL673ZPzx9yxuaTlp0A";


const subCount = document.getElementById('subcount');

const viewCount = document.getElementById('viewcount');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
        console.log(data["items"][0].statistics)
    })

}

getSubscribers();
