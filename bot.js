onload = onLoad;

function onLoad() {
  console.log("DOM fully loaded and parsed");
  getItem();
}

function getItem() {
  const srcForProduct = /(ftp|http|https):\/\/retailsat.com\/collections\/[a-z,0-9]\w+[\-\][a-z,0-9]\w+\//,
    srcForProductTwo = /(ftp|http|https):\/\/retailsat.com\/collections\/[a-z,0-9]\w+\//,
    srcCheckout = /(ftp|http|https):\/\/retailsat.com\/[0-9]\w+\/checkouts\/[a-z,A-Z,0-9]\w+/,
    srcCart = 'https://retailsat.com/cart';

    if ((location.href).match(srcForProduct) || (location.href).match(srcForProductTwo)) {
    (async function() {
      const optionsOf = document.getElementById('SingleOptionSelector-0').options,
        size = document.getElementById('SingleOptionSelector-0'),
        btnAddToCard = document.getElementById('AddToCart-product-template');
        btnAddToCard.disabled = false;

      await fill(size, 'M');
      await btnAddToCard.click();
      await setTimeout(goToCart(),1000);
    })();
  }

  if (location.href == srcCart) {
    const btnCheckout = document.querySelector('button[name="checkout"]');

    if(btnCheckout){
      setTimeout(() => {
        console.log('КЛик');
        btnCheckout.click();
      }, );
    }
  }

  if((location.href).match(srcCheckout)) {
    setTimeout(function(){
      const name = document.getElementById('name');
      console.log(name);
      document.querySelector('button[name = "button"]').click();
    }, );
  }

  function goToCart() {
    location.href = srcCart;
  }
}


function fill(el, value) {
 if (el.tagName === "SELECT")
	{
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", false, true);
		el.value = value;
		el.dispatchEvent(evt);
	}
}
