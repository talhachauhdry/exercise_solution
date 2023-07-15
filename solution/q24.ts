console.log("'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple');
console.log("'apple' == 'banana'? I predict False.");
console.log('apple' == 'banana');

console.log("'apple' === 'apple'? I predict True.");
console.log('apple' === 'apple');
console.log("'apple' === 'banana'? I predict False.");
console.log('apple' === 'banana');

console.log("'apple'.toLowerCase() == 'APPLE'? I predict True.");
console.log('apple'.toLowerCase() == 'APPLE');
console.log("'apple'.toLowerCase() == 'BANANA'? I predict False.");
console.log('apple'.toLowerCase() == 'BANANA');

console.log("5 == 5? I predict True.");
console.log(5 == 5);
console.log("5 != 3? I predict True.");
console.log(5 != 3);
console.log("5 > 3? I predict True.");
console.log(5 > 3);
console.log("5 < 3? I predict False.");
console.log(5 < 3);
console.log("5 >= 5? I predict True.");
console.log(5 >= 5);
console.log("5 <= 3? I predict False.");
console.log(5 <= 3);

console.log("(5 > 3) && (10 < 5)? I predict False.");
console.log((5 > 3) && (10 < 5));
console.log("(5 > 3) || (10 < 5)? I predict True.");
console.log((5 > 3) || (10 < 5));

console.log("'apple' in ['apple', 'banana', 'cherry']? I predict True.");
console.log(['apple', 'banana', 'cherry'].includes('apple'));
console.log("'grape' in ['apple', 'banana', 'cherry']? I predict False.");
console.log(['apple', 'banana', 'cherry'].includes('grape'));

console.log("'grape' not in ['apple', 'banana', 'cherry']? I predict True.");
console.log(!['apple', 'banana', 'cherry'].includes('grape'));
console.log("'apple' not in ['apple', 'banana', 'cherry']? I predict False.");
console.log(!['apple', 'banana', 'cherry'].includes('apple'));
