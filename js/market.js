//dummy data 
let DummyData = [
    {
        Name: "2060",
        PriceFrom: "$350",
        PriceTo: "$500",
        Websites: ["amazon", "ebay", "aliexpress", "alibaba"],
        image: "pics/Rtx2060.jpg",
        Price_Amazon: "$288",
        Price_Ebay: "$486.05",
        Price_Aliexpress: "$212.75",
        Price_Alibaba: "$302.00"
    },
    {
        Name: "3060",
        PriceFrom: "$382",
        PriceTo: "$900",
        Websites: ["amazon","ebay", "aliexpress", "alibaba"],
        image: "pics/Rtx3060.jpg",
        Price_Amazon: "$382.25",
        Price_Ebay: "$607.70",
        Price_Aliexpress: "$814.84",
        Price_Alibaba: "$695.18"
    },
    {
        Name: "4090",
        PriceFrom: "$2200",
        PriceTo: "$2700",
        Websites: ["amazon", "ebay", "alibaba"],
        image: "pics/Rtx4090.jpg",
        Price_Amazon: "$2,699.98",
        Price_Ebay: "$2,144.95",
        Price_Aliexpress: "",
        Price_Alibaba: "$2,364.00"
    },
    {
        Name: "1060",
        PriceFrom: "$174",
        PriceTo: "$499",
        Websites: ["amazon", "ebay", "aliexpress", "alibaba"],
        image: "pics/Rtx1060.jpg",
        Price_Amazon: "$267",
        Price_Ebay: "$189.00",
        Price_Aliexpress: "$174.03",
        Price_Alibaba: "$499.00"
    }
]
var Data = [];

//param url 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const
    keys = urlParams.keys(),
    values = urlParams.values();
let key = [], value = [];

for (const key1 of keys) key.push(key1);

for (const value1 of values) value.push(value1);
    if (value.length == 0) {
        Data = DummyData;
    }
    else if (value.length ==1) {
        var DummyData1 = [];
        let counter222 = 0;
        for (let i = 0; i < DummyData.length; i++) {
            if (DummyData[i].Name == value[0]) {
                DummyData1[counter222] = DummyData[i];
                counter222++;
            }
        }
        Data = DummyData1;
        update();
}
//The Hook
var ThereMore = false;
function update() { 
    var array = document.getElementsByClassName(`alllist`)[0].children;
    for (let i = 0; i < Data.length; i++) {
        array[i].style.display = 'block';
        let image = array[i].children[1] //img for gpu
        let name = array[i].children[2] //name
        let pricefrom = array[i].children[3] //from money
        let priceto = array[i].children[4] //to money
        image.src = Data[i].image;
        name.innerHTML = Data[i].Name;
        pricefrom.innerHTML = Data[i].PriceFrom;
        priceto.innerHTML = Data[i].PriceTo;
        array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
    }
   
    if (array.length > Data.length) {
        for (let i = Data.length; i < array.length; i++) {
            array[i].style.display = "none";
        }
    }
}

//range for price
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 500;
var minVal1 = parseInt(rangeInput[0].value),
    maxVal1 = parseInt(rangeInput[1].value);
priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    var timerId = null;
    input.addEventListener("input", (e) => {
        clearTimeout(timerId);
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        var delay = maxVal;

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        //desgin the small line blue
        if (maxVal <= 1100 && maxVal > 500) { 
            let sliderprogress = document.getElementsByClassName("slider")[0].children[0];
            sliderprogress.style.borderTopRightRadius = "1px";
            sliderprogress.style.borderBottomRightRadius = "1px";
        }
        else if (maxVal == 500) {
            let sliderprogress = document.getElementsByClassName("slider")[0].children[0];
            sliderprogress.style.borderTopRightRadius = "0px";
            sliderprogress.style.borderBottomRightRadius = "0px";
        }
        else {
            let sliderprogress = document.getElementsByClassName("slider")[0].children[0];
            sliderprogress.style.borderRadius = "5px";
        }

        timerId = setTimeout(function () {
            maxVal1 = maxVal;
            minVal1 = minVal;
            let all = document.getElementsByClassName("checkbox-all")[0];
            let amazon = document.getElementsByClassName("checkbox-amazon")[0];
            let aliexpress = document.getElementsByClassName("checkbox-aliex")[0];
            let ebay = document.getElementsByClassName("checkbox-ebay")[0];
            let alibaba = document.getElementsByClassName("checkbox-alibaba")[0];
            if (all.checked) {
                allthis();
            }
            if (amazon.checked || aliexpress.checked || ebay.checked || alibaba.checked)
                testthis();
        }, 1000);
       // add this -- call all , test this and check for price by minVal1,maxVal1
    });
});

function hidefromwhere() {
    var x = !document.getElementById("toggle").checked;
    var hidethis = document.getElementsByClassName("market-component5");
    var hidethis2 = document.getElementsByClassName("market-text08");
    if (x) {
        hidethis[0].style.display = 'none';
        hidethis2[0].style.display = 'none';
    }
    else {
        hidethis[0].style.display = 'block';
        hidethis2[0].style.display = 'block';

    }
}
function testthis() {
    var array = document.getElementsByClassName(`alllist`)[0].children;

    let HighestPrice = document.getElementsByClassName("input-max")[0].value;
    let LowestPrice = document.getElementsByClassName("input-min")[0].value;

    let all = document.getElementsByClassName("checkbox-all")[0];
    let amazon = document.getElementsByClassName("checkbox-amazon")[0];
    let aliexpress = document.getElementsByClassName("checkbox-aliex")[0];
    let ebay = document.getElementsByClassName("checkbox-ebay")[0];
    let alibaba = document.getElementsByClassName("checkbox-alibaba")[0];
    all.checked = false;
    //show What Is Selected
    let counter = 0;
    if (aliexpress.checked)
        counter++;
    if (amazon.checked)
        counter++;
    if (ebay.checked)
        counter++;
    if (alibaba.checked)
        counter++;
    if (Data.length > 1) {
        var countereee = 1;
        if (counter == 1)
            if (amazon.checked || aliexpress.checked || ebay.checked || alibaba.checked)
                for (let i = 0; i < Object.keys(Data).length; i++) {
                    if (i < 3) {
                        var thereone = false;
                        if (aliexpress.checked) {
                            if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;

                                array[i].style.display = "flex";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                            }
                            else {
                                array[i].style.display = "none";
                                countereee--;
                            }
                        }
                        if (amazon.checked && !thereone)
                            if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                            }
                            else {
                                array[i].style.display = "none";
                                countereee--;
                            }
                        if (ebay.checked && !thereone)
                            if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                            }
                            else {
                                array[i].style.display = "none";
                                countereee--;
                            }
                        if (alibaba.checked && !thereone)
                            if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                            }
                            else {
                                array[i].style.display = "none";
                                countereee--;
                            }
                    }
                    else if (i >= 3 && ThereMore) {
                        if (array[i] == undefined) {
                            var thereone = false;
                            if (aliexpress.checked) {
                                if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    ss(i, countereee);
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            }
                            if (amazon.checked && !thereone)
                                if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    ss(i, countereee);
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            if (ebay.checked && !thereone)
                                if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    ss(i, countereee);
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;                                    
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            if (alibaba.checked && !thereone)
                                if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    ss(i, countereee);
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;                                   
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                        }
                        else {
                            var thereone = false;
                            if (aliexpress.checked) {
                                if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    array[i].style.display = "block";
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            }
                            if (amazon.checked && !thereone)
                                if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    array[i].style.display = "block";
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            if (ebay.checked && !thereone)
                                if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    array[i].style.display = "block";
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                            if (alibaba.checked && !thereone)
                                if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                    thereone = true;
                                    array[i].style.display = "block";
                                    array[i].style.top = `${494 + 200 * countereee}px`;
                                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                                    countereee++;
                                }
                                else {
                                    array[i].style.display = "none";
                                }
                        }
                    }
                    else if (i >= 3 && !ThereMore && !(parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)) {
                        if (array[i] != undefined)
                            array[i].remove();
                        document.getElementsByClassName("market-market")[0].style.height = `730px`;
                        document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `694px`;
                    }
                }
            else
                for (let i = 0; i < Object.keys(Data).length; i++) {
                    if (i < 3)
                        array[i].style.display = "none";
                    else if (i >= 3 && ThereMore) {
                        // there No Show More
                        console.log("NO Show")
                        array[i].style.display = "none";
                        document.getElementsByClassName("market-market")[0].style.height = "730px";
                    }
                }
        else if (counter > 1) {
            for (let i = 0; i < Object.keys(Data).length; i++) {
                if (i < 3) {
                    let iwillreach = 0;
                    if (aliexpress.checked)
                        if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (amazon.checked)
                        if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (ebay.checked)
                        if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (alibaba.checked)
                        if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (iwillreach == counter) {
                        array[i].style.display = "block";
                        let image = array[i].children[1] //img for gpu
                        let name = array[i].children[2] //name
                        let pricefrom = array[i].children[3] //from money
                        let priceto = array[i].children[4] //to money
                        image.src = Data[i].image;
                        name.innerHTML = Data[i].Name;
                        pricefrom.innerHTML = Data[i].PriceFrom;
                        priceto.innerHTML = Data[i].PriceTo;
                    } else {
                        array[i].style.display = "none";
                        countereee--;
                    }
                }
                else if (i >= 3 && ThereMore) {
                    let iwillreach = 0;
                    if (aliexpress.checked)
                        if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (amazon.checked)
                        if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (ebay.checked)
                        if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (alibaba.checked)
                        if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (iwillreach == counter && array[i] == undefined) {
                        console.log(countereee)
                        ss(i, countereee);
                        array[i].style.top = `${494 + 200 * countereee}px`;
                        document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`;
                        document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`;
                        countereee++;
                    }
                    else if (iwillreach == counter && array[i]) {
                        array[i].style.display = "block";
                        array[i].style.top = `${494 + 200 * countereee}px`;
                        document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`;
                        document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`;
                        countereee++;
                    }
                    else {
                        if (array[i] != undefined)
                            array[i].style.display = "none";
                    }
                }
                else if (i >= 3 && !ThereMore && !(parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)) {
                    if (array[i] != undefined)
                        array[i].remove();
                    
                }
            }

        }
        else
            for (let i = 0; i < Object.keys(Data).length; i++)
                if (i < 3)
                    array[i].style.display = "none";
                else if (i >= 3 && ThereMore) {
                    // there No Show More
                    console.log("NO Show")
                    array[i].style.display = "none";
                    document.getElementsByClassName("market-market")[0].style.height = "730px";
                }
    }
    else if (Data.length == 1) {
        if (counter == 1)
            if (amazon.checked || aliexpress.checked || ebay.checked || alibaba.checked)
                for (let i = 0; i < Data.length; i++) {
                        var thereone = false;
                        if (aliexpress.checked) {
                            if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "flex";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                                array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
                            }
                            else {
                                array[i].style.display = "none";
                            }
                        }
                        if (amazon.checked && !thereone)
                            if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                                array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
                            }
                            else {
                                array[i].style.display = "none";
                            }
                        if (ebay.checked && !thereone)
                            if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                                array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
                            }
                            else {
                                array[i].style.display = "none";
                            }
                        if (alibaba.checked && !thereone)
                            if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                                thereone = true;
                                array[i].style.display = "block";
                                let image = array[i].children[1] //img for gpu
                                let name = array[i].children[2] //name
                                let pricefrom = array[i].children[3] //from money
                                let priceto = array[i].children[4] //to money
                                image.src = Data[i].image;
                                name.innerHTML = Data[i].Name;
                                pricefrom.innerHTML = Data[i].PriceFrom;
                                priceto.innerHTML = Data[i].PriceTo;
                                array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
                            }
                            else {
                                array[i].style.display = "none";
                            }
                }
            else
                for (let i = Data.length; i < array.length; i++) {
                    if (i < 3)
                        array[i].style.display = "none";
                }
        else if (counter > 1) {
            for (let i = 0; i < Data.length; i++) {
                if (i < 3) {
                    let iwillreach = 0;
                    if (aliexpress.checked)
                        if (Data[i].Websites.includes("aliexpress") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (amazon.checked)
                        if (Data[i].Websites.includes("amazon") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (ebay.checked)
                        if (Data[i].Websites.includes("ebay") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (alibaba.checked)
                        if (Data[i].Websites.includes("alibaba") && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)
                            iwillreach++;
                    if (iwillreach == counter) {
                        array[i].style.display = "block";
                        let image = array[i].children[1] //img for gpu
                        let name = array[i].children[2] //name
                        let pricefrom = array[i].children[3] //from money
                        let priceto = array[i].children[4] //to money
                        image.src = Data[i].image;
                        name.innerHTML = Data[i].Name;
                        pricefrom.innerHTML = Data[i].PriceFrom;
                        priceto.innerHTML = Data[i].PriceTo;
                        array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
                    } else {
                        array[i].style.display = "none";
                    }
                }
                else { // no need for this because its only one

                }
            }

        }
        else
            for (let i = 0; i < Object.keys(Data).length; i++)
                if (i < 3)
                    array[i].style.display = "none";
                else if (i >= 3 && ThereMore) 
                    if (array[i] != undefined)
                        array[i].style.display = "none";
    }
    else {
        alert("Wrong Way");
    }
        
}
function ReloadonPage() {
    // for checkboxs
    let all = document.getElementsByClassName("checkbox-all")[0];
    let amazon = document.getElementsByClassName("checkbox-amazon")[0];
    let aliexpress = document.getElementsByClassName("checkbox-aliex")[0];
    let ebay = document.getElementsByClassName("checkbox-ebay")[0];
    let alibaba = document.getElementsByClassName("checkbox-alibaba")[0];
    if (all.checked) {
        allthis();
    }
    if (amazon.checked || aliexpress.checked || ebay.checked || alibaba.checked)
        testthis();
    //for slider input 
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
}
function allthis() {
    var alllist = document.getElementsByClassName(`alllist`);
    var array = alllist[0].children;
    var countereee = 1;
    //maxVal1 
    //minVal1

    let all = document.getElementsByClassName("checkbox-all")[0];
    let amazon = document.getElementsByClassName("checkbox-amazon")[0];
    let aliexpress = document.getElementsByClassName("checkbox-aliex")[0];
    let ebay = document.getElementsByClassName("checkbox-ebay")[0];
    let alibaba = document.getElementsByClassName("checkbox-alibaba")[0];
    if (all.checked) {
        amazon.checked = false;
        aliexpress.checked = false;
        ebay.checked = false;
        alibaba.checked = false;
        //show all
        for (let i = 0; i < Data.length; i++) {
            if (i < 3 && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                array[i].style.display = 'block';
                let image = array[i].children[1] //img for gpu
                let name = array[i].children[2] //name
                let pricefrom = array[i].children[3] //from money
                let priceto = array[i].children[4] //to money
                image.src = Data[i].image;
                name.innerHTML = Data[i].Name;
                pricefrom.innerHTML = Data[i].PriceFrom;
                priceto.innerHTML = Data[i].PriceTo;
                array[i].children[5].children[0].href = `more.html?a=${Data[i].Name}&amazon=${Data[i].Price_Amazon}&ebay=${Data[i].Price_Ebay}&aliexpress=${Data[i].Price_Aliexpress}&alibaba=${Data[i].Price_Alibaba}`;
            }
            else if (i >= 3 && parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1) {
                if (array[i] == undefined) {
                    ss(i, countereee);
                    array[i].style.top = `${494 + 200 * countereee}px`;
                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                    countereee++;
                }
                else {
                    array[i].style.display = "block";
                    array[i].style.top = `${494 + 200 * countereee}px`;
                    document.getElementsByClassName("market-market")[0].style.height = `${730 + 200 * countereee}px`
                    document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `${694 + 200 * countereee}px`
                }
            }
            else if (i >= 3 && !ThereMore && !(parseInt(Data[i].PriceFrom.replace('$', '')) >= minVal1 && parseInt(Data[i].PriceTo.replace('$', '')) <= maxVal1)) {
                if (array[i] != undefined)
                    array[i].remove()
                document.getElementsByClassName("market-market")[0].style.height = `730px`;
                document.getElementsByClassName("market-iconsax-lineararrowup21")[0].style.top = `694px`;
            }
        }

    }
    else {
        //hide all
        for (let i = 0; i < Data.length; i++)
            if (i < 3)
                array[i].style.display = "none";
            else if (i >= 3 && ThereMore) {
                // there No Show More
                console.log("NO Show")
                array[i].style.display = "none";
                document.getElementsByClassName("market-market")[0].style.height = "730px";
            }
    }

   
}

function ShowMore() {
    var ShowMoreHide = document.getElementsByClassName("ShowMoreHide")[0];
    if (ShowMoreHide.children[0].style.display == "none") {
        console.log("White Down");
        ThereMore = true;
        ShowMoreHide.children[0].style.display = "block";
        ShowMoreHide.children[1].style.display = "none";
    }
    else {
        console.log("White Up");
        ThereMore = false;
        ShowMoreHide.children[0].style.display = "none";
        ShowMoreHide.children[1].style.display = "block";
    }
    setTimeout(() => {
        let all = document.getElementsByClassName("checkbox-all")[0];
        let amazon = document.getElementsByClassName("checkbox-amazon")[0];
        let aliexpress = document.getElementsByClassName("checkbox-aliex")[0];
        let ebay = document.getElementsByClassName("checkbox-ebay")[0];
        let alibaba = document.getElementsByClassName("checkbox-alibaba")[0];
        if (all.checked) {
            allthis();
        }
        if (amazon.checked || aliexpress.checked || ebay.checked || alibaba.checked)
            testthis();
    }, 2000);
}
     /*
   function myFunction() {
       var x = document.getElementsByClassName("hideme2");
       var arrowup = document.getElementsByClassName('market-iconsax-lineararrowup2');
       var arrowdown = document.getElementsByClassName('market-iconsax-lineararrowdown2');
       
   if (x[0].style.display === "none") {
       x[0].style.display = "block";
       arrowup[0].style.display = 'block';
       arrowdown[0].style.display = 'none';
         } else {
       x[0].style.display = "none";
       arrowdown[0].style.display = 'block';
       arrowup[0].style.display = 'none';

         }
     }
     */
//Self Made
function ss(i1, countereee) {
        const div = document.createElement("div");
        div.className = "market-component12";
        const img1 = document.createElement("img");
        img1.classList = "market-rectangle62";
        img1.src = "pics/white-with-gray.png";
        const img2 = document.createElement("img");
        img2.classList = "market-rectangle52";
        img2.src = Data[i1].image;
        const span1 = document.createElement("span");
        span1.classList = `market-text47`;
        span1.innerHTML = Data[i1].Name;
        const span2 = document.createElement("span");
        span2.classList = `market-text49`;
        span2.innerHTML = Data[i1].PriceFrom;
        const span3 = document.createElement("span");
        span3.classList = `market-text51`;
        span3.innerHTML = Data[i1].PriceTo;
        const span4 = document.createElement("span");
        span4.classList = `market-text55`;
        const a = document.createElement("a");
        a.innerHTML = "More";
        a.href = `more.html?a=${Data[i1].Name}&amazon=${Data[i1].Price_Amazon}&ebay=${Data[i1].Price_Ebay}&aliexpress=${Data[i1].Price_Aliexpress}&alibaba=${Data[i1].Price_Alibaba}`;
        var alllist = document.getElementsByClassName("alllist")[0];
        div.appendChild(img1);
        div.appendChild(img2);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        span4.appendChild(a);
    div.appendChild(span4);
    div.classList.add(countereee);
        alllist.append(div);
    }