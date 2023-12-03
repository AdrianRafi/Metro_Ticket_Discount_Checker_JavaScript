// Ticket Discount Check

// Female Get 50% Off
// Under 5 Year Kids Get 100% Off
// Under 5 Year Kids Get 50% Off
// Under 5 Year Female Kids Get Free Ticket
// Under 8 Year Female Kids Get Free Ticket
// Over 65 Year Old & Female Get Free Ticket
// Over 65 Year Old & Not Female Get 70% Off

let age = 7;
let gender = 'female';

if (gender == 'female' && age <= 5) {
    a = 'Under 5 Year Female Kids';
    youGet = `${a} Get Free Ticket`
} else if (gender == 'female' && age <= 8) {
    a = 'Under 8 Year Female Kids';
    youGet = `${a} Get 100% Off`
} else if (age >= 65 && gender == 'female') {
    youGet = `You Get Free Ticket`
} else if (age >= 65) {
    youGet = `You Pay 30%`
} else if (gender == 'female') {
    a = 'Female';
    youGet = `${a} Get 50% Off`
} else if (age <= 5) {
    a = 'Under 5 Year Kids';
    youGet = `${a} Get 100% Off`
} else if (age <= 8) {
    a = 'Under 8 Year Kids';
    youGet = `${a} Get 50% Off`
} else {
    youGet = `You Pay 100%`
}

console.log(youGet)
document.querySelector('.discountDisplay').innerText = `${youGet}`