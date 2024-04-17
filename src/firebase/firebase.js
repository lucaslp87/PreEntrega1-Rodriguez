// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    getDocs, 
    addDoc, 
    collection, 
    query, 
    where, 
    getDoc, 
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//Obtener todos los productos
export async function getProducts (){
    const response = await getDocs(collection(db, 'item'));
    const listaProds = [];
    response.forEach((doc)=> listaProds.push({id:doc.id, ...doc.data()}))/*paso ese doc a un array*/
    return listaProds;
}

export async function getProductByID(id){
    const docRef=doc(db, 'item', id )
    const response = await getDoc(docRef)
    const data=response.data();
    const productAdapted={id: response.id, ... data}
    return productAdapted;
}

export async function filterCategory(categoria){
    //creamos una query especifica
    const q = query (collection(db, 'item'), where ('categoryId', '==', categoria))
    //ejecutar la query
    const querySnapshot = await getDocs(q);
    //procesamos los resultados
    const listaFiltro =[];
    querySnapshot.forEach(doc=>listaFiltro.push({id:doc.id, ...doc.data()}))
    return listaFiltro;
}

//enviar una orden de pedido a nuestra coleccion "orders"
export async function sendOrder(order){
    const ordersCollection=collection(db, 'orders');
    const docRef=await addDoc(ordersCollection, order);
    console.log('docRef generado: ' + docRef.id);
    return docRef.id;
}

export async function updateProduct(id, toUpdate){
    try{
        await updateDoc(doc(db, 'item', id), toUpdate)
    } catch (error){
        console.log('Error: '+ error)
    }
}

export async function deleteProduct(id){
    try{
        await deleteDoc(doc(db, 'item', id));
    }catch (error){
        console.log ('Error: ' + error);
    }
}
