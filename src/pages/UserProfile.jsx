import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  CalendarCheck,
  BadgeInfo,
} from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getMemberSince = () => {
    const storedDate = localStorage.getItem("memberSince");
    if (storedDate) {
      return new Date(storedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    }

    const today = new Date();
    localStorage.setItem("memberSince", today.toISOString());
    return today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white text-gray-700">
        <p className="text-xl text-red-500">No user data found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mt-12 mb-10">
        Welcome, {user.firstName}!
      </h1>

      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2">
          <BadgeInfo className="text-blue-500" /> Profile Information
        </h2>

        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <User className="text-blue-600" />
            <span className="font-medium">First Name:</span> {user.firstName}
          </div>
          <div className="flex items-center gap-3">
            <User className="text-blue-600" />
            <span className="font-medium">Last Name:</span> {user.lastName}
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" />
            <span className="font-medium">Email:</span> {user.email}
          </div>
          <div className="flex items-center gap-3">
            <CalendarCheck className="text-blue-600" />
            <span className="font-medium">Member Since:</span> {getMemberSince()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
