// store all caregivers
let caregivers = []
let filteredCaregivers = []


// load caregiver data
async function loadCaregivers() {

    const response = await fetch("data/caregiver.json")
    const data = await response.json()

    caregivers = data
    filteredCaregivers = data

    showLocation()
    updateCaregiverCount()

    UI.showCaregivers(filteredCaregivers)

}


// show current location
function showLocation() {
    const locationElement = document.getElementById("location-name")
    locationElement.innerText = "📍 Gurgaon"
}


// update caregiver count
function updateCaregiverCount() {

    const countElement = document.getElementById("caregiver-count")
    countElement.innerText = filteredCaregivers.length + " nearby"

}


// apply filters
function applyFilters() {

    const selectedLocation = document.getElementById("locations").value
    const selectedSpecialization = document.getElementById("Specializations").value
    const selectedStatus = document.getElementById("status").value


    let result = []


    for (let i = 0; i < caregivers.length; i++) {

        let caregiver = caregivers[i]

        let locationMatch =
            selectedLocation === "all" ||
            caregiver.location === selectedLocation

        let specializationMatch =
            selectedSpecialization === "all" ||
            caregiver.specialization.includes(selectedSpecialization)

        let statusMatch =
            selectedStatus === "all" ||
            caregiver.availability === selectedStatus


        if (locationMatch && specializationMatch && statusMatch) {
            result.push(caregiver)
        }

    }


    filteredCaregivers = result

    UI.showCaregivers(filteredCaregivers)

    updateCaregiverCount()

}


// filter event listeners
document.getElementById("locations")
.addEventListener("change", applyFilters)

document.getElementById("Specializations")
.addEventListener("change", applyFilters)

document.getElementById("status")
.addEventListener("change", applyFilters)


// start the app
loadCaregivers()