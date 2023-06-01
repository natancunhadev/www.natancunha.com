(function(w){var filterSku=(sku)=>{return sku&&sku!="undefined"?sku:'';}
class Item{rawItem={};item={};constructor(v4,rawItem,listData={},page=null){this.v4=v4;this.page=page;this.rawItem=rawItem;this.listData=listData;if(this.page=='checkout'){this.#loadCheckoutItem();}else{this.#load();}}#load(){this.item['quantity']=this.rawItem.quantity;this.item['price']=this.rawItem.price/100;this.item['variant_id']=this.rawItem.variant_id;if(this.page=='cart'){if(this.rawItem.variant?.default!=1){this.item['sku']=filterSku(this.rawItem?.variant?.sku);}else{this.item['sku']=filterSku(this.rawItem?.product?.sku);}}else{this.item['sku']=filterSku(this.rawItem.sku);}
if(this.v4==1){this.item['item_id']=this.rawItem.product_id;this.item['item_name']=this.rawItem.product_title;this.item['item_list_id']=this.listData?.listId;this.item['item_list_name']=this.listData?.listName;this.item['item_brand']=this.rawItem.brand??'';this.item['item_category']=this.rawItem.category??'';if(this.page=='cart'){this.item['item_variant']=this.rawItem.variant.title;}else{this.item['item_variant']=this.rawItem.variant;}}else{this.item['id']=this.rawItem.product_id;this.item['name']=this.rawItem.product_title;this.item['list_name']=this.listData.listName;this.item['brand']=this.rawItem?.brand??'';this.item['category']=this.rawItem?.category??'';if(this.page=='cart'){this.item['variant']=this.rawItem.variant.title;}else{this.item['variant']=this.rawItem.variant;}}}#loadCheckoutItem(){this.item['quantity']=this.rawItem.quantity;this.item['variant_id']=this.rawItem.variant_id;this.item['price']=this.rawItem.price;this.item['product_id_sp']=this.rawItem.product_id_sp;this.item['product_id_wc']=this.rawItem.product_id_wc;this.item['sku']=filterSku(this.rawItem.sku);if(this.v4==1){this.item['item_id']=this.rawItem.id;this.item['item_name']=this.rawItem.name;this.item['item_list_id']=this.listData?.listId;this.item['item_list_name']=this.listData?.listName;this.item['item_brand']=this.rawItem.brand;this.item['item_category']=this.rawItem.category;this.item['item_variant']=this.rawItem.variant;}else{this.item['id']=this.rawItem.id;this.item['name']=this.rawItem.name;this.item['list_name']=this.listData?.listName;this.item['brand']=this.rawItem.brand;this.item['category']=this.rawItem.category;this.item['variant']=this.rawItem.variant;}}}
class GoogleAnalyticsEvents{event=null;#payload={};constructor(v4=false,analyticsAccount,currency){this.v4=v4;this.analyticsAccount=analyticsAccount;this.currency=currency;if(this.v4==1){this.#payload['currency']=this.currency;}
this.items=[];}
page(page=null){this.page=page;return this;}#prepareItems(cartItems,listData){this.items=[];cartItems.forEach(item=>{var itemObj=new Item(this.v4,item,listData,this.page).item;this.items.push(itemObj);});if(this.items.length>0){this.#setTotalCartValue();}}#setTotalCartValue(){this.totalCartValue=this.items.map((item)=>parseFloat(item.price)*parseInt(item.quantity)).reduce((prev,next)=>prev+next);}
beginCheckout(cartItems){this.#prepareItems(cartItems,{listId:'product_in_checkout',listName:'Product in checkout'});this.#payload=Object.assign(this.#payload,{items:this.items,send_to:this.analyticsAccount,ecomm_pagetype:'checkout',ecomm_prodid:this.v4==1?this.items.map(({item_id})=>item_id):this.items.map(({id})=>id),ecomm_totalvalue:this.totalCartValue});if(this.v4==1){this.#payload['value']=this.totalCartValue;}
this.event='begin_checkout';return this;}
shippingInfo(cartItems){this.#prepareItems(cartItems,{listId:'checkout_shipping_info',listName:'Shipping info added in checkout'});this.#payload=Object.assign(this.#payload,{items:this.items,send_to:this.analyticsAccount});if(this.v4==1){this.#payload['value']=this.totalCartValue;this.event='add_shipping_info';}else{this.event='loaded_shipping_info';}
return this;}
paymentInfo(cartItems){this.#prepareItems(cartItems,{listId:'checkout_payment_info',listName:'Payment info added in checkout'});this.#payload=Object.assign(this.#payload,{items:this.items,send_to:this.analyticsAccount});if(this.v4==1){this.#payload['value']=this.totalCartValue;this.event='add_payment_info';}else{this.event='begin_payment_info';}
return this;}
checkoutInfo(cartItems){this.#prepareItems(cartItems,{listId:'product_in_checkout_info',listName:'Product in checkout info'});this.#payload=Object.assign(this.#payload,{items:this.items,send_to:this.analyticsAccount});if(this.v4==1){this.#payload['value']=this.totalCartValue;}
this.event='begin_checkout_info';return this;}
addToCart(cartItems){this.page='cart';this.#prepareItems(cartItems,{listId:'product_in_cart',listName:'Product in cart'});this.#payload=Object.assign(this.#payload,{items:this.items,send_to:this.analyticsAccount,ecomm_pagetype:'cart',ecomm_prodid:this.v4==1?this.items.map(({item_id})=>item_id):this.items.map(({id})=>id),ecomm_totalvalue:this.totalCartValue})
if(this.v4==1){this.#payload['value']=this.totalCartValue;}
this.event='add_to_cart';return this;}
viewItem(product,currentVariant){var productPrice=currentVariant.price;var sku=filterSku(product.sku);if(currentVariant.default!=1){sku=filterSku(currentVariant.sku);}
var rawItem={quantity:1,price:productPrice,variant_id:currentVariant.id,product_id:product.id,product_title:product.title,brand:product.vendor??'',category:product.type??'',variant:currentVariant.default==1?'':currentVariant.title,sku:sku,}
var item=new Item(this.v4,rawItem,{listId:'product_viewed',listName:'Product viewed'}).item;this.#payload=Object.assign(this.#payload,{ecomm_pagetype:'product',ecomm_prodid:this.v4==1?[item.item_id]:[item.id],ecomm_totalvalue:item.price*item.quantity,items:[item],send_to:this.analyticsAccount,})
if(this.v4==1){this.#payload['value']=item.price*item.quantity;}
this.event='view_item';return this;}
purchase(payload){this.#payload=JSON.parse(payload);this.#payload['send_to']=this.analyticsAccount;this.event='purchase';return this;}
dispatch(){if(typeof gtag!='undefined'){if(this.event){gtag('event',this.event,this.#payload);}}}}
w.GaEvents=GoogleAnalyticsEvents;})(window);