import { useState } from "react";
import { Link } from "react-router-dom";

function AccountComponent() {
  const [editProfile, setEditProfile] = useState(false);
  const handleEditProfile = function (e) {
    e.preventDefault();
    setEditProfile((curr) => (curr = !curr));
  };
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col lg:flex-row lg:justify-around py-14">
      <div className="w-full flex flex-col lg:w-[20%] gap-6">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-xs md:text-base lg:text-xl">Manage My Account</h3>
          <button className="text-sm lg:text-base tracking-[.5px] ml-8 text-button1">
            My profile
          </button>
          <button className="text-sm lg:text-base tracking-[.5px] ml-8 text-gray">
            Address Book
          </button>
          <button className="text-sm lg:text-base tracking-[.5px] ml-8 text-gray">
            My Payment Option
          </button>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-xs md:text-base lg:text-xl">My Orders</h3>
          <button className="text-sm lg:text-base tracking-[.5px] ml-8 text-gray">
            My returns
          </button>
          <button className="text-sm lg:text-base tracking-[.5px] ml-8 text-gray">
            My Cancellation
          </button>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <Link to={"/wishlist"} className="text-xs md:text-base lg:text-xl">
            My WishList
          </Link>
        </div>
      </div>

      <form className="w-full lg:w-[70%] 2xl:w-[55%] flex flex-wrap gap-y-6 justify-between">
        <h3 className="text-base md:text-xl 2xl:text-2xl text-button1 tracking-[1px] font-[400] w-full">
          {editProfile ? "Edit Your Profile" : "Your  Profile"}
        </h3>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[47%] flex flex-col gap-2">
          <label className="text-xs md:text-base lg:text-xl text-black tracking-[.5px]">
            First Name
          </label>
          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Fisrt Name"
          />
        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[47%] flex flex-col gap-2">
          <label className="text-xs md:text-base lg:text-xl text-black tracking-[.5px]">
            Last Name
          </label>
          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Last Name"
          />
        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[47%] flex flex-col gap-2">
          <label className="text-xs md:text-base lg:text-xl text-black tracking-[.5px]">
            Last Name
          </label>
          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Last Name"
          />
        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[47%] flex flex-col gap-2">
          <label className="text-xs md:text-base lg:text-xl text-black tracking-[.5px]">
            Last Name
          </label>
          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Last Name"
          />
        </div>

        <div className="w-full  flex flex-col gap-4">
          <label className="text-xs md:text-base lg:text-xl text-black tracking-[.5px]">
            Change Password
          </label>
          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Current Password"
          />

          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="New Password"
          />

          <input
            type="text"
            readOnly={!editProfile}
            className="w-full bg-white2 px-4 py-2 border-none outline-none rounded-2xl"
            placeholder="Confirm New Password"
          />
        </div>

        <div className="w-full flex justify-end gap-5 items-center">
          {editProfile && (
            <button className="text-xs md:text-base 2xl:text-xl text-black tracking-[.5px]">
              Cancel
            </button>
          )}

          <button
            onClick={handleEditProfile}
            className="text-xs md:text-base 2xl:text-xl tracking-[.5px] bg-button1 text-white2 px-4 py-2"
          >
            {editProfile ? "Save Chnages" : "Edit Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountComponent;
