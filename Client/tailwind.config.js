/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-blue" : "#3a307f",
        "global-black": "#403b45",
        "global-grey1": " #77757a",
        "global-grey2": "#bbb8bd",
        "global-grey3": "#e4e4e4",
        "global-grey4": "#f8f8f8",
        "global-white": "#fff",
        "global-black-op-5": "rgba(64, 59, 69, .05)",
        "global-black-op-10": "rgba(64, 59, 69, .1)",
        "global-black-op-15": "rgba(64, 59, 69, .15)",
        "global-black-op-20": "rgba(64, 59, 69, .2)",
        "global-black-op-35": "rgba(64, 59, 69, .35)",
        "global-black-op-60": "rgba(64, 59, 69, .6)",
        "global-black-op-70": "rgba(64, 59, 69, .7)",
        "global-black-op-80": "rgba(64, 59, 69, .8)",
        "global-white-op-70": "hsla(0, 0%, 100%, .7)",
        "global-stone-dark": "#d6c7c7",
        "global-stone-100": "#e2d8d7",
        "global-stone-75": "#e8e1e0",
        "global-stone-50": "#efebea",
        "global-stone-25": "#f7f5f5",
        "primary-clay-dark": "#d55a4d",
        "primary-clay-100": "#ef5e4e",
        "primary-clay-75": "#e38b7e",
        "primary-clay-50": "#ecb1a8",
        "primary-clay-25": "#f5d8d4",
        // "brand-sand-dark": "#e99b76",
        "brand-sand-dark": "#ed7d47",
        "brand-sand-100": "#f1a786",
        "brand-sand-75": "#f5bca4",
        "brand-sand-50": "#f8d2c2",
        "brand-sand-25": "#fbe9e0",
        "brand-sea-dark": "#4f3290",
        "brand-sea-100": "#5745a0",
        "brand-sea-75": "#7e74b2",
        "brand-sea-50": "#a8a2cc",
        "brand-sea-25": "#d4d1e5",
        "brand-sky-dark": "#a0bec9",
        "brand-sky-100": "#9bd3dd",
        "brand-sky-75": "#bcdce5",
        "brand-sky-50": "#d2e7ed",
        "brand-sky-25": "#e8f4f6",
        "feedback-success-base": "#39a76d",
        "feedback-success-light": "#67cd6a",
        "feedback-success-lighter": "#bad461",
        "feedback-warning-base": "#f3bf4f",
        "feedback-warning-light": "#ffdb8c",
        "feedback-warning-lighter": "#ffebbf",
        "feedback-error-base": "#ed4c6b",
        "feedback-error-dark": "#b82d48",
        "feedback-error-light": "#ff8098",
        "feedback-error-lighter": "#ffe6ea",
        "interaction-1-light-mode": "#007ea8",
        "interaction-1-dark-mode": "#3b97ba",
        "facebook": "#4267b2",
        "facebook-hover": "#324b80",
        "google": "#4285f4",
        "google-hover": "#3367d6",
        "whatsapp": "#4dbd43",
        "twitter": "#1da1f3",
      },
    },
  },
  plugins: [],
};
