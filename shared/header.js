const banbifHeader = `
<a href="index.html">
    <picture>
        <source
            media="(min-width: 320px)"
            srcset="assets/Banbif_logo.avif"
            type="image/avif"
        />
        <source
            media="(min-width: 320px)"
            src="assets/Banbif_logo.webp"
            type="image/webp"
        />
        <img src="assets/Banbif_logo.png" alt="" />
    </picture>
</a>`;

document.getElementById("banbif-header").innerHTML = banbifHeader;
