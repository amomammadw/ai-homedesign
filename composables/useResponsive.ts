import { breakpointsTailwind } from "@vueuse/core";

export const useResponsive = () => {
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const mobile = breakpoints.smallerOrEqual("md");
    const tablet = breakpoints.between("md", "xl");
    const desktop = breakpoints.greaterOrEqual("xl");

    const breakpoint = computed(() => {
        if (mobile.value) return "mobile";
        else if (tablet.value) return "tablet";
        else if (desktop.value) return "desktop";
    });

    return {
        breakpoint,
        mobile,
        tablet,
        desktop,
    };
};
