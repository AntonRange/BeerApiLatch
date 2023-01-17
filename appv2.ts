const div = document.querySelector("#tomat") as HTMLDivElement;
const url = "https://api.punkapi.com/v2/beers";


class Beer {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

class BeerList {
    beers: Beer[];

    constructor(beersArray: any) {
        this.beers = [];
        for (let i = 0; i < beersArray.length; i++) {
            this.beers.push(new Beer(beersArray[i].name, beersArray[i].description));
        }
    }
}

const p = fetch(url);
p.then(response => {
    return response.json();
}).then(beerArray => {
    const beerList = new BeerList(beerArray);
    logBeers(beerList);
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

