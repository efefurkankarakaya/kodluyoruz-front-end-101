document.getElementById("form").addEventListener("submit", (e) => {
    const alias = createAlias();
    console.log("Password Validation: " + passwordValidation());
    console.log("Phone Validation: " + phoneValidation());
    e.preventDefault();
    if (alias && passwordValidation() && phoneValidation()){
        document.body.innerHTML = null;
        flushMessage(`Welcome ${alias}, you are now looking at the future.`, "primary");
    }
})

const clearAlias = (alias) => alias.replaceAll(" ", "").toLowerCase();
const flushMessage = (message, type) => {
    const alert = `<div class="alert alert-${type}" align="center" role="alert">${message}</div>`
    if (document.body.contains(document.getElementsByClassName("alert")[0])) document.body.removeChild(document.body.childNodes[0]);
    document.body.insertAdjacentHTML("afterbegin", alert);
}

const createAlias = () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    return aliasValidation(firstName, lastName) ? `${clearAlias(firstName)}${clearAlias(lastName)}` : false;
}

const aliasValidation = (firstName, lastName) => {
    return (!firstName || !lastName) ? flushMessage("Name fields must be filled.", "warning") : true;
}

const passwordValidation = () => {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    return (password === null) ? flushMessage("Password field can not be empty.", "warning") : 
    (password !== confirm) ? flushMessage("Passwords are not matched.", "warning") : 
    (password.length < 8) ? flushMessage("Passwords must longer than 8 characters", "warning") : true;
}

const phoneValidation = () => {
    const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    const digits = document.getElementById("phone").value.replace(/\D/g, "");
    return regex.test(digits) ? true : flushMessage("Provide phone number in specified type.", "warning");
}
