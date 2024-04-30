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
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero",
    "!": "Bang",
    "*": "Splat",
    "@": "At",
    "#": "Hash",
    "$": "Dollar",
    "%": "Percent",
    "^": "Hat",
    "&": "Ampersand",
    ",": "Comma",
    "/": "Wack",
};

$("#submit").on("click", function () {
    addToList();
});

$("#user-input").on("input", function () {
    printResult();
    convertToNato();
});

$("#reset").on("click", function () {
    $("#output").fadeOut(1000);
    clearTextBox();
    clearList();
});

$("#clear").on("click", function () {
    clearTextBox();
});

$(document).on("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addToList();
    }
});

/**
 * Converts user input to NATO phonetic alphabet codes.
 * @function convertToNato
 * @param {string} input - User input.
 * @returns {string} - NATO phonetic alphabet codes.
 */
function convertToNato(input) {
    if (typeof input !== "string" || input === null) {
        return "";
    }
    let inputArray = input.toLowerCase().split("");
    let natoCodes = inputArray.map((letter) => {
        return nato[letter] || letter;
    });
    return natoCodes.join(" ");
}

/**
 * Prints the result of converting input to NATO phonetic alphabet codes.
 * @function printResult
 */
function printResult() {
    let input = $("#user-input").val();
    let natoResult = convertToNato(input);
    $("#output")
        .text("Result: " + natoResult)
        .fadeIn(1000);
}

/**
 * Adds the current input text to a list of previous entries.
 * @function addToList
 */
function addToList() {
    let inputText = $("#user-input").val();
    if (inputText === "") return;
    let natoText = convertToNato(inputText);
    let listItem = $("<li>")
        .addClass("list-group-item")
        .text(`${inputText} in NATO: ${natoText}`);
    if (convertToNato(inputText) > 100) {
        listItem.addClass("text-truncate");
    }
    $("#previous-entries").append(listItem);
    clearTextBox();
    clearResult();
}

/**
 * Clears the value of the user input box.
 * @function clearBox
 */
function clearTextBox() {
    $("#user-input").val("");
}

/**
 * Clears the list of previous entries.
 * @function clearList
 */
function clearList() {
    $("#previous-entries").fadeOut(1000, function () {
        $(this).empty().fadeIn(1000);
    });
}

/**
 * Clears the result by fading out the output element and setting its text to an empty string.
 */
function clearResult() {
    $("#output").fadeOut(1000, () => {
        $("#output").text("");
    });
}

$("#hamburger").on("click", function () {
    $("#mobile-menu").toggle();
});
