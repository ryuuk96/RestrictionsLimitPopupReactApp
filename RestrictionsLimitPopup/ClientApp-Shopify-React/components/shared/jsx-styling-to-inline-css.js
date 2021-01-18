export function JsxStyleToInlineCss(jsxStyling) {
    var inlineStyle = "";
    for (var prop in jsxStyling) {
        if (prop.indexOf('HSB') > -1)
            continue;

        var propCssProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        inlineStyle += `${propCssProp}:${jsxStyling[prop]};`;
    }
    return `style="${inlineStyle}"`;
}