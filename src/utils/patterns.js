const patterns = [
    {
        label: '1. 6 Pack',
        pattern: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: '2. Block of 9',
        pattern: [ false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false],
    },
    {
        label: '3. 1 Line & 4 Corners',
        pattern: [true, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, true, false, true, false, true],
    },
    {
        label: 'SPECIAL: Lucky Star',
        pattern: [false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false],
    },
    {
        label: '4. V any Direction',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: '5. Letter X',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, true],
    },
    {
        label: 'SPECIAL: Odd/Even',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
        label: '6. Small Kite Any Direction',
        pattern: [true, true, false, false, false, true, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true],
    },
    {
        label: "7. Niverville N",
        pattern: [ true, false, false, false, true, true, true, false, false, true, true, false, true, false, true, true, false, false, true, true, true, false, false, false, true],
    },
    {
        label: '8. 1 Outside Line',
        pattern: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false],
    },
    {
        label: 'SPECIAL: Bonanza Full Card',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
        label: '9. One Postage Stamp',
        pattern: [ false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: '10. Two Postage Stamps',
        pattern: [true, true, false, true, true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: '11. Letter T',
        pattern: [false, false, false, false, true, false, false, false, false, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, true],
    },
    {
        label: '12. Love Letter With Stamp',
        pattern: [true, false, false, true, true, true, false, false, true, true, true, false, false, false, false, true, false, false, false, false, true, true, true, true, true],
    },
    {
        label: '13. Wee House',
        pattern: [false, false, false, false, false, false, true, true, true, false, false, true, false, true, false, false, true, true, true, false, false, false, false, false, false],
    },
    {
        label: '14. Empty House',
        pattern: [true, true, true, true, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, true, true, true, true],
    },
    {
        label: '15. Blackout',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
        label: 'SPECIAL: Lucky 7',
        pattern: [true, true, true, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, false],
    },
];

export default patterns;
