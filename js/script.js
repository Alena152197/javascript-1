async function feme() {
    fetch(`https://api.github.com/users/Alena152197`)
    .then(response => response.json())
    .then(obj => {
        const date = new Date(obj.created_at)
        const moths = [
            "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
        ]
        console.log(
            `Аккаун зарегистрирован ${date.getDate()}, ${moths[date.getMonth()]}, ${date.getFullYear()}`
        );
    })
}

feme(prompt(`введите пароль`))