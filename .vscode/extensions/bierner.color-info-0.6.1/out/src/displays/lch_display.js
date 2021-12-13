"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = require("color-convert");
const display_helper_1 = require("./display_helper");
/**
 * Displays the LCHab value of a color.
 */
exports.default = new class LchDisplay {
    constructor() {
        this.name = 'lch';
    }
    display(match) {
        const { h, s, l } = match.color.toHsl();
        const lch = color_convert_1.hsl.lch.raw([h, s * 100, l * 100]);
        return display_helper_1.func('lch', display_helper_1.number(lch[0].toFixed(2), 5), display_helper_1.number(lch[1].toFixed(2), 5), display_helper_1.deg(lch[2], 5));
    }
}();
//# sourceMappingURL=lch_display.js.map