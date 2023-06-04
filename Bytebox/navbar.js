document.addEventListener('DOMContentLoaded', function() {
    // Elemento da NavBar
    const navBar = `
      <header>
        <div class="navbar-left">
          <img src="Logotipo.png" alt="Home - ByteBox">
          <p class="instruction">
            <a href="cadastro.html">Não possui conta?</a>
          </p>
        </div>
        <div class="navbar-right">
          <a href="pesquisa.html"><i class="fas fa-search"></i></a>
          <a href="carrinho.html"><i class="fas fa-shopping-cart"></i></a>
          <a href="login.html"><i class="fas fa-user"></i></a>
          <a href="quem_somos.html"><i class="fas fa-bars"></i></a>
        </div>
      </header>
    `;
  
    // Inserir a NavBar em todos os elementos com a classe "navbar"
    const navContainers = document.querySelectorAll('.navbar');
    navContainers.forEach(function(container) {
      container.innerHTML = navBar;
    });
  });
  