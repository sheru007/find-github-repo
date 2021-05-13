const axios = require('axios');
const getRepos = async ({
    username = 'sherutsds',
    page = 1,
    per_page = 30
} = {}) => {
    try {
        const repos = await axios.get(
            `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`
        );
        return repos.data
            .map((repo) => {
                return {
                    name: repo.name,
                    url: repo.html_url,
                    description: repo.description,
                    stars: repo.stargazers_count
                };
            })
            .sort((first, second) => second.stars - first.stars);
    } catch (error) {
        return [];
    }
};

function callGetRepoFun(username = null, page = null, per_page = null) {
    return getRepos({ username, page, per_page })
}

const args = require('minimist')(process.argv.slice(2))
const username = args['username'] || null;
const page = args['page'] || null;
const per_page = args['per_page'] || null;

// callGetRepoFun(username, page, per_page).then(res => {
//     console.log({mu_Res: res})
// })

module.exports = { callGetRepoFun };
