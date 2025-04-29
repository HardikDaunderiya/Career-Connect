import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="bg-gray-800 text-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold">
            Career<span className="text-[#F83002]">Connect</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li><Link to="/admin/companies" className="hover:text-white">Companies</Link></li>
                <li><Link to="/admin/jobs" className="hover:text-white">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/jobs" className="hover:text-white">Jobs</Link></li>
                <li><Link to="/browse" className="hover:text-white">Browse</Link></li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#431b88] text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                    alt="@user"
                    className="w-8 h-8 rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white text-gray-800 shadow-xl border border-gray-200 rounded-md">
                <div className="p-4">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage
                        src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                        alt="@user"
                        className="w-10 h-10 rounded-full"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-gray-500">{user?.profile?.bio || "Welcome back!"}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {user?.role === "student" && (
                      <div className="flex items-center gap-2 cursor-pointer">
                        <User2 className="text-gray-600" />
                        <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LogOut className="text-gray-600" />
                      <Button variant="link" onClick={logoutHandler}>Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
