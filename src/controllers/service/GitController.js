const axios = require('axios');

const URL = 'https://api.github.com/users/'

async function getGitHub(nome) {
    const url = `${URL}${nome}`
    const response = await axios.get(url)
    return response.data
}

getGitHub("aluisq")
.then(resultado => {
    console.log("github_profile: ",{
    nome: resultado.name,
    html_url: resultado.html_url,
    bio: resultado.bio,
    company: resultado.company,
    repositories: resultado.repos_url
  });
})
.catch( error => {
  console.error("Não Funcionou!", error);
})

module.exports = {
  getGitHub
}
