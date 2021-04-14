function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years =  document.getElementById("years").value;    

    //Interest is the principal amount times interest rate
    var interest = principal * years * (rate / 100);

    //Get the current year and add no. of years to it
    var year = new Date().getFullYear()+parseInt(years);

    //If we enter zero or negative numbers alert
    if(principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus(); //Set focus to the principal input
        return;
    }

    //Result formatted with html
    var result = "<br/>If you deposit <mark>" + principal + "</mark>,<br/>" +
                 "at an interest rate of <mark>" + rate + "%</mark>.<br/>" +
                 "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
                 "in the year <mark>" + year + "</mark><br/>";
    
    //Show the result below the compute button
    document.getElementById("result").innerHTML = result;    
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
