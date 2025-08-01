import products from "../database.json";

export default function loadProduct({ params }) { // data fetching (obtenção do dado)
  const product = products.find(p => p.id === params.productId)

  if (!product) {
    throw new Response("404, not found", { status: 404 })
  }

  return product
}