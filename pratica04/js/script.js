        
 var a = 10;
 var b = 40;
 var c = "Maria";
 var d = 105.50;
 var e = true;
 var f = null;

 document.writeln("a = ",a,"<br/>");
 document.writeln("b = ",b,"<br/>");
 document.writeln("c = ",c,"<br/>");
 document.writeln("d = ",d,"<br/>");
 document.writeln("e = ",e,"<br/>");
 document.writeln("f = ",f,"<br/>");

 f = a;
 a = b;
 b = f; 

 document.writeln("<br/>Trocas de variaveis <br/>");
 document.writeln("a = ",a,"<br/>");
 document.writeln("b = ",b,"<br/>");

 f = c ;
 c = d ;
 d = f ;

 document.writeln("<br/>");
 document.writeln("c = ",c,"<br/>");
 document.writeln("d = ",d,"<br/>");

 f = d;
 d = e;
 e = f;

 document.writeln("<br/>");
 document.writeln("d = ",d,"<br/>");
 document.writeln("e = ",e,"<br/>")


 console.log("Trocas  no Log");
 console.log("a =",a);
 console.log("b =",b);
 console.log("c =",c);
 console.log("d =",d);
 console.log("e =",e);





