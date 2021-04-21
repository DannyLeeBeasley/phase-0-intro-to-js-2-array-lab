const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const NewArrayOfCats = [...cats, name];
    return NewArrayOfCats
}

function prependCat(name){
    const NewArrayOfCats = [name, ...cats];
    return NewArrayOfCats
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}