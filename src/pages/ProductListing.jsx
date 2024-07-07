import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const products = [
  { id: 1, name: "Product 1", price: 10.00, image: "/placeholder.svg", category: "men", size: "M", color: "red" },
  { id: 2, name: "Product 2", price: 20.00, image: "/placeholder.svg", category: "women", size: "L", color: "blue" },
  { id: 3, name: "Product 3", price: 30.00, image: "/placeholder.svg", category: "kids", size: "S", color: "green" },
  { id: 4, name: "Product 4", price: 40.00, image: "/placeholder.svg", category: "men", size: "XL", color: "black" },
];

const ProductListing = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      (priceRange === "" || (priceRange === "0-50" && product.price <= 50) || (priceRange === "50-100" && product.price > 50 && product.price <= 100) || (priceRange === "100-200" && product.price > 100 && product.price <= 200)) &&
      (size === "" || product.size === size) &&
      (color === "" || product.color === color) &&
      (searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Shop</h1>
          <Input placeholder="Search products..." className="w-1/3" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </header>
        <div className="flex">
          <aside className="w-1/4 p-4">
            <h2 className="text-xl font-semibold mb-2">Filters</h2>
            <div className="mb-4">
              <label className="block mb-1">Category</label>
              <Select onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="men">Men</SelectItem>
                  <SelectItem value="women">Women</SelectItem>
                  <SelectItem value="kids">Kids</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Price Range</label>
              <Select onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100-200">$100 - $200</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Size</label>
              <Select onValueChange={setSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="S">S</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Color</label>
              <Select onValueChange={setColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>
          <section className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[200px]" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <p>${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button as={Link} to={`/product/${product.id}`} variant="outline" className="w-full btn">
                        View Details
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View more details about this product</p>
                    </TooltipContent>
                  </Tooltip>
                </CardFooter>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ProductListing;