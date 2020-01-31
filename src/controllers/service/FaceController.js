const axios = require('axios');

const URL = 'https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Clast_name%2Cpicture%7Burl%7D%2Cemail%2Cbirthday%2Cgender&access_token=EAAIZClMdyS58BANWJs7BXyd5wURvhxyNB36j56U0a1wT2uZBguBwK6E1WOXaKwQYkvrmnjHdEkuqg9ZBWZBrYos2jwOLFJTem4ZCva9l2PcYDdFgrTDMqxjLFHZBUKaq8eKK1iGftDDvp8yXy2y2nfeTrF867gTFmj0hVIdPfCuYKQBPZAiLv8EMQPFAOsjLZClhvvMQMvSz16ZA0vjmmEps7U6qYXZBNiSNA17CvRpKV3sQZDZD'

async function getFacebook() {
    const url = `${URL}`
    const response = await axios.get(url)
    return response.data
}

getFacebook(URL)
.then(resultado => {
    console.log("facebook_profile: ",{
    name: response.name,
    last_name: response.last_name,
    picture: response.picture,
    email: response.email,
    birthday: response.birthday,
    gender: response.gender
  });
})
.catch( error => {
  console.error("Não Funcionou!", error);
})

module.exports = {
  getFacebook
}
