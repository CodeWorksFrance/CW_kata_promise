const http = require("http");

const cat_fact_api = () => {
    let result
    new Request()
    const req = new http.request("http://catfact.ninja/fact", {}, (res) => {
        console.log(res)
        result = res
    })

    return result
}

module.exports = cat_fact_api
