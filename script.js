const users = [
    {
        email: "stejsky@student.spsezatec.cz",
        password: "heslo123"
    },
    {
        email: "martin@cajka.cz",
        password: "martin478"
    },
    {
        email: "franta@centrum.cz",
        password: "frantisekhjom456"
    }
]

let currentUser = null;
document.getElementById("form").onsubmit = login;
function login(e) {
        e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    if(!emailInput.value || !passwordInput.value) return alert("vyplň email i heslo!");
        const user = users.filter((mapUser) => mapUser.email === emailInput.value)[0];
    if(!user || user.password !== passwordInput.value) return alert("zadali jste špatně heslo nebo email");
        alert("Jsi prihlášen.");
        currentUser = user;
    const loggedAs = document.getElementById("logged_as");
    const user_panel_password = document.getElementById("user_panel_password");
        loggedAs.innerText = "Přihlášen pod emailem:" + currentUser.email;
        user_panel_password.innerText = "Vaše heslo: " + currentUser.password;
}