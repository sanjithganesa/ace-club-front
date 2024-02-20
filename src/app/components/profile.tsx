import React,{useState} from "react";

const Profile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex flex-col items-start">
      <button onClick={toggleDropdown}><i className="fas fa-user text-2xl w-12 h-12 p-2 rounded-full cursor-pointer hover:border-blue-300"></i></button>
      {dropdownVisible &&
      (
      <div className="absolute top-full right-0 shadow-md w-50 z-[1]">
        <div className="bg-black p-4 rounded-lg border border-white-800 shadow-md w-50">
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center mb-4 text-sm">
              <i className="fas fa-eye text-lg mr-2"></i>
              <p className="text-white">Profile</p>
            </a>
            <a href="#" className="flex items-center text-sm">
              <i className="fas fa-sign-out-alt text-lg mr-2"></i>
              <p className="text-white">Logout</p>
            </a>
          </div>
        </div>
      </div>
      )
}
    </div>
      
  );
};

export default Profile;
