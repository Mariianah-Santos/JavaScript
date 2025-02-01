function primo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % 1 === 0) {
            return false;
        }
    }

    return true;
}

console.log(primo(1));