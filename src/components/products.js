import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/product.css';

function Products() {
const [posts, setPosts] = useState([])

useEffect(()=>{
    axios.get('http://localhost:4200/products')
    .then(res =>{
        setPosts(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
},[])
  return (
    <div>
      <div className="container-fluid d-flew flex-row">
    <div className="row row-cols-3 justify-content-between text-center">
      {posts.map(post =>
            <div className="product bg-dark my-4" key={post.id}>
                <div className="item imgArt">
                    <img src={post.imageUrl} width="100%" height="300px" alt='products description'/>
                </div>
                <div className="item py-3">
                    <h5 className="card-title text-white">{post.Nom_A}</h5>
                    <h5 className="card-price text-white">{post.Prix}</h5>
                </div>
                <button className="w-100">Ajouer au panier</button>
            </div>
        ) }
    </div>
</div>
    </div>
  )
}

export default Products