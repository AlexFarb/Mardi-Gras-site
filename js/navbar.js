const navwrap = document.getElementById('navwrap');
const footerwrap = document.getElementById('footerwrap');

navwrap.innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"> 
        <div class="container">
        <a href="index.html" class="navbar-brand"><img src="images/Mardi_Logo.png" alt="mardi gras logo"></a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="about.html" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="media.html" class="nav-link">Media</a>
                </li>
                <li class="nav-item">
                    <a href="faq.html" class="nav-link">FAQ</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact Us</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
`;

footerwrap.innerHTML = `
<footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <a href="#" class="btn btn-outline-light btn-floating m-1"><img src="images/Mardi_Logo.png" alt="mardi gras logo">Mardi Gras 🔺</a>
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/MardiGras.nola/" role="button"
          ><img src="Images/icon/iconfinder_1_Facebook_colored_svg_copy_5296499.png" alt="Facebook redirect"></a>
  
        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/MardiGrasNOLA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" role="button"
          ><img src="Images/icon/iconfinder_1_Twitter_colored_svg_5296514.png" alt="Facebook redirect"></a>
  
        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/peopleofmardigras/?hl=en" role="button"
          ><img src="Images/icon/iconfinder_1_Instagram_colored_svg_1_5296765.png" alt="Facebook redirect"></a>
  
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="https://www.linkedin.com/in/aleksei-farberov">Alex Farberov</a>
    </div>
    <!-- Copyright -->
  </footer>
`;