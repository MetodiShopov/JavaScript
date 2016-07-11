function Temp(arr) {
    "use strict";
    let input = [];
    let minTempAnswer = [];
    let maxTempAnswer = [];
    let minTemp = 100.0;
    let maxTemp = -100.0;
    let minHum=100.0;
    let maxHum=0;
    let minHumAns = [];
    let maxHumAns = [];
    let avrgTemp = 0;
    let avrgHum = 0;



    for (let city in arr){
        let temp = arr[city].split(' ');
        input.push([temp[0], Number(temp[1]), Number(temp[2])])
    }

    for (let place = 0; place < input.length; place++) {
        let area = input[place];

        if(area[1] < minTemp){
            minTempAnswer = [area[0], area[1]];
            minTemp = area[1];
        } else  if (area[1] === minTemp){
            if(minTempAnswer[1] === undefined){
                minTempAnswer = [area[0], area[1]];
            }
        }

        if(area[1]> maxTemp){
            maxTempAnswer = [area[0], area[1]];
            maxTemp = area[1]
        } else if (area[1] === maxTemp){
            if (maxTempAnswer[1] === undefined){
                maxTempAnswer = [area[0], area[1]];
            }
        }

        if(area[2] < minHum){
            minHumAns = [area[0], area[2]];
            minHum = area[2]
        } else if (area[2] === minHum){
            if (minHumAns[1] === undefined){
                minHumAns = [area[0], area[2]];
            }
        }

        if(area[2] > maxHum){
            maxHumAns = [area[0], area[2]];
            maxHum = area[2];
        } else if (area[2] === maxHum){
            if (maxHumAns[1] === undefined){
                maxHumAns = [area[0], area[2]];
            }
        }

        avrgTemp += area[1];
        avrgHum += area[2];
    }

    avrgTemp = avrgTemp / input.length;
    avrgHum = avrgHum / input.length;

    console.log('Max temperature ' + maxTempAnswer[0] + ' ' + maxTempAnswer[1].toFixed(2));
    console.log('Min temperature ' + minTempAnswer[0] + ' ' + minTempAnswer[1].toFixed(2));
    console.log('Max humidity ' + maxHumAns[0] + ' ' + maxHumAns[1].toFixed(2));
    console.log('Min humidity ' + minHumAns[0] + ' ' + minHumAns[1].toFixed(2));
    console.log('Average temperature/humidity ' + avrgTemp.toFixed(2) + '/' + avrgHum.toFixed(2));
}

Temp([
    'Sofia 30.00 87.00',
    'Burgas 35.00 90.00',
    'Plovdiv 33.00 86.00'
]);