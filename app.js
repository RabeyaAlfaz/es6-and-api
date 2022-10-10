function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
    .then(res => res.json())
    .then(userData => {
        takeEachUser(userData);
    });
}
const album = document.querySelector('.album');

function takeEachUser(users){
for (const user of users) {
    const {name,email,phone,website} = user ;
    const address = user.address.city;
    // display data using new obj
    // create a div as container
    const div = document.createElement('div');
    div.classList.add('album-item');
    div.innerHTML = `
    <h2 class="user-name">User name: ${name} </h2>
    <h3 class="user-email">email: ${email}</h3>
    <h4>Address:${address}</h4>
    <h5 class="uphone">Phone:${phone}</h5>
    <h5>Website:${website}</h5>
    <button class="add-btn">Add to element</button>
    `
    album.appendChild(div);
}
 const addBtn = document.querySelectorAll('.add-btn');
 const userName = document.querySelectorAll('.user-name');
 const userEmail = document.querySelectorAll('.user-email');
 const Phone = document.querySelectorAll('.uphone');
 addElementTo(addBtn,userName,userEmail,Phone);
}





function addElementTo(addBtn,userName,userEmail,Phone){
    const addButtons = [...addBtn];
    const addNames = [...userName];
    const addEmails = [...userEmail];
    const addPhone = [...Phone];
    addButtons.forEach((btn,index) => {
            btn.disabled = false;
            btn.addEventListener('click',()=>{
                addNamesTodiv(addNames[index], addEmails[index], addPhone[index]);
            btn.disabled = true;
            })
    });
}
const addcontainer = document.querySelector('.add-container');

function  addNamesTodiv(name, email, phone) {
    console.log(name,email,phone);

    const div = document.createElement('div');
    div.classList.add('item-con');
    div.innerHTML = `
    <h2>${(name.innerText)}</h2>
    <h2>${(email.innerText)}</h2>
    <h2>${(phone.innerText)}</h2>
    <div>
    <button class="btn-plus">Plus</button>
    <input type="number">
    <button class="btn-minus">Minus</button>
    </div>
    `
    addcontainer.appendChild(div);
}