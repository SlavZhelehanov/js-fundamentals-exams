function softUniForum(input) {
    const bannedUsers = input.pop().split(' '), result = [], usernamePattern = /#([A-Za-z][\w-]*[A-Za-z0-9])\b/g;
    let insideCode = false;

    for (let line of input) {
        if (line.includes('<code>') && line.includes('</code>')) {
            result.push(line);
            continue;
        }

        if (line.includes('<code>')) {
            insideCode = true;
            result.push(line);
            continue;
        }

        if (line.includes('</code>')) {
            insideCode = false;
            result.push(line);
            continue;
        }

        if (insideCode) {
            result.push(line);
            continue;
        }

        const processed = line.replace(usernamePattern, (match, username) => {
            if (username.length < 3) return match;
            if (bannedUsers.includes(username)) return '*'.repeat(username.length);
            return `<a href="/users/profile/show/${username}">${username}</a>`;
        });

        result.push(processed);
    }

    console.log(result.join('\n'));
}

// softUniForum(["#RoYaL: I'm not sure what you mean,",
// "but I am confident that I've written",
// "everything correctly. Ask #iordan_93",
// "and #pesho if you don't believe me",
// "<code>",
// "#trying to print stuff",
// "print(\"yoo\")",
// "</code>",
// "pesho gosho"]);
softUniForum(["<code>",
"#lele",
"#pochna se </code>",
"<code> #mani_begai #gosho <code>",
"gosho"]);