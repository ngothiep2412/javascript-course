const fruit = "apple";
if (fruit === "apple") {
    console.log("You like to eat apple.")
} 
if (fruit === "lemon") {
    console.log("You like to eat lemon.")
}
if (fruit === "watermelon") {
    console.log("You like to eat watermelon.")
}
switch (fruit) {
    case "apple":
        console.log("You like to eat apple.");
        break;
    case "lemon":
        console.log("You like to eat lemon.");
        break;
    case "watermelon":
        console.log("You like to eat watermelon.");
        break;
    default:
        console.log("You like to eat orange");
        break;
}