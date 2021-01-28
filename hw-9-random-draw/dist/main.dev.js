"use strict";

var textbox = document.getElementById("textbox");
var checkbox = document.getElementById("checkbox");
var draw = document.getElementById("draw");
var container = document.getElementById("container");
var hr = document.getElementById("hr");
var ui = new UI(container);
var client = new Client("gifts.json");
var users = new LinkedList();
var gifts = new LinkedList();
var results = new Stack();
draw.addEventListener("click", function (e) {
  if (!agreementValidation()) {
    var alert = document.getElementsByClassName("alert")[0];

    if (!alert) {
      hr.insertAdjacentHTML("afterend", "<div class=\"alert alert-primary\" role=\"alert\">\n            Accept the agreement first.\n            </div>");
    }

    return;
  }

  textbox.value.split(",").map(function (name) {
    users.insert(name.trim().toLowerCase());
  });
  var beginCount = users.getCount();
  loadGifts(users.getCount());
  setTimeout(function () {
    for (var index = 0; index < beginCount; ++index) {
      console.log("COUNT: " + users.getCount());
      console.log("RANDOM: " + getRandom(users.getCount())); // console.log(users.getCount() - 1);

      results.push({
        "name": users.remove(getRandom(users.getCount())),
        "gift": gifts.remove(getRandom(gifts.getCount()))
      });
      users.display();
    }

    ui.removeHome();
    ui.loadResults(results);
  }, 500);
  e.preventDefault();
});

var agreementValidation = function agreementValidation() {
  return document.getElementById("checkbox").checked;
};

var getRandom = function getRandom(multiplier) {
  return Math.floor(Math.random() * multiplier);
};

var loadGifts = function loadGifts(userCount) {
  client.get("gifts.json").then(function (res) {
    for (var index = 0; index < userCount; ++index) {
      gifts.insert(res[getRandom(200)].title);
    }
  })["catch"](function (err) {
    return console.error(err);
  });
};