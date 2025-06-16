let name = prompt('Enter your name:');
function ask_user_name (){
if (name) {
markUp = `<h1>hello ${name}</h1>`;
document.write(markUp);
}
else {
markUp = `<h1>hello stranger</h1>`;
}
}
ask_user_name();