import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElem = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoint();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const me = this;
    new Waypoint({
      element: this.triggerElem[0],
      handler: function(direction) {
        if (direction === "down") {
          me.siteHeader.addClass("site-header--dark");
          return;
        }
        me.siteHeader.removeClass("site-header--dark");
      }
    });
  }

  createPageSectionWaypoint() {
    const me = this;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "down") {
            const matchHeaderLink = currentPageSection.getAttribute(
              "data-match-link"
            );
            me.headerLinks.removeClass("is-current-link");
            $(matchHeaderLink).addClass("is-current-link");
          }
        },
        offset: "20%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "up") {
            const matchHeaderLink = currentPageSection.getAttribute(
              "data-match-link"
            );
            me.headerLinks.removeClass("is-current-link");
            $(matchHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
