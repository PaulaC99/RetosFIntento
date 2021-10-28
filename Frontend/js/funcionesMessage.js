/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoMessage()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
            console.log(respuesta);
            pintarRMessage(respuesta.items);
         }
 
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRMessage(items)
 {
     let myTable="<table>";
     for(i=0;i<items.length;i++)
     {
        myTable+="<tr>";
        myTable+="<td>"+items[i].messageText+"</td>";
        myTable+="<td>"+items[i].client+"</td>";
        myTable+="<td>"+items[i].boat+"</td>";
        myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoM").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoMessage()
 {
     let myData=
     {
        messagetext:$("#messagetextM").val(),
        client:$("#clientM").val(),
        boat:$("#boatM").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoM").empty();
            $("#messagetextM").val("");
            $("#clientM").val("");
            $("#boatM").val("");
            traerInfoMessage();
            alert("Su entrada ha sido registrada")
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoMessage()
 {
     let myData=
     {
        messagetext:$("#messagetextM").val(),
        client:$("#clientM").val(),
        boat:$("#boatM").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoM").empty();
            $("#messagetextM").val("");
            $("#clientM").val("");
            $("#boatM").val("");
            traerInfoMessage();
            alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoMessage(idElemento)
 {
     let myData=
     {
         idMessage:idElemento
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoM").empty();
             traerInfoMessage();
             alert("Su entrada se ha eliminada")
         }
     });
 }