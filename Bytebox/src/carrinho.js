document.addEventListener("DOMContentLoaded", function() {
    var items = document.getElementsByClassName("cart-item");
    var finalizeButton = document.querySelector(".finalize-button");
  
    // Evento de clique no botão "FINALIZAR PEDIDO"
    finalizeButton.addEventListener("click", function() {
      var cartItems = [];
  
      // Percorre os itens do carrinho e obtém as informações
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemName = item.querySelector("h3").innerText;
        var itemQuantity = item.querySelector("input[type='number']").value;
        var itemPrice = parseFloat(item.querySelector(".item-price span").innerText.replace("R$ ", ""));
        var totalPrice = itemQuantity * itemPrice;
  
        // Cria um objeto para o item do carrinho
        var cartItem = {
          name: itemName,
          quantity: itemQuantity,
          price: totalPrice
        };
  
        // Adiciona o item ao array do carrinho
        cartItems.push(cartItem);
      }
  
      // Salva o carrinho no localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert("Pedido finalizado!");
    });
  });
  