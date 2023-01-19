import cors from 'cors';
import express, { json } from 'express';
import { set, connect } from 'mongoose';
import Mosaic from './models/Mosaic.js';
import firebase from './firebase/index.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';

const app = express();

const db = 'mongodb+srv://volodymyr:vovka4544@mosaiccluster.kuapo0p.mongodb.net/Mosaic?retryWrites=true&w=majority';

set('strictQuery', true);
connect(db)
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

const newBD = getFirestore(firebase);

app.use(json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.json('App is running');
});

app.post('/post-mosaic', (req, res) => {
  const { name, price, description, shortDesc } = req.body;
  const mosaic = new Mosaic({
    name,
    price,
    description,
    shortDesc
  });
  mosaic
    .save()
    .then((result) => res.send(result))
    .catch((error) => {
      console.log(console.log(error));
    })
    .catch((err) => {
      console.log(err);
    });
});

// firebase

async function getAllItems() {
  const mosaicaCol = collection(newBD, 'mosaica');
  const MosaicSnapshot = await getDocs(mosaicaCol);
  const mosaicList = MosaicSnapshot.docs.map((doc) => doc.data());
  return mosaicList;
}
async function getRelaxItems() {
  const mosaicaCol = collection(newBD, 'mosaica');
  const MosaicSnapshot = await getDocs(mosaicaCol);
  const mosaicList = MosaicSnapshot.docs.map((doc) => doc.data());
  return mosaicList;
}

async function getMosacById(id) {
  const mosaicaById = doc(newBD, 'mosaica', id);
  const mosaicaByIdSnapshot = await getDoc(mosaicaById);
  const mosaicByIdResult = mosaicaByIdSnapshot.data();
  return mosaicByIdResult;
}

app.get('/get-all-items', async (req, res) => {
  const data = await getRelaxItems();
  res.send(data);
});

app.get('/get-relax-items', async (req, res) => {
  const data = await getAllItems();
  res.send(data);
});

app.get('/get-mosaic/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getMosacById(id);
  res.send(data);
});

app.post(
  'https://api.telegram.org/bot5984931516:AAG6dArhGcEYXT7qp0CGUZVakKipuDWayv4/sendMessage'
  // async (req, res) => {
  //   res.
  // }
);

app.listen(process.env.PORT || 5000, '0.0.0.0', function () {
  console.log('Server started.....');
});
