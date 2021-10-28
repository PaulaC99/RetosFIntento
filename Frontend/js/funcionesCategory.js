/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoCategory()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRCategory(respuesta.items);
         }
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRCategory(items)
 {
     let myTable="<table>";
     for(i=0;i<items.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+items[i].name+"</td>";
         myTable+="<td>"+items[i].description+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoCT").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoBarcos()
 {
     let myData=
     {
        name:$("#nameCT").val(),
        description:$("#descriptionCT").val()
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoCT").empty();
             $("#nameCT").val("");
             $("#categoryCT").val("");
             traerInfoBarcos();
             alert("Su entrada ha sido registrada")
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoBarcos()
 {
     let myData=
     {
        name:$("#nameCT").val(),
        description:$("#descriptionCT").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoCT").empty();
             $("#nameCT").val("");
             $("#descripotionCT").val("");
             traerInfoBarcos();
             alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoBarcos(idElemento)
 {
     let myData=
     {
        id:idCategory
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoCT").empty();
             traerInfoBarcos();
             alert("Su entrada se ha eliminada")
         }
     });
 }