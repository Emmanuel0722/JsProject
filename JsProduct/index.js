class Product{
    constructor(nameProduct, price, cant){
        this.nameProduct = nameProduct,
        this.price = price,
        this.cant = cant
    }
}

class Ui{
    addProduct(product){
        const list = document.getElementById('listProduct');
        const element = document.createElement('div');
        //  style="text-align-last: justify; height: 50px;" <= 'Esto va en el segundo div.'
        element.innerHTML = `
            <div class="card pt-2 mb-2">
                <div class="car-body text-center p-2">
                    <label><strong>Producto:</strong> ${product.nameProduct}</label>  |  
                    <label><strong>Precio: </strong>${product.price}</label>  |  
                    <label"><strong>Cantidad: </strong>${product.cant}</label>   |
                    <a href="#" class="btn btn-danger" name="btn" >Borrar</a>
                </div>
            </div>
        `;

        list.appendChild(element);
        this.formDelete();
    }

    formDelete(){
        document.getElementById('form-pro').reset();
    }

    deleteProduct(element){
        if (element.name === 'btn') {
            element.parentElement.parentElement.parentElement.remove();
            var massage = "Producto borrado Correctamente!!";
            this.showProductMessage(massage, 'danger');
        }
    }

    showProductMessage(message, css){
        const box = document.createElement('div');
        box.className = `alert alert-${css} text-center`;
        box.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(box, app);

        setTimeout(()=>{
           box.remove();
        }, 3000);

    }
}

// Dom don
document.getElementById('form-pro').addEventListener('submit', (e)=>{
    const prod = document.getElementById('productName').value;
    const pri = document.getElementById('price').value;
    const cant = document.getElementById('cant').value;
    const pro = new Product(prod, pri, cant);
    
    const ui = new Ui();

    if (prod === "" || pri === "" || cant === "") {
        ui.showProductMessage("Por favor llenar Todos los campos son requeridos", "info");
    }else{
        ui.addProduct(pro);
        ui.showProductMessage('Producto Agregado Correctamente!!', 'success');
    }

    e.preventDefault();
});

document.getElementById('listProduct').addEventListener('click', function(e) {
    const ui = new Ui();
    ui.deleteProduct(e.target);
});

// VALIDACION DE LOS INPUT

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function soloFloat(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = "0123456789",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function SoloNumeros(event) {
if ((event.keyCode < 48) || (event.keyCode > 57)) 
 event.returnValue = false;
}