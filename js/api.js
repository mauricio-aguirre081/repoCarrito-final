
//CONSUMIENDO UNA API

     const cargarRecetas = async() => {
    
        try { 
            const respuesta = await fetch(`https://my-json-server.typicode.com/maurysur81/ApiRecetas/recetas`);
        
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log (datos);

        let recetas = "";
        datos.forEach(receta => {
            recetas +=  
                        `   <div class="flex__item__recetas" class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <div class="card-imagen">
                                    <img src="${receta.img}" class="card-img-top" alt="">
                                    </div>
                                    <h5 class="card-title">${receta.nombre}</h5>
                                    <p>Ingredientes: <br>${receta.Ingredientes}</p>
                                    <span> <a href="${receta.link}" target="_blank"> Link al Video</span></a>
                                </div>
                            </div>
                        `;
            console.log(receta.nombre)
        });

        document.getElementById("contenedor-recetas").innerHTML =  recetas;
        
    } catch (error) {
            
        }
    
    }

    
    cargarRecetas();

   