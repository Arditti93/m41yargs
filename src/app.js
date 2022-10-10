//TODO: import your Movie class from the utils folder
const yargs = require("yargs")

// console.log(yargs.argv.actor)
// if (yargs.argv.actor) {
//     console.log("its " + yargs.argv.actor)
// } else {
//     console.log('Actor not passed')
// } 

const app = (yargsObject) => {
    try {
        //
        if (yargsObject.add){
            console.log(yargsObject.title)
            console.log(yargsObject.actor)
            // TODO const movie = new Movie etc ..

        //Conditions if your app has other operations
        } else if (yargsObject.delete) {
            ///
        }
        else {
            console.log("incorrect command")
        }
    } catch (error){
        console.log(error)

    }

}

app(yargs.argv)