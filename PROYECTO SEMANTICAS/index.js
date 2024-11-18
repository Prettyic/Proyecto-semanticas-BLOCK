function Mostrar_mesaje(event){
    event.preventDefault();
    let name=document.getElementById("nombre").value;
    let lastName=document.getElementById("apellido").value;
    // convierte en entero
    let old=parseInt(document.getElementById("edad").value);
    let cel=document.getElementById("cedula").value;
    let encargo=document.getElementById("pedido").value;
    let cant=document.getElementById("cantidad").value;
    let direction=document.getElementById("direccion").classList;
   const respuesta = confirm(`su informacion es la siguiente:
        ${name}
       ${lastName}
       ${old}
       ${cel}
       ${encargo}
       ${cant}
       ${direction}
       ¿Seguro que quiere hacer el pedido?`,);
       if (respuesta==true){
        if(old>=18){
            alert(`Pedido en camino`)
        }else{
            alert(`Pedido rechazado!`)
           }
       }
       


}