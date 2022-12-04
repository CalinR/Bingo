const columnRanges = {
    'B': [1, 15],
    'I': [16, 30],
    'N': [31, 45],
    'G': [46, 60],
    'O': [61, 75],
};

export default function generateRandomCard() {
    const numbers = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': [],
    };

    Object.keys(numbers).forEach((key) => {
        const min = columnRanges[key][0];
        const max = columnRanges[key][1];

        while(numbers[key].length < 5) {
            let r = Math.floor(Math.random() * (max - min + 1) + min);

            // Show free space in middle if the column is N
            if (numbers[key].length === 2 && key === 'N') {
                r = 0;
            }

            if(numbers[key].indexOf(r) === -1) numbers[key].push(r);
        }
    });

    return numbers;
}
