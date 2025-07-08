function angularParser(input) {
    const modules = {}, pending = {};

    function parseLine(line) {
        const appMatch = line.match(/^\$app='([^']+)'$/);

        if (appMatch) {
            const appName = appMatch[1];

            if (!modules[appName]) modules[appName] = { controllers: [], models: [], views: [] };
            if (pending[appName]) {
                for (const item of pending[appName]) modules[appName][item.type].push(item.name);
                delete pending[appName];
            }
            return;
        }

        const elementMatch = line.match(/^\$(controller|model|view)='([^']+)'&app='([^']+)'$/);

        if (elementMatch) {
            const [, type, name, appName] = elementMatch;
            const pluralType = type + "s";

            if (modules[appName]) {
                modules[appName][pluralType].push(name);
            } else {
                if (!pending[appName]) pending[appName] = [];
                pending[appName].push({ type: pluralType, name });
            }
        }
    };

    for (const line of input) parseLine(line);

    const sortedModules = Object.entries(modules)
        .sort((a, b) => {
            const aControllers = a[1].controllers.length;
            const bControllers = b[1].controllers.length;

            if (aControllers !== bControllers) return bControllers - aControllers;

            const aModels = a[1].models.length;
            const bModels = b[1].models.length;
            return aModels - bModels; // ascending
        });

    const result = {};

    for (const [app, data] of sortedModules) {
        result[app] = {
            controllers: data.controllers.sort(),
            models: data.models.sort(),
            views: data.views.sort()
        };
    }

    console.log(JSON.stringify(result));
}