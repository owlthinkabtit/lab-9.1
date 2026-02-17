import "./App.css";
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

function App() {
  const [showAlert, setShowAlert] = useState(false);

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
    </div>
  );
}

export default App;
