/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoClient()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Client/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRClient(respuesta.items);
         }
 
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRClient(items)
 {
     let myTable="<table>";
     for(i=0;i<items.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+items[i].name+"</td>";
         myTable+="<td>"+items[i].email+"</td>";
         myTable+="<td>"+items[i].password+"</td>";
         myTable+="<td>"+items[i].age+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoC").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoClient()
 {
     let myData=
     {
         name:$("#nameC").val(),
         email:$("#emailC").val(),
         password:$("#passwordC").val(),
         age:$("#ageC").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Client/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoC").empty();
             $("#nameC").val("");
             $("#emailC").val("");
             $("#passwordC").val("");
             $("#ageC").val("");
             traerInfoClient();
             Swal.fire(
                '¡Guardado!',
                'Su entrada ha sido registrada',
                'success')
             //alert("Su entrada ha sido registrada")
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoClient()
 {
     let myData=
     {
        name:$("#nameC").val(),
        email:$("#emailC").val(),
        password:$("#passwordC").val(),
        age:$("#ageC").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Client/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoC").empty();
             $("#nameC").val("");
             $("#emailC").val("");
             $("#passwordC").val("");
             $("#ageC").val("");
             traerInfoClient();
             Swal.fire(
                '¡Guardado!',
                '¡Su entrada ha sido actualizada!',
                'success')
             //alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoClient(idElemento)
 {
     let myData=
     {
         idClient:idElemento
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Client/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoC").empty();
             traerInfoClient();
             Swal.fire({
                title: '¿Está seguro de eliminar el registro?',
                text: "Esta acción no puede revertirse",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, que se vaya'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    '¿Borrado!',
                    'Eso es todo, amigos',
                    'success'
                  )
                }
              })
             //alert("Su entrada se ha eliminada")
         }
     });
 }