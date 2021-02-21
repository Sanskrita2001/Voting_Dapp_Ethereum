const fetch = require('cross-fetch')



async function register(data = {}){
    const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

register({
    "name": "Sanwreskrita Useless",
    "email": "uselrweess@useless.com",
    "password": "12345",
    "gender": "Male",
    "voterNo": "46615dfs894963",
    "aadharNumber": "7248916691944",
    "address": " Flat j6/3, Purba Abasan, 1582/1 Rajdanga main road Kolkata-700107",
    "dateOfBirth": 978652800000,
    "phoneNumber": 9876768909
}).then(data => {
    console.log(data)
})