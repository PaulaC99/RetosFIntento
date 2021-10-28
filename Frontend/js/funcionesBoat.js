/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoBoat()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRBoat(respuesta.items);
         }
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRBoat(items)
 {
     let myTable="<table>";
     for(i=0;i<items.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+items[i].brand+"</td>";
         myTable+="<td>"+items[i].year+"</td>";
         myTable+="<td>"+items[i].description+"</td>";
         myTable+="<td>"+items[i].name+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoB").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoBoat()
 {
     let myData=
     {
         brand:$("#brandB").val(),
         year:$("#yearB").val(),
         description:$("#descriptionB").val(),
         name:$("#nameB").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoB").empty();
            $("#brandB").val("");
            $("#yearB").val("");
            $("#descriptionB").val("");
            $("#nameB").val("");
            traerInfoBoat();
            alert("Su entrada ha sido registrada")
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoBoat()
 {
     let myData=
     {
        brand:$("#brandB").val(),
        year:$("#yearB").val(),
        description:$("#descriptionB").val(),
        name:$("#nameB").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoB").empty();
            $("#brandB").val("");
            $("#yearB").val("");
            $("#descriptionB").val("");
            $("#nameB").val("");
            traerInfoBoat();
            alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoBoat(idElemento)
 {
     let myData=
     {
         id:id
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoB").empty();
             traerInfoBoat();
             alert("Su entrada se ha eliminada")
         }
     });
 }