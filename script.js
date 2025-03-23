//http://api.weatherapi.com/v1/current.json?key=f201d46c1c5c4b35998132352252303&q=Mumbai&aqi=no


const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('.form');


form.addEventListener('submit',searchForLocation)

let target ="Mumbai"
const fetchResults = async(targetlocation) =>{
    let url = 'http://api.weatherapi.com/v1/current.json?key=f201d46c1c5c4b35998132352252303&q=${targetLocation}&aqi=no'
    
    const res = await fetch(url)

    const data =await res.json()

    console.log(data)

    let locationName = data.location.locationName
    let time = data.locationtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temp,locationName,time,condition)
}

function updateDetails(temp,locationName,time,condition){
    let splitDate = time.split(' ')[0]

    let splitTme = time.split(' ')[1]

    let currentDay = getDayNmae(new Date(splitDate).getDay())



    temperatureField.innertextContent = temp
    locationField.innertext = locationName
    dateandTimeField.innertext = '${splitDate} ${currentDay} ${splitTime}';
    conditionField.innertext = condition
}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.Value
    
    fetchResults(target)
}

fetchResults(target)

function getDayName(number){
    switch (number){
        case 0:
            return 'Sunday'
            case 1:
                return 'Monday'
                case 2:
                    return 'Tuesday'
                    case 3:
                        return 'Wednesday'
                        case 4:
                            return 'Thursday'
                            case 5:
                                return 'Friday'
                                case 6:
                                    return 'Saturday'
    }
}