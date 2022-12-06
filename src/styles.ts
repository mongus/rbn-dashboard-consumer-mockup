const accent = '#094792';
const lightBlue = '#1e7fe8';
const green = '#39a128';
const lightGreen = '#72c47c';
const amexBlue = '#006fcf';
const orange = '#d87023';
const sectionPadding = '60px';

const width = 1170;

const styles = {
    width: `${width}px`,
    widthInt: width,
    halfWidth: `${width/2}px`,
    sectionPadding,

    accent,
    lightBlue,
    green,
    lightGreen,
    amexBlue,
    orange,

    header: {
        color: '#fff',
        background: accent,
    },

    cta: {
        color: '#fff',
        background: '#7fccf7'
    },

    page: {
        background: '#e9ebee'
    },

    input: {
        color: '#000',
        background: '#f4f4f4',
        border: '1px solid #c6c6c6',
        height: '44px',
    },

    button: {
        color: '#fff',
        background: accent,
        border: `3px solid transparent`,

        subtle: {
            color: accent,
            background: '#fff',
            border: `3px solid ${accent}`
        },

        transparent: {
            color: accent,
            background: 'transparent',
            border: `3px solid ${accent}`
        },

        white: {
            color: accent,
            background: '#fff',
            border: '3px solid #026'
        },

        green: {
            color: '#fff',
            background: green,
            border: `3px solid transparent`,
        },

        'light-blue': {
            color: '#fff',
            background: `${lightBlue}`,
            border: `3px solid transparent`,
        },

        orange: {
            color: '#fff',
            background: orange,
            border: `3px solid transparent`,
        },

        'dark-grey': {
            color: '#fff',
            background: `#333`,
            border: `3px solid transparent`,
        },
    },
};

export default styles;