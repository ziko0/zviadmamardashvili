const input = document.getElementById('userInput');
const btn = document.getElementById('search-btn');
const card = document.getElementById('infoCard');

user('ziko0')

async function user(username) {
    const resp = await fetch(`https://api.github.com/users/${username}`)
    const respData = await resp.json()
    console.log(respData);
    return respData
}

btn.addEventListener('click', async () => {
    const input_val = input.value
    const search_result = await user(input_val)
    console.log(search_result);
    if(!search_result.login){
        alert("user not found!")
    }else{
        card.innerHTML = `
                 <div class="avatar">
                <img src="${search_result.avatar_url}" alt="">
                 </div>
               <div class="info">
                <h2>${search_result.name}</h2>
                <p>${search_result.login}</p>
                <div class="followers-info">
                    <div class="single">
                        <span>${search_result.followers}</span>
                        <span>Followers</span>
                    </div>

                    <div class="single">
                        <span>${search_result.following}</span>
                        <span>Following</span>
                    </div>

                    <div class="single">
                        <span>${search_result.public_repos}</span>
                        <span>Repos</span>
                    </div>

                    <a href="${search_result.html_url} " target="_blank">Visit profile</a>
            `
    }
})