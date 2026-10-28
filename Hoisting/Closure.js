function startBrowser() {
    let browserName = "Firefox";

    function innerFunction() {
        browserName = "Chrome";
        console.log(browserName);
    }
    return innerFunction;
}

const runTc = startBrowser(); // Output: Firefox
runTc(); // Output: Chrome