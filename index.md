<!DOCYPE html>

<html lang="es">
<head>
<title>El Monte Análogo</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes">
<meta name="description" content="Publicaciones, Comunicados y Trabajo curatorial">
<meta name="author" content="Unknown" >
<link href="layout.css" rel="stylesheet" type="text/css" media="all">
</head>

<!--Aqui puedo cambiar los nombres de id y la class pero hay que cambiarlos tambien en la css stylesheet tambien 
y esto aplica para todo, tambien deberia cambiar el titulo por una imagen tipo banner-->

<div class="wrapper row1">
  <header id="header" class="hoc clear"> 
    <h1><a href="index.html">El Monte Análogo</a></h1>
    <p>Publicaciones, Comunicados y Trabajo curatorial</p>
  </header>
</div>

<!--Aqui esta el menu de navegación-->
<div class="wrapper row4">
  <nav id="mainav" class="hoc clear"> 
    <ul class="clear">
      <li class="active"><a href="index.html">Principal</a></li>
      <li><a class="drop" href="#">Escritos filosóficos</a>
        <ul>
          <li><a href="pages/full-width.html">Full Width</a></li>
          <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
          <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
          <li><a href="pages/basic-grid.html">Basic Grid</a></li>
        </ul>
      </li>
      <li><a class="drop" href="#">Dropdownnn</a>
        <ul>
          <li><a href="#">Level 2</a></li>
          <li><a class="drop" href="#">Level 2 + Droppp</a>
            <ul>
              <li><a href="#">Level 3</a></li>
              <li><a href="#">Level 3</a></li>
              <li><a href="#">Level 3</a></li>
            </ul>
          </li>
          <li><a href="#">Level 2</a></li>
        </ul>
      </li>
      <li><a href="pages/gallery.html">Galería</a></li>
      <li><a href="#">Link Text</a></li>
      <li><a href="#">Link Text</a></li>
      <li><a href="#">Long Link Text</a></li>
    </ul>
  </nav>
</div>

<!-- Primer Artículo con imagen de fondo -->
<div class="wrapper bgded" style="background-image:url('images/demo/backgrounds/02.png');">
  <div class="hoc split clear">
    <section> 
      <h2 class="heading"></h2>
      <p>Mauris eu ultricies volutpat nulla justo placerat arcu eget iaculis felis nunc sit amet justo in tortor ligula ornare vitae eleifend ac suscipit.</p>
      <ul class="fa-ul">
        <li><i class="fa-li fa fa-check-circle"></i> Ultrices leo sed dapibus felis ut urna</li>
        <li><i class="fa-li fa fa-check-circle"></i> Lobortis duis nec gravida orci vivamus</li>
      </ul>
      <p class="btmspace-30">Venenatis dapibus enim eget ullamcorper erat fringilla imperdiet etiam felis nisl porttitor fringilla laoreet non ultricies varius dolor maecenas.</p>
      <footer><a class="btn" href="#">Read More &raquo;</a></footer>
    </section>
  </div>
</div>

<!--Segundo Articulo sin imagen de fondo -->
<div class="wrapper row3">
  <section class="hoc container clear"> 
       <div class="group">
      <div class="one_half first">
        <p class="font-xs">Tristique senectus et netus</p>
        <h6 class="heading font-x3">Consectetur accumsan habitant morbi</h6>
        <p>Sapien etiam vulputate ligula eu felis blandit a efficitur ex consequat aenean id ornare lacus vitae condimentum quam sed varius feugiat elit id tristique etiam non volutpat lorem nulla vitae venenatis augue at fermentum.</p>
        <p>Et fames ac turpis egestas donec eget enim eu neque euismod mollis suspendisse malesuada sed quam ac [&hellip;]</p>
        <footer><a href="#">Read More &raquo;</a></footer>
      </div>
      <div class="one_half"><a href="#"><img src="images/demo/480x360.png" alt=""></a></div>
    </div>
  </section>
</div>

<!-- Un footer osea un hastaabajo -->
<div class="wrapper row4">
  <footer id="footer" class="hoc clear"> 

<!-- Datos de contacto -->
    <div class="one_third first">
      <h6 class="heading">Aqui hay unos datos</h6>
      <ul class="nospace btmspace-30 linklist contact">
        <li><i class="fa fa-map-marker"></i>
          <address>
          Aqui se puede poner una direccion
          </address>
        </li>
        <li><i class="fa fa-phone"></i> +00 (123) 123 1234</li>
        <li><i class="fa fa-envelope-o"></i> hola@email.com</li>
      </ul>
      <ul class="faico clear">
        <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
      </ul>
    </div>

<!-- Para que se suscriban a mi newsletter y asi -->
    <div class="one_third">
      <h6 class="heading">Tincidunt facilisis eros ut</h6>
      <p class="nospace btmspace-30">Pulvinar venenatis commodo sed accumsan eu erat nunc ante sagittis a dolor in.</p>
      <form method="post" action="#">
        <fieldset>
          <legend>Newsletter:</legend>
          <input class="btmspace-15" type="text" value="" placeholder="Name">
          <input class="btmspace-15" type="text" value="" placeholder="Email">
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </div>

  </footer>
</div>

<!-- JAVASCRIPTS -->
<script src="layout/scripts/jquery.min.js"></script>
<script src="layout/scripts/jquery.backtotop.js"></script>
<script src="layout/scripts/jquery.mobilemenu.js"></script>

</html>



