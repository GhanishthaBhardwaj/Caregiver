const UI = {

showCaregivers: function(list){

    const grid = document.getElementById("caregivers")

    grid.innerHTML = ""


    for(let i = 0; i < list.length; i++){

        let caregiver = list[i]


        let card = document.createElement("div")
        card.className = "caregiver-card"


        card.innerHTML = `

        <div class="card-top">

            <img src="${caregiver.photo}" class="caregiver-photo">

            <div class="card-info">

                <h3>${caregiver.name}</h3>

                <p class="role">${caregiver.role}</p>

                <p class="rating">⭐ ${caregiver.rating}</p>

            </div>

        </div>


        <div class="card-details">

            <p>📍 ${caregiver.location}</p>

            <p>🕒 ${caregiver.experience}</p>

        </div>


        <div class="special-tags">

            ${this.createTags(caregiver.specialization)}

        </div>


        <div class="status">

            ${this.showStatus(caregiver.availability)}

        </div>


        <div class="card-buttons">

            <button onclick="UI.openProfile(${caregiver.id})">
            View Profile
            </button>

            <a href="tel:${caregiver.phone}">
            Contact
            </a>

        </div>

        `


        grid.appendChild(card)

    }

},



createTags: function(tags){

    let html = ""

    for(let i=0;i<tags.length;i++){

        html += `<span class="tag">${tags[i]}</span>`

    }

    return html

},



showStatus: function(status){

    if(status === "Available"){
        return "🟢 Available"
    }

    if(status === "Busy"){
        return "🔴 Busy"
    }

    if(status === "Emergency"){
        return "⚡ Emergency Available"
    }

},



openProfile: function(id){

    let caregiver

    for(let i=0;i<caregivers.length;i++){

        if(caregivers[i].id === id){
            caregiver = caregivers[i]
        }

    }


    const box = document.getElementById("profile-content")

    box.innerHTML = `

    <div class="profile-header">

        <img src="${caregiver.photo}" class="profile-photo">

        <div>

            <h2>${caregiver.name}</h2>

            <p>${caregiver.role}</p>

            <p>⭐ ${caregiver.rating}</p>

        </div>

    </div>


    <div class="profile-details">

        <p>📍 ${caregiver.location}</p>

        <p>🕒 ${caregiver.experience}</p>

        <p>💰 ${caregiver.charges}</p>

    </div>


    <div class="profile-special">

        ${this.createTags(caregiver.specialization)}

    </div>
    <div class="profile-skills">

        <h4>Skills</h4>

        <p>${caregiver.skills.join(", ")}</p>

    </div>
    <div class="profile-contact">

        <a href="tel:${caregiver.phone}">📞 Call</a>

        <a href="mailto:${caregiver.email}">✉ Email</a>

    </div>

    `
    document.getElementById("profile").showModal()

}

}