const profile = [{
    gender: "female",
    city: "Lucknow",
    email: "shalini.ihle@example.com",
    phone: 8090642038,
    photo: "https://randomuser.me/api/portraits/women/77.jpg"
},
{
    gender: "male",
    city: "kanpur",
    email: "valerij.ihle@example.com",
    phone: 8090562038,
    photo: "https://randomuser.me/api/portraits/men/44.jpg"
},
{
    gender: "male",
    city: "Banaras",
    email: "kartikey.le@example.com",
    phone: 8093452038,
    photo: "https://randomuser.me/api/portraits/men/6.jpg"
},
{
    gender: "male",
    city: "Delhi",
    email: "subhash.ihle@example.com",
    phone: 7890642038,
    photo: "https://randomuser.me/api/portraits/men/31.jpg"
},];

const profileIterator = (profile) => {
    let nextIndex = 0;
    return {
        next: () => {
            if (nextIndex < profile.length) {
                return {
                    name: profile[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let getProfile = profileIterator(profile);
let iterateCv = () => {
    let image = document.getElementById('image');
    let userInfo = document.getElementById('userInfo');
    let userProfile = getProfile.next();
    if (userProfile.name != undefined) {
        image.innerHTML = `<img src=${userProfile.name.photo} alt="error in loading image" class="w-50s" />`
        userInfo.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Gender: ${userProfile.name.gender}</li>
                            <li class="list-group-item">City: ${userProfile.name.city}</li>
                            <li class="list-group-item">Email: ${userProfile.name.email}</li>
                            <li class="list-group-item">Contact: ${userProfile.name.phone}</li>
                            </ul>`
    }
    else {
        alert('User list is finished now')
        location.reload();
    }
}
iterateCv();


let button = document.getElementById('button');
button.addEventListener('click', iterateCv);




[
    {
        "name": "Shivam",
        "age": "25",
        "gender": "male",
        "trophy": "6"
    },
    {
        "name": "Saurabh",
        "age": "22",
        "gender": "male",
        "trophy": "3"
    },
    {
        "name": "Kaushik",
        "age": "14",
        "gender": "male",
        "trophy": "9"
    },
    {
        "name": "Shivani",
        "age": "20",
        "gender": "female",
        "trophy": "15"
    },
    {
        "name": "Divya",
        "age": "29",
        "gender": "female",
        "trophy": "12"
    },
    {
        "name": "Rashi",
        "age": "30",
        "gender": "female",
        "trophy": "17"
    },
    {
        "name": "Himanshu",
        "age": "40",
        "gender": "male",
        "trophy": "10"
    },
]

// db.users.find({"age": {$gt: "25"}})
db.users.find({"age": {$gt: "25"}, "trophy": {$gt: "10"}})
db.users.find({$or:[{"age": {$gt: "25"}, "trophy": {$gte: "10"}}]},{"name": 1})

// db.users.update({"age": {$gt: "29"}}, {$set:{"trophy": "15"}}, {overwrite:true, new: true})
db.users.update({"age": "14"}, {"trophy": "5"})










