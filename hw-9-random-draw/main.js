const textbox = document.getElementById("textbox");
const checkbox = document.getElementById("checkbox");
const draw = document.getElementById("draw");
const container = document.getElementById("container");
const hr = document.getElementById("hr");

const ui = new UI(container);
const client = new Client("gifts.json");
const users = new LinkedList();
const gifts = new LinkedList();
const results = new Stack();

draw.addEventListener("click", (e) => {
    if (!agreementValidation()){
        const alert = document.getElementsByClassName("alert")[0];
        if (!alert){
            hr.insertAdjacentHTML("afterend", `<div class="alert alert-primary" role="alert">
            Accept the agreement first.
            </div>`);
        }
        return;
    }
    textbox.value.split(",").map(name => {
        users.insert(name.trim().toLowerCase());
    })
    const beginCount = users.getCount();
    loadGifts(users.getCount());
    setTimeout(() => {
        for (let index = 0; index < beginCount; ++index){
            console.log("COUNT: " + users.getCount());
            console.log("RANDOM: " + getRandom(users.getCount()));
            // console.log(users.getCount() - 1);
            results.push({
                "name" : users.remove(getRandom(users.getCount())), 
                "gift" : gifts.remove(getRandom(gifts.getCount()))
            })
            users.display();
        }
        ui.removeHome();
        ui.loadResults(results);
    }, 100);
    e.preventDefault();
})

const agreementValidation = () => {
    return document.getElementById("checkbox").checked;
}

const getRandom = (multiplier) => Math.floor(Math.random() * multiplier); 

const loadGifts = (userCount) => {
    client.get("gifts.json")
        .then(res => {
            for (let index = 0; index < userCount; ++index){
                gifts.insert(res[getRandom(200)].title);
            }
        })
        .catch(err => console.error(err));
}