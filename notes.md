// do you not db.collections.find('id')?
// is the key db.collections.find('something other than id')?

pages/api/example/[pid].js
const {pid} = req.query

db.collections.find({year: Number(`${pid}`)})

= = =

Step 1:

a. npx create-next-app --example with-mongodb <appname>

b. add environment variables for mongodb

c. npm run dev

d. git add . ; commit -m "Step 1"

e. Push this existing repo to GitHub:

git remote add origin https://github.com/ChaplainsBud/second-next-app.git
git branch -M main
git push -u origin main

Step 2:
