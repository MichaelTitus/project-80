var studentnamesarray = [];
function submit() {
    var displaystudentarray = [];

    for (var j = 1; j <= 6; j++) {
        var nameofstudent = (document.getElementById("nameofStudent" + j).value);
        studentnamesarray.push(nameofstudent);
    }
    var studentnamesarraylength = studentnamesarray.length;


    for (var k = 0; k < studentnamesarraylength; k++) {
        displaystudentarray.push("<h4>" + studentnamesarray[k] + "</h4>");
    }

    
    studentnamesarray.join(". ");
    document.getElementById("getpara").innerHTML = studentnamesarray.join(". ");

}