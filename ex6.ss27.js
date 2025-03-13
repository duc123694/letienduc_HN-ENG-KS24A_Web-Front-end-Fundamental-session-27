const arr = (array) => {
    if (!Array.isArray(array) || array.length < 2 || array.some(number => !Number.isInteger(number))) {
        return "Dữ liệu không hợp lệ";
    }

    const a = array[1] - array[0];

    for (let i = 2; i < array.length; i++) {
        if (array[i] - array[i - 1] !== a) {
            return false;
        }
    }
    return true;
}


const numbers1 = [2, 4, 6, 8, 10];
