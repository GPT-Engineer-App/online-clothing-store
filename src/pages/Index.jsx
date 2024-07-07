import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="text-center">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Welcome to Smuvia</h1>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="lg" className="btn">
                Shop Now
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to explore our products!</p>
            </TooltipContent>
          </Tooltip>
        </header>
        <section className="mb-8">
          <img src="/placeholder.svg" alt="Hero Banner" className="mx-auto object-cover w-full h-[400px] card" />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="border p-4 card">
              <img src="/placeholder.svg" alt="Product 1" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mt-2">Product 1</h3>
              <p className="text-muted-foreground">$10.00</p>
            </div>
            <div className="border p-4 card">
              <img src="/placeholder.svg" alt="Product 2" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mt-2">Product 2</h3>
              <p className="text-muted-foreground">$20.00</p>
            </div>
            <div className="border p-4 card">
              <img src="/placeholder.svg" alt="Product 3" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mt-2">Product 3</h3>
              <p className="text-muted-foreground">$30.00</p>
            </div>
            <div className="border p-4 card">
              <img src="/placeholder.svg" alt="Product 4" className="mx-auto object-cover w-full h-[200px]" />
              <h3 className="text-xl font-semibold mt-2">Product 4</h3>
              <p className="text-muted-foreground">$40.00</p>
            </div>
          </div>
        </section>
        <footer className="mt-8">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <p className="text-muted-foreground">Social Media Links</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="text-muted-foreground">Email: contact@smuvia.com</p>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default Index;