const cors = require("cors");
const express = require("express");

const stripe = require("stripe")();
const uuid= require("uuid/v4");

const app = express();


app.use(express.json());
app.use(cors());


// routes
app.get("/", (req,res) => {
    res.send("It works online");
});

app.post("/payment", (req, res) => {
    const {product, token} = req.body;
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'USD',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

// listen

app.listen(3004, () => console.log("Listening at 3004"));