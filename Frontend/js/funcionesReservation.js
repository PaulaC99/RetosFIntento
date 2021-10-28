/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoReservation()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Reservation/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRReservation(respuesta.items);
         }
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRReservation(items)
 {
     let myTable="<table>";
     for(i=0;i<items.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+items[i].startDate+"</td>";
         myTable+="<td>"+items[i].devolutionDate+"</td>";
         myTable+="<td>"+items[i].client+"</td>";
         myTable+="<td>"+items[i].boat+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoRR").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoReservation()
 {
     let myData=
     {
        startDate:$("#startDateRR").val(),
        devolutionDate:$("#devolutionDateRR").val(),
        client:$("#clientRR").val(),
        boat:$("#boatRR").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Reservation/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoRR").empty();
             $("#startDateRR").val("");
             $("#devolutionDateRR").val("");
             $("#clientRR").val("");
             $("#boatRR").val("");
             traerInfoReservation();
             alert("Su entrada ha sido registrada")
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoReservation()
 {
     let myData=
     {
        startDate:$("#startDateRR").val(),
        devolutionDate:$("#devolutionDateRR").val(),
        client:$("#clientRR").val(),
        boat:$("#boatRR").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Reservation/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoRR").empty();
             $("#startDateRR").val("");
             $("#devolutionDateRR").val("");
             $("#clientRR").val("");
             $("#boatRR").val("");
             alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoReservation(idElemento)
 {
     let myData=
     {
        idReservation:idElemento
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Reservation/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoRR").empty();
             traerInfoReservation();
             alert("Su entrada se ha eliminada")
         }
     });
 }