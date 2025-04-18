
import { Home, Info, User, List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-unity-purple-dark border-b border-unity-purple-light fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">
            Unity
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/therapist" 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  <User className="w-4 h-4" />
                  Therapist
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/services" 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  <List className="w-4 h-4" />
                  Services
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
