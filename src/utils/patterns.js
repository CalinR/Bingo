const patterns = [
    {
        label: 'No Pattern',
        pattern: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: 'One Line & 4 Corners',
        pattern: [true, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, true, false, true, false, true],
    },
    {
        label: `Diagonal Line (No N's)`,
        pattern: [true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true],
    },
    {
        label: 'T any Direction',
        pattern: [false, false, false, false, true, false, false, false, false, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, true],
    },
    {
        label: 'Letter X',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, true],
    },
    {
        label: '2 Lines Any Direction',
        pattern: [false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false],
    },
    {
        label: '1 Line Any Direction',
        pattern: [false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false],
    },
    {
        label: 'L Any Direction',
        pattern: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, true, true, true, true],
    },
    {
        label: 'Two Postage Stamps',
        pattern: [false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false],
    },
    {
        label: 'Letter N',
        pattern: [true, false, false, false, true, true, true, false, false, true, true, false, true, false, true, true, false, false, true, true, true, false, false, false, true],
    },
    {
        label: 'Number 7',
        pattern: [true, true, true, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, false],
    },
    {
        label: 'Blackout',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
];

export default patterns;
