import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(elem, pct) {
    this.itemsToReveal = $(elem);
    this.hideInitially();
    this.scrollPct = pct;
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    const me = this;
    this.itemsToReveal.each(function() {
      const currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: me.scrollPct
      });
    });
  }
}

export default RevealOnScroll;
