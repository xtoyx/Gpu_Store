const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const
    keys = urlParams.keys(),
    values = urlParams.values();
let key = [],value=[];

for (const key1 of keys) key.push(key1);

for (const value1 of values) value.push(value1);

var doo = document.getElementById("replaceme");
doo.textContent += 'Gtx';
if (urlParams.get('a') != null) {
    doo.textContent += ' ' + value[0];
    var ul = document.getElementsByClassName("responsive-table");
    var amazonlink = document.getElementById("myLinkId");
    var ebaylink = document.getElementById("myLinkId2");
    var aliexpresslink = document.getElementById("myLinkId3");
    var alibabalink = document.getElementById("myLinkId4");
    var morechange = document.getElementById("morechange");
    var p_change = document.getElementsByClassName("more-text08")[0];
    var Image=document.getElementsByClassName("more-rectangle5")[0];

    var textchange = document.getElementById("changetext1");
    var textchange2 = document.getElementById("changetext2");
    var textchange3 = document.getElementById("changetext3");
    var textchange4 = document.getElementById("changetext4");
    textchange.innerHTML = value[1];
    textchange2.innerHTML = value[2];
    textchange3.innerHTML = value[3];
    textchange4.innerHTML = value[4];

    if (value[0] == 2060) {
        Image.src="pics/Rtx2060.jpg";
        amazonlink.href = "https://www.amazon.com/ASUS-Overclocked-Dual-Fan-DisplayPort-DUAL-RTX2060-O6G-EVO/dp/B07R18TH1X/ref=sr_1_1?keywords=GeForce%2BRTX%2B2060&qid=1672691544&sr=8-1&th=1";
        ebaylink.href = "https://www.ebay.com/itm/275239073232?epid=13047406891&hash=item401586f5d0:g:2b8AAOSwpd5iQjFh&amdata=enc%3AAQAHAAAA4Aykxofk133Zk5BGBefQVyuOQN9V1i51bq04OX32uLIkrjpQGtrMwBtD8JiManxsDTTaIIXmMYIhVq1FmeunpgHdr5%2FPMSFt4vL%2BIRUi8g9JEMVvaJdRlpoGB9IjLe4mg51jSg7j4WMXWQmP4NIxGdjjWjnyj0IkBjHjGX3lT%2BEY2vN54F%2BNj9%2BO%2B0RfOnVaFIf9bZklKwDO56ZuVmGSK3CL1cU%2F%2BdS5CS1K3MG%2FTnUq%2BczDSVKgvCkEYiLP%2B2HZdEu87SFRhlkQMwXfjKXPcBgOARvbP5exiCRfYsjGYWuo%7Ctkp%3ABFBM2uyNya9h";
        aliexpresslink.href = "https://ar.aliexpress.com/item/1005004848476993.html?spm=a2g0o.productlist.main.5.34fb53da3sK18l&algo_pvid=5ef15291-9b47-444c-b627-3da154c9d79c&aem_p4p_detail=20230104033708285822807190200000475316&algo_exp_id=5ef15291-9b47-444c-b627-3da154c9d79c-2&pdp_ext_f=%7B%22sku_id%22%3A%2212000030730935278%22%7D&pdp_npi=2%40dis%21ILS%21742.63%21728.21%21%21%21%21%21%402145274c16728322284608035d0724%2112000030730935278%21sea&curPageLogUid=ZkTeDs6B5TCm&ad_pvid=20230104033708285822807190200000475316_3&ad_pvid=20230104033708285822807190200000475316_3";
        alibabalink.href = "https://www.alibaba.com/product-detail/Rtx-2060-New-Super-8g-Gaming_1600656690745.html?spm=a2700.7735675.0.0.2deff930e1tdqU";
        morechange.href = "Gpu2060.html";
        p_change.innerHTML ="The GeForce RTX 2060 Was Created January 15th 2018."
    }
    else if (value[0] == 3060) {
        Image.src="pics/Rtx3060.jpg";
        amazonlink.href = "https://www.amazon.com/ZOTAC-GeForce-Graphics-IceStorm-ZT-A30600H-10M/dp/B08W8DGK3X/ref=sr_1_1?crid=JDTWH8R76WW&keywords=GeForce%2BRTX%2B3060&qid=1672693491&sprefix=geforce%2Brtx%2B2060%2Caps%2C817&sr=8-1";
        ebaylink.href = "https://www.ebay.com/p/23046151246?iid=334689926942&rt=nc";
        aliexpresslink.href = "https://he.aliexpress.com/item/1005004564015786.html?spm=a2g0o.ppclist.product.4.4897njOXnjOXMR&pdp_npi=2%40dis%21ILS%21%E2%82%AA%202%2C844.34%21%E2%82%AA%202%2C844.34%21%21%21%21%21%402101f6ba16728346183968685e25d9%2112000029636259911%21btf&_t=pvid%3A17eee0b1-29ed-49bf-a846-914d88a96109&afTraceInfo=1005004564015786__pc__pcBridgePPC__xxxxxx__1672834618&gatewayAdapt=glo2isr";
        alibabalink.href = "https://www.alibaba.com/product-detail/2022-Hot-Sell-GeForce-RTX-3060Ti_1600441725157.html?spm=a2700.7724857.0.0.6009372c1BuMCp";
        morechange.href = "Gpu3060.html";
        p_change.innerHTML = "The Nvidia GeForce RTX 3060 launched on February 25, 2021."
    }
    else if (value[0] == 4090) {
        Image.src="pics/Rtx4090.jpg";
        amazonlink.href = "https://www.amazon.com/MSI-Tri-Frozr-Lovelace-Architecture-Graphics/dp/B0BG959RCF/ref=sr_1_1?crid=3QRAVEMTCW53C&keywords=GeForce%2BRTX%2B4090&qid=1672693535&sprefix=geforce%2Brtx%2B3090%2Caps%2C212&sr=8-1";
        ebaylink.href = "https://www.ebay.com/p/7057049227";
        aliexpresslink.href = "";
        alibabalink.href = "https://www.alibaba.com/product-detail/iGame-GeForce-RTX-4090-Neptune-OC_11000005539683.html?spm=a2700.pc_countrysearch.main07.7.4a011584aHFwh5";
        morechange.href = "Gpu4090.html";
        p_change.innerHTML = "The release date for the NVIDIA RTX 4090 24GB was Wednesday 12th October 2022.";
        //hide ul 
        ul[0].children[2].style.display = "none"
    }
    else if (value[0] == 1060) {
        Image.src="pics/Rtx1060.jpg";
        amazonlink.href = "https://www.amazon.com/GOWENIC-Graphics-8008MHz-Frequency-Interface/dp/B0BGQS74TN/ref=sr_1_1_sspa?keywords=gtx%2B1060&qid=1673604482&sr=8-1-spons&smid=A2GOQFDBDTKF2M&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVlkyV1AwTFlRRzMxJmVuY3J5cHRlZElkPUEwNTkwOTM5MzdDSlNXQkVQTzBYMSZlbmNyeXB0ZWRBZElkPUEwNTM0ODM1MVNITktVUlhSTzRaSyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1";
        ebaylink.href = "https://www.ebay.com/itm/324499240513?hash=item4b8da97641:g:CZUAAOSw~aNjeHvd&amdata=enc%3AAQAHAAAA0FX36sPRm7%2BGrDOYMC6HPKa05oGtxDXLgO0FhYr3P960eBJDp2gdOCiEGwPnMg2cdlFPRfn8llCBLMIWQeWEKfJUyhcY40smyKWeQC7en8S8D2yEBUan3u%2FCROzdDBIjIjQO9WQT92YqBIX%2BpGI7P9wgyHmM1wMvDhwRPXECB9jU7p8aBuU1lZbkV48D6Ir9Xq%2FuH4PIrfF0Daw7tA7Zmc2L9pGopgNILlGMGVrKL9tP3sSmgy9Cnf%2BefdQdWlw%2Fjyo7eiO6rJhE5BwIMAVz1ug%3D%7Ctkp%3ABFBM9IfZqbVh";
        aliexpresslink.href = "https://ar.aliexpress.com/item/32971130698.html?spm=a2g0o.productlist.main.1.74cfYpI1YpI1tJ&algo_pvid=13812090-1399-41b7-ae0b-6537e74726ce&algo_exp_id=13812090-1399-41b7-ae0b-6537e74726ce-0&pdp_ext_f=%7B%22sku_id%22%3A%2212000030677209602%22%7D&pdp_npi=2%40dis%21ILS%211647.82%21593.22%21%21%21%21%21%402100bc5c16736046461748449d06d8%2112000030677209602%21sea&curPageLogUid=QHQVlzed0zzn";
        alibabalink.href = "https://www.alibaba.com/product-detail/2021-NEW-8gpu-Gpu-Graphic-Cards_1600541370640.html?spm=a2700.7724857.0.0.724772afWKptKB&s=p";
        morechange.href = "Gpu1060.html";
        p_change.innerHTML ="The GeForce GTX 1060 Was released Jul 19, 2016"
    }
}