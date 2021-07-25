var sname =[];
function sub(){
    var n1 =document.getElementById("s1").value;
    var n2 =document.getElementById("s2").value;
    var n3 =document.getElementById("s3").value;
    var n4 =document.getElementById("s4").value;
    sname.push(n1);
    sname.push(n2);
    sname.push(n3);
    sname.push(n4);
    console.log(sname);
    document.getElementById("display").innerHTML=sname;
    document.getElementById("sub1").style.display="none";
    document.getElementById("sor1").style.display="inline";

}
function sor(){
    sname.sort();
    document.getElementById("display").innerHTML=sname;
}