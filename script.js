var dugmePlus = document.getElementById('plus');
var dugmeMinus = document.getElementById('minus');
var kolicina = document.getElementById('kol');

dugmeMinus.addEventListener('click', function(){
    kolicina = document.getElementById('kol');
    var kol = kolicina.textContent;
    if(kol == 0) {
    }else {
        kol--;
        kolicina.textContent = kol;
    }
});
dugmePlus.addEventListener('click', function(){
    kolicina = document.getElementById('kol');
    var kol = kolicina.textContent;
    kol++;
    kolicina.textContent = kol;

});

var glavnaSl = document.getElementById('glavnaSl');
var sporedna1 = document.getElementById('sporedna1');
var sporedna2 = document.getElementById('sporedna2');
var sporedna3 = document.getElementById('sporedna3');
glavnaSl.addEventListener('click', function(){
    var iskacuci = document.getElementById('iskacuci');
    iskacuci.style.display = 'flex';
    var product = document.getElementById('product');
    product.style.opacity = '0.1';

    var iks = document.getElementById('close');
    iks.addEventListener('click', function(){
        iskacuci.style.display = 'none';
        product.style.opacity = '5';
    });

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    prev.addEventListener('click', function () {
        var src = iskacuci1.src;
        if (src.includes("image-product-1.jpg")) {
            iskacuci1.src = "image-product-4.jpg";
        } else if (src.includes("image-product-2.jpg")) {
            iskacuci1.src = "image-product-1.jpg";
        } else if (src.includes("image-product-3.jpg")) {
            iskacuci1.src = "image-product-2.jpg";
        } else if (src.includes("image-product-4.jpg")) {
            iskacuci1.src = "image-product-3.jpg";
        }
    });
    next.addEventListener('click', function () {
        var src = iskacuci1.src;
        if (src.includes("image-product-1.jpg")) {
            iskacuci1.src = "image-product-2.jpg";
        } else if (src.includes("image-product-2.jpg")) {
            iskacuci1.src = "image-product-3.jpg";
        } else if (src.includes("image-product-3.jpg")) {
            iskacuci1.src = "image-product-4.jpg";
        } else if (src.includes("image-product-4.jpg")) {
            iskacuci1.src = "image-product-1.jpg";
        }
    });

    var iskacuci1 = document.getElementById('iskacuci1');
    var iskacuci2 = document.getElementById('iskacuci2');
    var iskacuci3 = document.getElementById('iskacuci3');
    var iskacuci4 = document.getElementById('iskacuci4');
    iskacuci2.addEventListener('click', function(){
        var src = iskacuci1.src;
        iskacuci1.src = iskacuci2.src;
        iskacuci2.src = src;
    });
    iskacuci3.addEventListener('click', function(){
        var src = iskacuci1.src;
        iskacuci1.src = iskacuci3.src;
        iskacuci3.src = src;
    });
    iskacuci4.addEventListener('click', function(){
        var src = iskacuci1.src;
        iskacuci1.src = iskacuci4.src;
        iskacuci4.src = src;
    });
})

var dodaj = document.getElementById('dodaj');
dodaj.addEventListener('click', function(){
    var kolicinaa = document.getElementById('kol').textContent;
    if(kolicinaa > 0){
        var slicica = document.createElement('img');
        slicica.src = "image-product-1-thumbnail.jpg";
        slicica.classList.add('slicicaKorpa');
        var korpaPisi = document.getElementById('korpaPisi');
        korpaPisi.textContent = "Fall limited edition sneakers $125 x " + kolicinaa + " $" + (125 * kolicinaa);
        korpaPisi.prepend(slicica);
        var kantica = document.createElement('img');
        kantica.src = 'icon-delete.svg';
        kantica.classList.add('kantica');
        korpaPisi.append(kantica);
        var dugmic = document.createElement('button');
        dugmic.textContent = 'Checkout';
        dugmic.style.backgroundColor = 'orange';
        dugmic.style.borderRadius = '5%';
        korpaPisi.append(dugmic);
    }
})

var korpa = document.getElementById('korpa');
korpa.addEventListener('click', function(){
    var korpaOtv = document.getElementById('korpaOtv');
    korpaOtv.style.display = 'flex';
});

var telefonPrev = document.getElementById('a');
var telefonNext = document.getElementById('c');
var slikaTel = document.getElementById('b');
var iconMenu = document.getElementById('iconMenu');
if(iconMenu != null){
    iconMenu.addEventListener('click',function(){
        var meniTel = document.getElementById('meniTel');
        meniTel.style.display = 'flex';
        var closeTel = document.getElementById('closeTel');
        closeTel.addEventListener('click', function(){
            meniTel.style.display = 'none';
        });
    });
}
if(slikaTel != null && telefonNext != null && telefonPrev != null){
    telefonPrev.addEventListener('click', function(){
        var src = slikaTel.src;
        if (src.includes("image-product-1.jpg")) {
            slikaTel.src = "image-product-4.jpg";
        } else if (src.includes("image-product-2.jpg")) {
            slikaTel.src = "image-product-1.jpg";
        } else if (src.includes("image-product-3.jpg")) {
            slikaTel.src = "image-product-2.jpg";
        } else if (src.includes("image-product-4.jpg")) {
            slikaTel.src = "image-product-3.jpg";
        }
    });
    telefonNext.addEventListener('click', function(){
        var src = slikaTel.src;
        if (src.includes("image-product-1.jpg")) {
            slikaTel.src = "image-product-2.jpg";
        } else if (src.includes("image-product-2.jpg")) {
            slikaTel.src = "image-product-3.jpg";
        } else if (src.includes("image-product-3.jpg")) {
            slikaTel.src = "image-product-4.jpg";
        } else if (src.includes("image-product-4.jpg")) {
            slikaTel.src = "image-product-1.jpg";
        }
    });
}