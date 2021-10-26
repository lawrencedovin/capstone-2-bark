const capitalize = (str) => {
    let [first, ...rest] = str;
    let capitalized = (first.toUpperCase() + rest).split(',');
    capitalized = capitalized.join('');
    return capitalized;
}

export default capitalize;