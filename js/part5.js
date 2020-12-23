// function sign_message_from(name) {
//     return (salutation, message) => write_message(message, salutation, name);
// }

// function write_message(message, salutation, name) {
//     return `${salutation} ${name} ${message}`;
// }

// let sign_message_from_ = sign_message_from('anony');
// console.log(sign_message_from_('hello', "let's begin"));

// function sign_message_with(salutation) {
//     return (message, name) => write_message(message, salutation, name);
// }

// function make_signature(salutation, name) {
//     return (message) => write_message(message, salutation, name);
// }
function pipeline(...functions) {
    if (length(functions) === 0) return (input) => input;
    if (length(functions) === 1) return (input) => head(functions)(input);
    return function (input) {
        return pipeline(...tail(functions))(head(functions)(input));
    };
}

function length(input) {
    return input.length;
}
function tail(input) {
    return input.slice(1);
}
function head(input) {
    return input[0];
}

function pluralize(singularWord) {
    return singularWord + 's';
}
function heart(word) {
    return 'I ❤️ ' + word;
}
function exclaim(sentence) {
    return sentence + '!';
}

function show_some_love() {
    return pipeline(pluralize, heart, exclaim);
}
let v = show_some_love();

console.log(v('pipeline'));
