const item1 = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
>
    <path
        d="M3 12.5564L8.54048 18.6005L21.134 5"
        stroke="#20A6FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
<p style="margin: 0">
    <span>Desembolsos al 100%</span>
    del cobro de tus facturas el mismo día
    (*).
</p>
`;

const item2 = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
>
    <path
        d="M3 12.5564L8.54048 18.6005L21.134 5"
        stroke="#20A6FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
<p style="margin: 0">
    Aceptamos facturas
    <span>sin montos mínimos,</span>
    hasta un plazo máximo de
    <span>180 días</span>
    calendario.
</p>
`;

const carrousel = `
<div id="carouselExample" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>    
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div id="citem1"></div>
        </div>
        <div class="carousel-item">
            <div id="citem2"></div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
`;

document.getElementById("carrousel").innerHTML = carrousel;
document.getElementById("item1").innerHTML = item1;
document.getElementById("item2").innerHTML = item2;
document.getElementById("citem1").innerHTML = item1;
document.getElementById("citem2").innerHTML = item2;