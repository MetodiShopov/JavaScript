/**
 * Created by Meto on 8.1.2016 г..
 */
var first = 7;
var second = 1.5;
var third = 20;

var calcArea = function(number){
    return Math.PI * number * number;
};

var print = function (number) {
    document.writeln("r = " + number + "; area = " + calcArea(number)+"<br>");
}

print(first);
print(second);
print(third);