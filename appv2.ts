const div = document.querySelector(".EveryBeer") as HTMLDivElement;
const url = "https://api.punkapi.com/v2/beers";


class Beer {
    name: string;
    description: string;
    image: string;

    constructor(name: string, description: string, image: string) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

class BeerList {
    beers: Beer[];

    constructor(beersArray: any) {
        this.beers = [];
        for (let i = 0; i < beersArray.length; i++) {
            this.beers.push(new Beer(beersArray[i].name, beersArray[i].description, beersArray[i].image_url));
        }
    }
}

const p = fetch(url);
p.then(response => {
    return response.json();
}).then(beerArray => {
    const beerList = new BeerList(beerArray);
    logBeers(beerList);
    previewABeer(beerList)
});

function logBeers(beerList: BeerList) {


    for (let i = 0; i < beerList.beers.length; i++) {
        const newPtag = document.createElement("p");
        newPtag.tabIndex = i;
        newPtag.className = "BeerInformation";
        newPtag.innerHTML = `${beerList.beers[i].name}`;
        div.append(newPtag);
    }
    console.log(beerList);
}



function previewABeer(beerList: BeerList) {
    const beerPreview = document.querySelector(".BeerPreviewWichOne") as HTMLDivElement;

    const WhatBeer = document.querySelectorAll(".BeerInformation");

    for (let i = 0; i < WhatBeer.length; i++) {
        WhatBeer[i].addEventListener('click', () => {
            beerPreview.innerHTML = '';
            let newPtag = document.createElement("p");
            let newPtag2 = document.createElement("p");
            let newImagetag = document.createElement("img");
            newImagetag.setAttribute("src", beerList.beers[i].image)
            newPtag.innerHTML = beerList.beers[i].name
            newPtag2.innerHTML = beerList.beers[i].description
            beerPreview.append(newPtag,newPtag2, newImagetag);
        })


    }


}
