
// import { connectToDatabase } from "../../util/mongodb";
import { connectToDatabase } from "../../../util/mongodb";


export default async (req, res) => {
  const { pid } = req.query

  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    // .find({})
    // .find({title: "The Wizard of Oz"})
    .find({year: Number(`${pid}`)})

    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
     res.json(movies)
};

// "573a1390f29313caabcd42e8"

// export default function handler(req, res) {
//     const { pid } = req.query
//     res.end(`Post: ${pid}`)
//   }

