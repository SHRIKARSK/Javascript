const arrow = () => {
    console.log(`Shrikar is getting better at Javascript`)
}

() => {
    console.log("Another type of declaring arrow function");
}

function one() {
    let count = 0;

    return function two() {
        count++;
        console.log(count);
    }
   
}

const closeure = one()
closeure()
closeure()

