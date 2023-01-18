var div = document.querySelector(".EveryBeer");
var url = "https://api.punkapi.com/v2/beers";
var Beer = /** @class */ (function () {
    function Beer(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
    return Beer;
}());
var BeerList = /** @class */ (function () {
    function BeerList(beersArray) {
        this.beers = [];
        for (var i = 0; i < beersArray.length; i++) {
            this.beers.push(new Beer(beersArray[i].name, beersArray[i].description, beersArray[i].image_url));
        }
    }
    return BeerList;
}());
var p = fetch(url);
p.then(function (response) {
    return response.json();
}).then(function (beerArray) {
    var beerList = new BeerList(beerArray);
    logBeers(beerList);
    previewABeer(beerList);
});
function logBeers(beerList) {
    for (var i = 0; i < beerList.beers.length; i++) {
        var newPtag = document.createElement("p");
        newPtag.tabIndex = i;
        newPtag.className = "BeerInformation";
        newPtag.innerHTML = "".concat(beerList.beers[i].name);
        div.append(newPtag);
    }
    console.log(beerList);
}
function previewABeer(beerList) {
    var beerPreview = document.querySelector(".BeerPreviewWichOne");
    var WhatBeer = document.querySelectorAll(".BeerInformation");
    var _loop_1 = function (i) {
        WhatBeer[i].addEventListener('click', function () {
            beerPreview.innerHTML = '';
            var newPtag = document.createElement("p");
            var newPtag2 = document.createElement("p");
            var newImagetag = document.createElement("img");
            newImagetag.setAttribute("src", beerList.beers[i].image);
            newPtag.innerHTML = beerList.beers[i].name;
            newPtag2.innerHTML = beerList.beers[i].description;
            beerPreview.append(newPtag, newPtag2, newImagetag);
        });
    };
    for (var i = 0; i < WhatBeer.length; i++) {
        _loop_1(i);
    }
}
