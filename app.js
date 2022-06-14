var btc = document.getElementById("bitcoin");
var ethe = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");





let settings = {
    "async" : true,
    "scrossDomain" : true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Ccardano%2Cpolkadot%2Csolana%2Cdai%2Ctron%2Cleo&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    ethe.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});