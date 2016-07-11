function Data(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');

        if (line[0] === 'database'){
            result[line[1]] = {};
        } else if (line[0] === 'table'){
            result[line[1]][line[2]] = [];
        } else if (line[0] === 'field'){
            result[line[1]][line[2]].push({'type': line[3], 'name': line[4]});

        }
    }

    result = sortDatabase(result);

    for (let table in result){
        result[table] = sortTables(result[table]);
        for(let field in result[table]){
            result[table][field] = sortFields(result[table][field]);
        }
    }

    console.log(JSON.stringify(result));

    function sortDatabase(obj) {
        let sortedDatabase = {};
        let tables = Object.keys(obj);
        
        tables.sort(function (a,b) {
            let c = Object.keys(obj[a]).length;
            let d = Object.keys(obj[b]).length;
            if (c === d){
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                return d - c
            }
        });

        for (let i = 0; i < tables.length; i++) {
            let keys = tables[i];
            sortedDatabase[keys] = obj[keys];
        }

        return sortedDatabase
    }

    function sortTables(obj) {
        let sortedTables = {};
        let field = Object.keys(obj);

        field.sort(function (a,b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });

        for (let keys = 0; keys < field.length; keys++) {
            let place = field[keys];
            sortedTables[place] = obj[place];
        }

        return sortedTables
    }
    
    function sortFields(array) {
        let sortedArray = [];
        let names = [];

        for (let i = 0; i < array.length; i++) {
            let guy = array[i];
            names.push([guy['name'], guy['type']]);
        }
        names.sort(function (a,b) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        });

        for (let i = 0; i < names.length; i++) {
            let place = names[i];
            sortedArray.push({'type': place[1], 'name': place[0]});
        }

        return sortedArray
    }
}

Data([
    'database Towns',
    'table Towns Stadions',
    'database Countries',
    'table Countries Rivers',
    'table Countries Metodi',
    'table Countries Veni',
    'field Countries Rivers string Name',
    'field Countries Rivers int Length'
]);