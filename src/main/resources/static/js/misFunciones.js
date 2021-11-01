///////////////////////////////////////////Category////////////////////////////////

function traerInformacionCategorias(){
    $.ajax({
        //url:"http://localhost/api/Category/all",
        url:"http://140.238.238.149/api/Category/all",
       
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoria(respuesta);
        }
    });
}

function pintarRespuestaCategoria(respuesta){
    $("#resultado").empty();
    let myTable = '<div class="container"><div class = "row">';
    for(i=0;i<respuesta.length;i++){
        myTable += `
                        <div class="card m-2" >
							<div class="card-body" >
							 
								<h5 class ="card-title">  ${respuesta[i].id} - ${respuesta[i].name}</h5> 		
								   		
								<p class= "card-text"> ${respuesta[i].description} <br> 		
									</p>
								<button class="btn btn-primary" onclick="editarInfo(${respuesta[i].id} )" >Actualizar</button>
								<button  class="btn btn-danger" onclick="borrarElemento(${respuesta[i].id} )">Borrar</button>
								   
							</div>
						</div>
                    `
    }
    myTable += '</div></div>';
    $("#resultado1").html(myTable);
}




function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        //url:"http://localhost/api/Category/save",
        url:"http://140.238.238.149/api/Category/save",
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
        }
        });

}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Category/"+idElemento,
        url:"http://140.238.238.149/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });
}


function editarInfo(idElemento){
        let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Category/update",
        url:"http://140.238.238.149/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#Cid").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se ha Actualizado")
        }
    });
}


///////////////////Motorbikes//////////////////////////////////////
function traerInformacionMotorbikes(){
    $.ajax({
        url:"http://140.238.238.149/api/Motorbike/all",
        //url:"http://localhost/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMotorbikes(respuesta);
        }
    });
}

function pintarRespuestaMotorbikes(respuesta){

    let myTable = '<div class="container"><div  class= "row">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                                <div class="card m-2" >
								<div class="card-body" >
							 
								   <h5 class ="card-title">  ${respuesta[i].id} - ${respuesta[i].name}</h5> 		
								   <h6 class ="card-subtitle mb-2 text-muted">  ${respuesta[i].brand} </h6> 		
								   <p class= "card-text"> ${respuesta[i].year} <br> 		
														  ${respuesta[i].description}</p>
								   <button class="btn btn-primary" onclick="editarInfoMoto(${respuesta[i].id} )" >Actualizar</button>
								   <button  class="btn btn-danger" onclick="borrarMoto(${respuesta[i].id} )">Borrar</button>
								   
								</div>
							</div>
                            `
    }
    myTable += '</div></div>';
    $("#resultado2").html(myTable);
}

function guardarInformacionMotorbikes(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        //url:"http://localhost/api/Motorbike/save",
        url:"http://140.238.238.149/api/Motorbike/save",
       
            success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function borrarMoto(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Motorbike/"+idElemento,
        url:"http://140.238.238.149/api/Motorbike/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMotorbikes();
            alert("Se ha Eliminado.")
        }
    });
}
function editarInfoMoto(idElemento){
    let myData={
        id:idElemento,
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Motorbike/update",
        url:"http://140.238.238.149/api/Motorbike/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#Bid").val("");
            $("#Bname").val("");
            $("#Bbrand").val("");
            $("#Byear").val("");
            $("#Bdescription").val("");
            traerInformacionMotorbikes();
            alert("Se ha Actualizado")
        }
    });
}



//////////////////////Clientes//////////////////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"http://140.238.238.149/api/Client/all",
        //url:"http://localhost/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable = '<div class="container"><div  class= "row">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                                <div class="card m-2" >
								<div class="card-body" >
							 
								   <h5 class ="card-title">  ${respuesta[i].idClient} - ${respuesta[i].email}</h5> 		
								   <h6 class ="card-subtitle mb-2 text-muted">  ${respuesta[i].password} </h6> 		
								   <p class= "card-text"> ${respuesta[i].name} <br> 		
														  ${respuesta[i].age}</p>
								   <button class="btn btn-primary" onclick="editarInfoClientes(${respuesta[i].idClient} )" >Actualizar</button>
								   <button  class="btn btn-danger" onclick="borrarCliente(${respuesta[i].idClient} )">Borrar</button>
								   
								</div>
							</div>
                            `
    }
    myTable += '</div></div>';
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://140.238.238.149/api/Client/save",
        //url:"http://localhost/api/Client/save",
              
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
            
        }
        });

}
function borrarCliente(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Client/"+idElemento,
        url:"http://140.238.238.149/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });
}
function editarInfoClientes(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(), 
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Client/update",
        url:"http://140.238.238.149/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#CLid").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            
            traerInformacionClientes();
            alert("Se ha Actualizado")
            
        }
    });
}


//////////////////////Mensajes//////////////////////////////////
function traerInformacionMensajes(){
    $.ajax({
        url:"http://140.238.238.149/api/Message/all",
        //url:"http://localhost/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){

    let myTable = '<div class="container"><div  class= "row">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                                <div class="card m-2" >
								<div class="card-body" >
							 
								   <h5 class ="card-title">  ${respuesta[i].idMessage} - ${respuesta[i].messageText}</h5> 		
								   								   
								   <button class="btn btn-primary" onclick="editarInfoMensajes(${respuesta[i].idMessage} )" >Actualizar</button>
								   <button  class="btn btn-danger" onclick="borrarMensaje(${respuesta[i].idMessage} )">Borrar</button>
								   
								</div>
							</div>
                            `
    }
    myTable += '</div></div>';
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#messageText").val()
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://140.238.238.149/api/Message/save",
        //url:"http://localhost/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function borrarMensaje(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Message/"+idElemento,
        url:"http://140.238.238.149/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });
}
function editarInfoMensajes(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messageText").val()
        
        };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Message/update",
        url:"http://140.238.238.149/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacionMensajes();
            alert("Se ha Actualizado")
        }
    });
}
//////////////////////Reservación//////////////////////////////////
function traerInformacionReservacion(){
    $.ajax({
        url:"http://140.238.238.149/api/Reservation/all",
        //url:"http://localhost/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservacion(respuesta);
        }
    });
}

function  pintarRespuestaReservacion(respuesta){

    let myTable = '<div class="container"><div  class= "row">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                                <div class="card m-2" >
								<div class="card-body" >
							 
								   <h5 class ="card-title">  ${respuesta[i].idReservation} - ${respuesta[i].startDate}</h5> 		
								   <h6 class ="card-subtitle mb-2 text-muted">  ${respuesta[i].devolutionDate} </h6> 		
								   <p class= "card-text"> ${respuesta[i].status} <br> 		
									</p>
								   <button class="btn btn-primary" onclick="editarInfoReservacion(${respuesta[i].idReservation} )" >Actualizar</button>
								   <button  class="btn btn-danger" onclick="borrarReservacion(${respuesta[i].idReservation} )">Borrar</button>
								   
								</div>
							</div>
                            `
    }
    myTable += '</div></div>';
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion(){
    let var6 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDated").val(),
        status:$("#status").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://140.238.238.149/api/Reservation/save",
        //url:"http://localhost/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function borrarReservacion(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
       //url:"http://localhost/api/Reservation/"+idElemento,
        url:"http://140.238.238.149/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservacion();
            alert("Se ha Eliminado.")
        }
    });
}
function editarInfoReservacion(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDated").val(),
        status:$("#status").val()
        
        };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://localhost/api/Reservation/update",
        url:"http://140.238.238.149/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDated").val("");
            traerInformacionReservacion();
            alert("Se ha Actualizado")
        }
    });
}

///////////////////Reportes/////////////////////////

function traerReporteStatus(){
    $.ajax({
        url:"http://140.238.238.149/api/Reservation/report-status",
        //url:"http://localhost/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReporte(respuesta);
        }
    });
}

function pintarRespuestaReporte(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
       myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}


function traerReporteDate(){
    
   

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
  console.log(fechaInicio);
  console.log(fechaCierre);

    $.ajax({
        url:"http://140.238.238.149/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        //url:"http://localhost/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
      
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://140.238.238.149/api/Reservation/report-clients",
        //url:"http://localhost/api/Reservation/report-clients",
        
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarReporteClientes(respuesta);
        }
    });
}
function pintarReporteClientes(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
      
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}
