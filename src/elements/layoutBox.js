/**
 * LayoutBox represents a layout ruled by four measures, this can
 * comprehend margins, visualizations objects, Viewbox, etc.
 */
class LayoutBox {
    /**
     * Simple constructor for LayoutBox.
     * @param {any=} measurements Dictates the four measures of the box,
     * being as a string or as an Array.
     */
    constructor(measurements) {
        if (typeof (measurements) === 'string') {
            this._values = measurements.split(" ");
            this._string = measurements;
        } else if (Array.isArray(measurements)) {
            this._values = measurements;
            this._string = measurements.join(" ");
        }
    }

    /**
     * Returns the LayoutBox measures as a string.
     */
    toString() {
        return this._string;
    }

    /**
     * Get minimum x value of box.
     */
    get minX() {
        return this._values[0];
    }

    /**
     * Set minimum x value of box.
     * @param {string=} val the minimum x value of box.
     */
    set minX(val) {
        this._values[0] = val;
    }

    /**
     * Get top measure of box.
     */
    get top() {
        return this._values[0];
    }

    /**
     * Set top measure of box.
     * @param {string=} val the top measure of box.
     */
    set top(val) {
        this._values[0] = val;
    }

    /**
     * Get minimum y value of box.
     */
    get minY() {
        return this._values[1];
    }

    /**
     * Set minimum y value of box.
     * @param {string=} val the minimum y value of box.
     */
    set minY(val) {
        this._values[1] = val;
    }

    /**
     * Get right measure of box.
     */
    get right() {
        return this._values[1];
    }

    /**
     * Set right measure of box.
     * @param {string=} val the right measure of box.
     */
    set right(val) {
        this._values[1] = val;
    }

    /**
     * Get width of box.
     */
    get width() {
        return this._values[2];
    }

    /**
     * Set width of box.
     * @param {string=} val the width of box.
     */
    set width(val) {
        this._values[2] = val;
    }

    /**
     * Get bottom measure of box.
     */
    get bottom() {
        return this._values[2];
    }

    /**
     * Set bottom measure of box.
     * @param {string=} val the bottom measure of box.
     */
    set bottom(val) {
        this._values[2] = val;
    }

    /**
     * Get height of box.
     */
    get height() {
        return this._values[3];
    }

    /**
     * Set height of box.
     * @param {string=} val the height of box.
     */
    set height(val) {
        this._values[3] = val;
    }

    /**
     * Get left measure of box.
     */
    get left() {
        return this._values[3];
    }

    /**
     * Set left measure of box.
     * @param {string=} val the left measure of box.
     */
    set left(val) {
        this._values[3] = val;
    }
}

exports.LayoutBox = LayoutBox;