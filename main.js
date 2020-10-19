class Human {

    constructor(name) {
        this.name = name;
        this.currentTemperature = 0;
        this.minTemperature = -10;
        this.maxTemperature = 30;
        this.coolants = null
    }

    addCoolant(coolObj){
        if (!coolObj.hasOwnProperty("name") && !coolObj.hasOwnProperty("temperatureCoolRate")){
            return console.log("Bad coolants")
        } else {
            this.currentTemperature += coolObj.temperatureCoolRate
        }
    }

    changeTemp(changeValue) {

        let change = Number(changeValue);
        let prevTemperature = this.currentTemperature;

        console.log('Temp. change:', change, this.minTemperature);

        this.currentTemperature += changeValue;
        if (this.currentTemperature <= this.minTemperature) {
            console.error('Temperature is to low');
        } else {
            if (this.currentTemperature > prevTemperature) {
                console.log('Temperature is growing');
            } else {
                console.log('It\'s cold outside, wear some clothes!');
            }
        }

        if (this.currentTemperature >= this.maxTemperature) {
            console.log("It`s hot, there`s some coolant")
            this.addCoolant(this.coolants[1])
        }

    }
}

let Obama = new Human("Obama");

const Coolers = (human) => {

    const coolingDev = [
        {name: "Water", temperatureCoolRate: -5},
        {name: "IceCream", temperatureCoolRate: -10},
        {name: "Heppu G12", temperatureCoolRate: -40},
        {name: "LN2", temperatureCoolRate: -195}
    ]
    human.coolants = coolingDev

    return human

}

let ObamaCool = Coolers(Obama);

ObamaCool.changeTemp(40);
console.log(ObamaCool)
