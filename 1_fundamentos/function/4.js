function fizz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0) {
            console.log("FIZZ")
        } else if (i % 5 == 0){
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }

}

fizz();