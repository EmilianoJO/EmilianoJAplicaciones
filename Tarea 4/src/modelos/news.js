const axios = require('axios');
const apiKey = '40b0279954aa48aa903ce8c11450396b';

const New = {
    buscar: (filtros) => {
        let news={};
        axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: filtros,
                apiKey: apiKey
            }
        })
        .then(response => {
            news = response.data;
        })
        
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(news);
            }, 1000)
        })
    }
}

module.exports= New;