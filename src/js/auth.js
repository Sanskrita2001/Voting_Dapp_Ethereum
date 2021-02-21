const fetch = require('cross-fetch')
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
async function auth(data = {}){
    const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

auth({
    "email": "useless@useless.com",
    "password": "12345"
}).then(data => {
    console.log(data)
    localStorage.setItem('token', data.token);
})

setTimeout(() => {
     console.log(localStorage.getItem('token'));
}, 400);
