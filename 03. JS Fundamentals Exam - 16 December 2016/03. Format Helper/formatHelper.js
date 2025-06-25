function formatHelper([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}

formatHelper([`erribly formatted text . With chaotic spacings." Terrible quoting "! Also
this date is pretty confusing : 20 . 12. 16 .`]);
console.log("---------------------------------------------------------------------------------------------------");
formatHelper([`Make,sure to give:proper spacing where is needed... !`]);