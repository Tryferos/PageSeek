import localFont from "next/font/local"

const wotfardRegular = localFont({
    src: '../app/fonts/wotfard-regular.woff2',
    variable: '--font-wotfard-regular',
    weight: '400 600',
    display: 'swap',
    preload: true,
})

const wotfardMedium = localFont({
    src: '../app/fonts/wotfard-medium.woff2',
    variable: '--font-wotfard-medium',
    weight: '700 800',
    display: 'swap',
})

const wotfardSemibold = localFont({
    src: '../app/fonts/wotfard-semibold.woff2',
    variable: '--font-wotfard-semibold',
    weight: '800 900',
    display: 'swap',
})


export const FontFamilies = Object.freeze({
    wotfard: [wotfardRegular.variable, wotfardMedium.variable, wotfardSemibold.variable].join(' '),
})
