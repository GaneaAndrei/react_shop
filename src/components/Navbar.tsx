
import { Link } from "react-router-dom";

export function Navbar(){
    return (
    <nav className="container bg-white shadow-sm ">
        <div className=" hidden sm:block ">
            {/* Desktop */}
            <div className="h-16 max-w-full flex items-center justify-between  mx-auto p-4">
                <div >
                    <Link to ="/"  className="text-3xl font-bold px-4">
                        Home
                    </Link>
                    <Link to ="/store"  className="text-3xl font-bold px-4">
                        Store
                    </Link>
                    <Link to ="/about"  className="text-3xl font-bold px-4">
                        About
                    </Link>
                </div>
                <button style={{ width: "3rem", height: "3rem",position :"relative"}} >
                    <svg className="fill-blue-500 outline-2 outline-solid rounded-full w-15 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
  
                    >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <div className="outline-solid rounded-full flex justify-center items-center bg-red-600"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%, 25%)",
                    }}>
                        3
                    </div>
                    </button>
            </div>
        </div>
        <div className="sm:hidden  ">
            <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2 ">
                        <Link to ="/"  className="text-3xl font-bold px-4 ">
                            Home
                        </Link>
                        <Link to ="/store"  className="text-3xl font-bold px-4 ">
                            Store
                        </Link>
                        <Link to ="/about"  className="text-3xl font-bold px-4">
                            About
                        </Link>
                    </div>
                    <button style={{ width: "3rem", height: "3rem", position: "relative" }} >
                    <svg className="fill-blue-500 outline-2 outline-solid rounded-full w-15 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"

                    >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <div className="outline-solid rounded-full flex justify-center items-center bg-red-600"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%, 25%)",
                    }}>
                        3
                    </div>
                    </button>
            </div>
        </div>
        
    </nav>
    )
}