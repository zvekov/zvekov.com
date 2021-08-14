const {iconsPlugin, getIconCollections} = require("@egoist/tailwindcss-icons");
import type {Config} from "tailwindcss";

export default <Partial<Config>>{
    content: ["./**/*.{vue,js,ts,jsx,tsx}"],
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["heroicons", "grommet-icons"]),
        }),
    ],
    theme: {
        fontFamily: {
            sans: [
                '"Source Sans 3", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif',
            ],
        },
    }
}