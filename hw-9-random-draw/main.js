const textbox = document.getElementById("textbox");
const checkbox = document.getElementById("checkbox");
const draw = document.getElementById("draw");
const container = document.getElementById("container");
const hr = document.getElementById("hr");

const ui = new UI(container);
const client = new Client("api/gifts.json");
const users = new LinkedList();
const pool = new LinkedList();
const gifts = new LinkedList();
const results = new Stack();

window.addEventListener("DOMContentLoaded", () => createPool());

draw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!agreementValidation()){
        flushMessage("Accept the agreement first.");
        return;
    }
    if (!didWriteNameToArea()){
        flushMessage("Enter name(s) before the draw.");
        return;
    }
    textbox.value.split(",").map(name => {
        users.insert(name.trim().toLowerCase());
    })
    const beginCount = users.getCount();
    loadGifts(users.getCount());
    for (let index = 0; index < beginCount; ++index){
        // console.log(users.getCount() - 1);
        results.push({
            "name" : users.remove(getRandom(users.getCount())), 
            "gift" : gifts.remove(getRandom(gifts.getCount()))
        })
        users.display();
    }
    ui.removeHome();
    ui.loadResults(results);
})

const flushMessage = (message) => { 
    const alert = document.getElementsByClassName("alert")[0];
    if (alert) alert.remove();
    hr.insertAdjacentHTML("afterend", 
    `<div class="alert alert-primary" role="alert">${message}</div>`);
}

const didWriteNameToArea = () => (textbox.value == "") ? false : true;

const agreementValidation = () => document.getElementById("checkbox").checked;

const getRandom = (multiplier) => Math.floor(Math.random() * multiplier); 

const createPool = () => client.get().then(res => res.forEach(item => pool.insert(item))).catch(err => console.error(err));

const loadGifts = (userCount) => { for (let index = 0; index < userCount; ++index) gifts.insert(pool.remove(getRandom(pool.getCount())).title); }