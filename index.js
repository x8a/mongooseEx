const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/albaDB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => console.log(`Connected to Mongo! Database name: ${x.connection.name}.`)) // OR x.connections[0].name
  .catch((err) => console.error(`Error when conencting to mongo: ${err}`));

// Building the model
const Cat = mongoose.model("Cat", { name: String, surname: String, age: Number }); // models are like classes --> model name = Cat, Schema = {name: String, etc.}

/*
To create cats in the DB:

const kitty = new Cat({ name: "Saber", age: 6 });
kitty.surname = "SaberHaggen Dazz";

kitty
  .save()
  .then((newCat) => console.log(`The following cat has been created: ${newCat}`))
  .catch((err) => console.log(`Error when creating a new cat: ${err}`));


// Find with callback f(x)
Cat.find({}, (err, cats) => {
    if(err) {
        console.log(`There was an error when getting the cats from the DB: ${err}`);
        return;
    }
    cats.forEach(cat => console.log(`Cat: ${cat.name}`))
});
*/

// Find with promise
Cat.find()
.then(cat => cat.forEach(one => console.log(`Cat: ${one.name}`)))
.catch((err) => console.error(`Error when conencting to mongo: ${err}`));