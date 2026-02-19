import "./App.css";
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const handleEditClick = (userId: string) => {
    console.log("Editing user:", userId);
    setShowAlert(true);
  };
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "software engineer",
    avatarURL: "https://example.com/avatar.jpg",
  };

  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: 'https://media.istockphoto.com/id/2171717506/photo/black-wireless-headphones-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ZRnPuG-9vC8pnEMDpWfI507ChmTPLntgxww-6cL3pYs=',
    inStock: true,
    
  }

  return (
    <div className="p-8 space-y-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={handleEditClick}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <ProductDisplay 
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">
          Free shipping Available
        </div>
      </ProductDisplay>
    </div>
  );
}

export default App;
