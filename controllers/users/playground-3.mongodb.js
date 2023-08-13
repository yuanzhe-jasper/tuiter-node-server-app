// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("tuiter-su2-23");

db.users.drop();

db.users.insertMany([
  { _id: 1, username: "alice", password: 123 },
  { _id: 2, username: "bob", password: 123 },
  { _id: 3, username: "charlie", password: 123 },
]);

db.users.update();

// Create a new document in the collection.
db.getCollection("users").insertOne({});
