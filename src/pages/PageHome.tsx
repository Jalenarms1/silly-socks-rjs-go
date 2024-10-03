import { FreeShippingAlert } from "../components/FreeShippingAlert"
import { HomeCatalog } from "../components/HomeCatalog"
// import { StickyCart } from "../components/StickyCart"
import { GiSocks , GiCrocJaws} from "react-icons/gi";

export const PageHome = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full p-4 text-white flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col items-center gap-2">
              <p className="text-3xl text-black font-bold font-mono">Silly Socks and More</p>
              <div className="flex items-center">
                <GiSocks className="text-red-500 text-3xl" />
                <GiCrocJaws className="text-yellow-300 text-3xl" />
              </div>
              
              {/* <p className="text-sm text-zinc-200">Sign up to recieve email notifications on new products.</p> */}
          </div>
          {/* <button className="btn bg-blue-500 hover:bg-blue-600 w-fit px-6 text-white">Sign Up</button> */}

      </div>
      <FreeShippingAlert />

      <HomeCatalog />
      {/* <StickyCart /> */}

    </div>
  )
}
