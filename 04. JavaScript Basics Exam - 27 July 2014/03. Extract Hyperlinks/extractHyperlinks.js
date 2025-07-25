function extractHyperlinks(inputLines) {
    const text = inputLines.join('\n');
    const hrefs = [];
    const regex = /<a[^>]*?\s+href\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi;

    let match;

    while ((match = regex.exec(text)) !== null) {
        const href = match[1] || match[2] || match[3];

        hrefs.push(href);
    }

    hrefs.forEach(href => console.log(href));
}

extractHyperlinks([`<a href="http://softuni.bg" class="new"></a>`]);
console.log("-------------------------------------------------------------------");
extractHyperlinks([`<p>This text has no links</p>`]);
console.log("-------------------------------------------------------------------");
extractHyperlinks([
    `<!DOCTYPE html>`,
`<html>`,
`<head>`,
`<title>Hyperlinks</title>`,
`<link href="theme.css" rel="stylesheet" />`,
`</head>`,
`<body>`,
`<ul><li><a   href="/"  id="home">Home</a></li><li><a`,
    `class="selected" href=/courses>Courses</a>`,
`</li><li><a href =`,
                `'/forum' >Forum</a></li><li><a class="href"`,
                                               `onclick="go()" href= "#">Forum</a></li>`,
    `<li><a id="js" href =`,
        `"javascript:alert('hi yo')" class="new">click</a></li>`,
    `<li><a id='nakov' href =`,
        `http://www.nakov.com class='new'>nak</a></li></ul>`,
    `<a href="#empty"></a>`,
    `<a id="href">href='fake'<img src='http://abv.bg/i.gif'`,
                                 `alt='abv'/></a><a href="#">&lt;a href='hello'&gt;</a>`,
`<!-- This code is commented:`,
  `<a href="#commented">commentex hyperlink</a> -->`,
`</body>`
])