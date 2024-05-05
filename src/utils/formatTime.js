const formatTime = (s) => {

    const addZeroes = (num) => {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    };
    
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;

    return addZeroes(minutes) + ":" + addZeroes(seconds);
}
export default formatTime;