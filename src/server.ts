import express, { response } from 'express';
import cors from 'cors';
import expressJwt from 'express-jwt';
import { getProducts, getProductsbysort, updateProduct, getProductsByName } from './queries';
const PORT = 3000;


const app = express();


app.use(cors());
app.use(express.json());

// comment out this line if you want to bypass JWT check during developmentno
// app.use(expressJwt({ secret: JWT_SECRET }).unless({ path: '/' }));

app.get('/products', async (req, res) => {

    const products = await getProducts();
    if (!products) {
        res.send({ response: false, products: [], msg: 'there is no products' })
    }
    res.send({ response: true, products: products, msg: 'pls check all the products' });
})


app.put('/products/:id/units', async (req, res) => {
    const { qty } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const idNum = Number(id);
    const qtyNum = Number(qty);
    if (isNaN(qty)) {
        return res.send(400).send('id must be a number!');
    }
    const isSuccess = await updateProduct(idNum, qtyNum);
    if (isSuccess) {
        const products = await getProducts();

        res.send({ response: true, products: products, msg: 'the product were updated' });
    } else {
        res.status(404).send("todo doesn't exist");
    }
});


app.get('/products_by_count', async (req, res) => {

    const products = await getProductsbysort();
    if (!products) {
        res.send({ response: false, products: [], msg: 'there is no products' })
    }
    res.send({ response: true, products: products, msg: 'pls check all the products' });
})

app.get('/:name', async (req, res) => {
    const { name }: any = req.params;
    console.log({ name: name })
    const products = await getProductsByName(name);

    if (!products.length) {
        res.send({ response: false, product: [], msg: 'there is no such product' })
    }


    res.send({ response: true, product: products, msg: 'search result' })
})




// app.post('/products', async (req, res) => {
//     const { product_id } = req.params;
//     const { user_id, qty, date, product_name } = req.body;
//     // console.log({ product: product })
//     try {
//         const product = await Product.findById((product_id));
// //         if (product) {
//             console.log("here")
//             const picked_product = new SelectedProduct({
//                 id_product: product_id,
//                 id_bag: user?._id,
//                 qty: qty,
//                 total_price: product.price * qty,
//             })

//             await Bag.updateOne({ id_customer: user_id }, { $push: { products: picked_product } })
//             res.send({ response: true, msg: `product added` })
//         }
//         res.send({ response: false, msg: `${product_name} is out off stock` })

//     }
//     catch (err) {
//         console.log(err);
//         res.send({ response: false, msg: `user is undifined` })
//     }
// })





















// ====================================
// app.get('/products/:id/units', async (req, res) => {
//     const { category } = req.params;
//     const gamesByCategory = await getGamesByCategory(category);
//     const commentsByCtegory = await getCommentsByCategory(category);
//     if (!gamesByCategory) {
//         res.send({ response: false, gamesByCategory: [], comments: [], msg: 'there is no games' })
//     }
//     res.send({
//         response: true,
//         games: gamesByCategory,
//         comments: commentsByCtegory,
//         msg: `pls receive all ${category} games`
//     });
// })

// app.get('/comments/:game_id', async (req, res) => {
//     const { game_id }: any = req.params;
//     console.log({ id: game_id })
//     const commentsByGame = await getCommentsByGame(game_id);
//     if (!commentsByGame) {
//         res.send({ response: false, comments: [], msg: 'there is no commets' })
//     }
//     res.send({ response: true, comments: commentsByGame, msg: `pls check the comments` });

// })

// app.post('/post_comment', async (req, res) => {
//     const { text, game_id } = req.body;

//     console.log({ comment: text, id: game_id })

//     // console.log({date: comment_date});
//     // const { game_id }: any = req.params;

//     // const result = await addCommentToData(comment_date, text, game_id);
//     const result = await addCommentToData(text, game_id);

//     if (!result) {
//         res.send({ response: false, comments: [], msg: 'pls try latter' })
//     }
//     const commentsByGame = await getCommentsByGame(game_id)
//     res.send({ response: true, comments: commentsByGame, msg: `you comments posted` });

// })


// app.post('/post_comment', async (req, res) => {
//     // const {userId} = (req as any).user;
//     const { description, dueDate } = req.body;
//     const todoId = await createTodo(userId, description, dueDate);
//     res.send({ todoId });
// });






app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
