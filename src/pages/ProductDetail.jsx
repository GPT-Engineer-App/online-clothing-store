import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const product = {
  id: 1,
  name: "Product 1",
  price: "$10.00",
  description: "This is a detailed description of the product.",
  image: "/placeholder.svg",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green", "Black"],
};

const relatedProducts = [
  { id: 2, name: "Product 2", price: "$20.00", image: "/placeholder.svg" },
  { id: 3, name: "Product 3", price: "$30.00", image: "/placeholder.svg" },
  { id: 4, name: "Product 4", price: "$40.00", image: "/placeholder.svg" },
];

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[400px] card" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{product.price}</p>
            <p className="mb-4">{product.description}</p>
            <div className="mb-4">
              <label className="block mb-1">Size</label>
              <select className="w-full p-2 border rounded">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Color</label>
              <select className="w-full p-2 border rounded">
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="primary" className="w-full btn">
                  Add to Cart
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add this product to your cart</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="card">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[200px]" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <p>{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button as={Link} to={`/product/${product.id}`} variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ProductDetail;