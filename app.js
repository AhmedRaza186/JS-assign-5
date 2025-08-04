var a = 10;
document.writeln("The value of a is: " + a + "<br>")
document.writeln("..................................<br><br>")
document.writeln("The value of ++a is: " + (++a) + "<br>")
document.writeln("Now the value of a is: " + a + "<br><br>")
document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>")
document.writeln("The value of --a is: " + (--a) + "<br>")
document.writeln("Now the value of a is: " + a + "<br><br>")
document.writeln("The value of a-- is: " + (a--) + "<br>")
document.writeln("Now the value of a is: " + a + "<br><br>")


var a = 2, b = 1
var result = --a - --b + ++b + b--
document.writeln("a is: " + a + "<br>")
document.writeln("b is: " + b + "<br>")
document.writeln("result is: " + result + "<br><br>")
document.writeln("Explanation:<br>")
document.writeln("--a = 1<br>")
document.writeln("--a - --b = 1 - 0 = 1<br>")
document.writeln("1 + ++b = 1 + 1 = 2<br>")
document.writeln("2 + b-- = 2 + 1 = 3<br>")
document.writeln("Final result = 3<br>")

var username = prompt("What's your name")
alert(`Welcome ${username}`)

var usernum = prompt("Your fovourite num")
if (!isNaN(usernum)) {
    document.writeln(`<br> ${usernum} x 1 = ${usernum * 1} <br>
         ${usernum} x 2 = ${usernum * 2} <br> 
         ${usernum} x 3 = ${usernum * 3} <br> 
         ${usernum} x 4 = ${usernum * 4} <br> 
         ${usernum} x 5 = ${usernum * 5} <br> 
         ${usernum} x 6 = ${usernum * 6} <br>
         ${usernum} x 7 = ${usernum * 7} <br>
         ${usernum} x 8 = ${usernum * 8} <br>
         ${usernum} x 9 = ${usernum * 9} <br>
         ${usernum} x 10 = ${usernum * 10} <br>`);
}
else {
       document.writeln(`<br> ${5} x 1 = ${5 * 1} <br>
         5 x 2 = ${5 * 2} <br> 
         5 x 3 = ${5 * 3} <br> 
         5 x 4 = ${5 * 4} <br> 
         5 x 5 = ${5 * 5} <br> 
         5 x 6 = ${5 * 6} <br>
         5 x 7 = ${5 * 7} <br>
         5 x 8 = ${5 * 8} <br>
         5 x 9 = ${5 * 9} <br>
         5 x 10 = ${5 * 10} <br>`);
}



  var sub1 = prompt("Enter first subject name:");
  var sub2 = prompt("Enter second subject name:");
  var sub3 = prompt("Enter third subject name:");
  var totalMarks = 100;
  var marks1 = +prompt(`Enter marks obtained in : ${sub1}`);
  var marks2 = +prompt(`Enter marks obtained in : ${sub2}`);
  var marks3 = +prompt(`Enter marks obtained in : ${sub3}`);
  var totalObtained = marks1 + marks2 + marks3;
  var percentage = (totalObtained / (totalMarks * 3)) * 100;
    document.writeln("<br><table border='1' cellpadding='10'>");
  document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.writeln("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
  document.writeln("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
  document.writeln("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
  document.writeln("</table><br>");
  document.writeln("<b>Total Marks: </b>" + (totalMarks * 3) + "<br>");
  document.writeln("<b>Marks Obtained: </b>" + totalObtained + "<br>");
  document.writeln("<b>Percentage: </b>" + percentage.toFixed(2) + "%<br>");