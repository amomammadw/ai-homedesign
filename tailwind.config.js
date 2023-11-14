/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        container: {
            center: true,
            padding: "8px",
        },
        fontSize: {
            "display-xl": [
                "64px",
                {
                    lineHeight: "75px",
                    letterSpacing: "-0.02em",
                },
            ],
            "display-lg": [
                "48px",
                {
                    lineHeight: "56px",
                    letterSpacing: "-0.02em",
                },
            ],
            "display-md": [
                "40px",
                {
                    lineHeight: "46px",
                    letterSpacing: "-0.01em",
                },
            ],
            "title-xl": [
                "36px",
                {
                    lineHeight: "42px",
                    letterSpacing: "-0.01em",
                },
            ],
            "title-lg": [
                "32px",
                {
                    lineHeight: "37px",
                    letterSpacing: "-0.01em",
                },
            ],
            "title-md": [
                "24px",
                {
                    lineHeight: "28px",
                    letterSpacing: "-0.01em",
                },
            ],
            "title-sm": [
                "20px",
                {
                    lineHeight: "23px",
                    letterSpacing: "0px",
                },
            ],
            "body-lg": [
                "16px",
                {
                    lineHeight: "20px",
                    letterSpacing: "0.02em",
                },
            ],
            "body-md": [
                "14px",
                {
                    lineHeight: "19px",
                    letterSpacing: "0.02em",
                },
            ],
            "body-sm": [
                "12px",
                {
                    lineHeight: "17px",
                    letterSpacing: "0.03em",
                },
            ],
        },
        colors: {
            transparent: "transparent",
            white: "#ffffff",
            black: "#000000",

            // * brand
            brand: {
                100: "#EBEBFF",
                200: "#CECEEE",
                300: "#A3A3DE",
                400: "#7878CD",
                500: "#4D4DBD",
                600: "#1B1B8A",
                700: "#1B1B8A",
                800: "#141468",
                900: "#0E0E45",
            },
            // * value
            value: {
                100: "#EBEBFF",
                200: "#D6D6FF",
                300: "#C2C2FF",
                400: "#ADADFF",
                500: "#9999FF",
                600: "#7A7AE2",
                700: "#5C5CC6",
                800: "#3D3DA9",
                900: "#1F1F8D",
            },
            // * aqua
            aqua: {
                100: "#DCFAFA",
                200: "#C4F5F5",
                300: "#93EBEB",
                400: "#62E0E0",
                500: "#00CCCC",
                600: "#00A3A3",
                700: "#007A7A",
                800: "#005252",
                900: "#003D3D",
            },
            // * gray
            gray: {
                900: "#222225",
                850: "#333336",
                800: "#43434A",
                700: "#656570",
                600: "#868695",
                500: "#A8A8BA",
                400: "#CBCBD6",
                300: "#DCDCE3",
                200: "#EEEEF1",
                100: "#FFFFFF",
            },
            // * yellow
            yellow: {
                900: "#664A00",
                800: "#996E00",
                400: "#FFB800",
                200: "#FFE299",
                100: "#FFF1CC",
            },
            // * green
            green: {
                900: "#113A36",
                800: "#195751",
                400: "#2A9187",
                200: "#9DCFCA",
                100: "#EAF9F7",
            },
            // * red
            red: {
                900: "#560519",
                800: "#810825",
                400: "#D70D3E",
                200: "#EF9EB2",
                100: "#FBE7EC",
            },
            // * blue
            blue: {
                900: "#003B66",
                800: "#005999",
                400: "#0094FF",
                200: "#99D4FF",
                100: "#E5F4FF",
            },
        },
    },
    plugins: [],
};
