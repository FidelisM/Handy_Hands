module.exports = function (HBS) {
    HBS.registerHelper('ifEqual', function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    HBS.registerHelper('ifCond', function (v1, operator, v2, options) {
        switch (operator) {
            case '==':
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
};
