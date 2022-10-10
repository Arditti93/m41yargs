//TODO: import your Movie class from the utils folder
const yargs = require("yargs")
const Movie = require("./utils");

// console.log(yargs.argv.actor)
// if (yargs.argv.actor) {
//     console.log("its " + yargs.argv.actor)
// } else {
//     console.log('Actor not passed')
// } 

const app = (yargsObject) => {
    try {
        if (yargsObject.add){
            // console.log(yargsObject.title)
            // console.log(yargsObject.actor)
            // TODO const movie = new Movie etc ..
            const movie = new Movie(yargsObject.title, yargsObject.actor);
            movie.add();
            console.log(movie.list());
        //Conditions if your app has other operations
        } else if (yargsObject.addMulti) {
            const movie1 = new Movie(yargsObject.title, yargsObject.actor);
            const movie2 = new Movie(yargsObject.title2, yargsObject.actor2);
            const movie3 = new Movie(yargsObject.title3, yargsObject.actor3);
            movie1.add();
            movie2.add();
            console.log(movie1.list());
            
        } else {
            console.log("incorrect command")
        }
    } catch (error){
        console.log(error)
    }
}

app(yargs.argv)