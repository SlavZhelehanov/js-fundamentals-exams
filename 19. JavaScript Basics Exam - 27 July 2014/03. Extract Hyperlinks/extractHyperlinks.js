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