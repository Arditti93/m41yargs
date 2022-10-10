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
            // console.log("in add")
            // console.log(yargsObject.title)
            // console.log(yargsObject.actor)
            const movie = new Movie
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