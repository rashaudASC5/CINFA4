function salary(){
    var rate = document.getElementById("hourlyrate").value;
    var worked = document.getElementById("hoursworked").value;
    document.getElementById("salary").innerHTML = "The yearly salary is: " + "$" + parseFloat(rate)*parseFloat(worked)*52;

    let salary = rate*worked*52;

    if (salary < 20000) {
        document.getElementById("eval").innerHTML = "The Salary is too small"
    }
    else if (salary > 20000 && salary < 25000){
        document.getElementById("eval").innerHTML = "This salary is almost enough"
    }
    else {
        document.getElementById("eval").innerHTML = "This salary is just right"
    }
}

function duties(){
    var numduties = document.getElementById("numduties").value;
    const duties = ["Intern", "Software Developer", "Assistant Software Developer", "Information Security Analyst", "Certified Bomb Technician"]
    var values = numduties - 1;

    /* This is just the beginnging */
    /* Make a loop that makes it so that while
       the Values variable goes down the number
        also goes down and matches the jobs as well.*/
    
    while (values >= 0) {
        document.getElementById("replace").innerHTML += duties[values] + "<br></br>"
        values = values - 1;
    }


   /* document.getElementById("replace").innerHTML = duties[values] */
}