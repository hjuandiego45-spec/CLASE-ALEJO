function getUserCard(user) {
    return `<article class="user-card">
        <div class="user-header">
            <h2>${user.name}</h2>
            <span>@${user.username}</span>
        </div>

        <div class="user-content">
            <div class="info-block">
                <strong>Informacion personal</strong>
                ${user.email}
                <br />
                ${user.phone}
                <br />
                ${user.website}
                <br />
                ${user.address.street}, ${user.address.suite}
               <br />
                ${user.address.city}
                <br />
            </div>

          

            <div class="info-block">
                <strong>Serie</strong>
                ${user.company.name}
                <br />
                ${user.company.catchPhrase}
                <br />
                ${user.company.bs}
            </div>
        </div>
    </article>`;
}

export function printUsers(users) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    users.forEach((user) => {
        container.innerHTML += getUserCard(user);
    });
}