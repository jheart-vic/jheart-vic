"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = require("color-convert");
const display_helper_1 = require("./display_helper");
/**
 * Displays the LAB value of a color.
 */
exports.default = new class LabDisplay {
    constructor() {
        this.name = 'lab';
    }
    display(match) {
        const { h, s, l } = match.color.toHsl();
        const lab = color_convert_1.hsl.lab.raw([h, s * 100, l * 100]);
        return display_helper_1.func('lab', display_helper_1.number(lab[0].toFixed(2), 5), display_helper_1.number(lab[1].toFixed(2), 5), display_helper_1.number(lab[2].toFixed(2), 5));
    }
}();
//# sourceMappingURL=lab_display.js.map