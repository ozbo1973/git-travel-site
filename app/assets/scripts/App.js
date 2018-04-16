import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

const mobileMenu = new MobileMenu();
const featureScroll = new RevealOnScroll(".feature-item", "85%");
const testimonialScroll = new RevealOnScroll(".testimonials", "65%");
const stickyHeader = new StickyHeader();
