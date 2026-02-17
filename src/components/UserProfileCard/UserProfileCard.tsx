import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold">{user.name}</h3>
          {showEmail && <p className="text-blue-500 text-sm">{user.email}</p>}
          {showRole && <p className="text-gray-600 italic">{user.role}</p>}
          <div className="mt-4">{children}</div>
        </div>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
