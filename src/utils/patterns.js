const patterns = [
    {
        label: '1. 1 Line Any Direction',
        pattern: [false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false],
    },
    {
        label: '2. 1 Line & 4 Corners',
        pattern: [true, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, true, false, true, false, true],
    },
    {
        label: '3. V any Direction',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    // {
    //     label: `3. Diagonal Line`,
    //     pattern: [true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true],
    // },
    {
        label: '4. Letter X',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, true],
    },
    {
        label: 'Special: Lucky Star',
        pattern: [false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false],
    },
    {
        label: '5. Small Kite Any Direction',
        pattern: [true, true, false, false, false, true, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true],
    },
    {
        label: '6. 2 Lines Any Direction',
        pattern: [true, false, false, false, false, true, true, false, false, false, true, false, true, false, false, true, false, false, true, false, true, false, false, false, true],
    },
    {
        label: 'Special: Odd/Even',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
        label: '7. 1 Outside Line',
        pattern: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false],
    },
    {
        label: '8. Two Postage Stamps',
        pattern: [false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false],
    },
    {
        label: '9. 1 Line No Free Space',
        pattern: [false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false],
    },
    {
        label: 'Special: Bonanza',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
        label: '10. 6 Pack',
        pattern: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: '11. Wee House',
        pattern: [false, false, false, false, false, false, true, true, true, false, false, true, false, true, false, false, true, true, true, false, false, false, false, false, false],
    },
    
    // {
    //     label: '10. Letter N',
    //     pattern: [true, false, false, false, true, true, true, false, false, true, true, false, true, false, true, true, false, false, true, true, true, false, false, false, true],
    // },
    // {
    //     label: '11. Number 7',
    //     pattern: [true, true, true, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, false],
    // },
    {
        label: '12. Empty House',
        pattern: [true, true, true, true, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, true, true, true, true],
    },
    {
        label: '13. Blackout',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },

    /*
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
    */
];

export default patterns;
