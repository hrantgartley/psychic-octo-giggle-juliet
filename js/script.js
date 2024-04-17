let nato = {
    a: "Alpha",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliet",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "Xray",
    y: "Yankee",
    z: "Zulu",
};

$("#submit").on("click", () => {
    convertToNato();
    clearBox();
});

/**
 * Converts user input to NATO phonetic alphabet codes.
 * @function convertToNato
 * @params {string} input - User input.
 * @returns {string} - NATO phonetic alphabet codes.
 */
function convertToNato() {
    let input = $("#user-input").val().toLowerCase();
    let inputArray = input.split("");
    let natoCodes = inputArray.map((letter) => {
        return nato[letter];
    });
    $("#output").text(natoCodes.join(" "));
}

/**
 * Clears the value of the user input box.
 * @function clearBox
 * @params {null}
 * @returns {null}
 */
function clearBox() {
    $("#user-input").val("");
}
