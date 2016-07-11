function Bugs (arr){
    "use strict";
    let field = [],
        directions = arr[arr.length-1],
        bugsAlive = 0,
        temp = [];

    for (let i = 0; i < arr.length-1; i++) {
        let line = arr[i];
        field.push(line.split(""));
    }
    

    for (let k = 0; k < directions.length; k++) {
        let way = directions[k];

        if(way === 'U'){
            for (let l = 0; l < field.length; l++) {
                let line = field[l];
                for (let p = 0; p < line.length; p++) {
                    let place = line[p];
                    if (place === '@'){
                       if(field[l-1] === undefined){
                           bugsAlive++;
                           field[l][p] = '*';
                       } else if (field[l-1][p] === '#'){
                           field[l][p] = '*';
                       } else if (field[l-1][p] === '@'){
                           field[l][p] = '*';
                       } else {
                           field[l][p] = '*';
                           field[l-1][p] = '@';
                       }
                    }
                }
            }
        } else if (way === 'R'){
            for (let i = 0; i < way.length; i++) {
                let line = field[i];
                for (let j = 0; j < line.length; j++) {
                    let place = line[j];
                    if (place === '@'){
                        if (line[j+1] === undefined){
                            bugsAlive++;
                            field[i][j] = '*';
                        } else if (line[j+1] === '#'){
                            field[i][j] = '*';
                        } else if (line[j+1] === '@'){
                            field[i][j] = '*';
                        } else {
                            field[i][j] = '*';
                            field[i][j+1] = '@';
                            j++
                        }
                    }
                }
            }
        } else if (way === 'L'){
            for (let i = 0; i < field.length; i++) {
                let line = field[i];
                for (let j = 0; j < line.length; j++) {
                    let place = line[j];
                    if (place === '@'){
                        if (field[i][j-1] === undefined){
                            bugsAlive++;
                            field[i][j] = '*';
                        } else if(place ==='#'){
                            field[i][j] = '*';
                        } else if (place === '@'){
                            field[i][j] = '*';
                        } else if (place==='*'){
                            field[i][j-1] = '@';
                            field[i][j] = '*'
                        }
                    }
                }

            }
        }

        for (let i = 0; i < field.length; i++) {
            let line = field[i];
            temp[i]=[];
            for (let j = 0; j < line.length; j++) {
                temp[i].push(field[i][j])
            }
        }

        if (way ==='D'){
            for (let i = 0; i < field.length; i++) {
                let line = field[i];
                for (let j = 0; j < line.length; j++) {
                    let place = line[j];
                    if (place === '@'){
                        if( field[i+1][j] === undefined){
                            temp[i][j] = '*';
                            bugsAlive++;
                        } else if(field[i+1][j] === '#'){
                            temp[i][j] = '*';
                        } else if(field[i+1][j] === '@'){
                            temp[i][j] = '*';
                        } else if(field[i+1][j] === '*'){
                            temp[i][j] = '*';
                            temp[i+1][j] = '@';
                        }
                    }
                }
            }
            field = null;

            for (let i = 0; i < temp.length; i++) {
                let line = temp[i];
                field[i] =[];
                for (let j = 0; j < line.length; j++) {
                    field[i][j] = temp[i][j];
                }
            }
        }

    }
    console.log('Safe Bugs: ' + bugsAlive);
}

Bugs([
    '**#**',
    '*#@**',
    '*@**@',
    '*****',
    '*****',
    'UUR'
]);