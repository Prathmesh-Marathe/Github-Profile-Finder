let input = document.querySelector('input');
let search = document.querySelector('#find');
let profilePhoto = document.querySelector('img');
let info = document.querySelector('#info');
let profileCard = document.querySelector('.profileCard');

let requestUrl = 'https://api.github.com/users/';

search.addEventListener('click', () => {
    input.value = input.value.trim();

    // if user has not entered any value
    if(input.value === ""){
        alert("Enter a valid UserName!");
        return;
    }
    let finalUrl = requestUrl + input.value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', finalUrl);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            const response = JSON.parse(this.responseText);

            if(response.status === "404") {
                alert("You have Entered Wrong Username!");
                return;
            }

            let userInfo = {
                profileUrl: response.avatar_url,
                userName : response.name,
                followers : response.followers,
                following : response.following,
                email : response.email
            };
            
            profilePhoto.src = userInfo.profileUrl;

            info.innerHTML = `
                Name : ${userInfo.userName}<br>
                Followers : ${userInfo.followers}<br>
                Following : ${userInfo.following}<br>
                Email : ${userInfo.email}<br>`;
            
                profileCard.style.display = 'inline';
        }
    }
    xhr.send();
});

