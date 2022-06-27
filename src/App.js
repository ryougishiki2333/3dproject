import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Test";

function App() {
  
  return (
    <div className="middleBox m-6 ">
      <div className="leftBox ">
        <div className="w-full h-4/5 border-solid border-2 border-blue-500 rounded-xl cursor-pointer">
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
              backgroundColor: "#111a21",
              width: "436px",
              height: "516px",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model position={[0.025, -0.9, 0]} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-gray-300 text-sm font-bold">CURRENT PRICE</div>
          <div className="text-yellow-300 flex">
            <div className="mr-1">
              <i className="fi fi-dollar"></i>
            </div>
            <span>52.50</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-gray-500">61.95USD</div>
        </div>
        <div className="flex justify-between">
          <div className="text-blue-500">@SnoopDog...</div>
          <div className="text-gray-300">294 / 5420</div>
        </div>
        <div className="flex justify-between pt-2 pb-4">
          <div className="text-white w-1/2 h-10 border-solid border-2 border-white mr-2 rounded-3xl text-center leading-10 font-bold hover:bg-blue-500 hover:border-blue-500 cursor-pointer">
            Add To Cart
          </div>
          <div className="text-white w-1/2 h-10 border-solid border-2 border-blue-500 ml-2 rounded-3xl text-center leading-10 font-bold bg-blue-500 hover:bg-blue-600 cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="mt-8 font-bold text-3xl text-gray-100">
          Snoop's OG Tactical Vest
        </div>
        <div className="text-gray-500">Token ID: 7972...1568</div>
        <div className="flex my-1">
          <div className="flex mr-6">
            <div className="text-green-500 mr-1">
              <i className="fi fi-favorite"></i>
            </div>
            <div className="text-gray-500">5420 minted</div>
          </div>
          <div className="flex mr-6">
            <div className="text-green-500 mr-1">
              <i className="fi fi-dollar"></i>
            </div>
            <div className="text-gray-500">294 of 420 for sale</div>
          </div>
          <div className="flex mr-6">
            <div className="text-green-500 mr-1">
              <i className="fi fi-female"></i>
            </div>
            <div className="text-gray-500">578 owners</div>
          </div>
        </div>
        <div className="font-bold text-2xl mt-12 text-gray-100">About</div>
        <div className="w-full h-28 my-2 border-solid border border-gray-700 rounded-2xl flex bg-gray-800">
          <div className="p-6">
            <div className="text-sm font-bold text-gray-500">Type</div>
            <div className="flex mt-2">
              <div className="mr-1 text-blue-500">
                <i className="fi fi-steam"></i>
              </div>
              <div className="text-gray-400">Equipment</div>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm font-bold text-gray-500">BIOMES</div>
            <div className="mt-2 text-gray-400">NONE</div>
          </div>
          <div className="p-6">
            <div className="text-sm font-bold text-gray-500">TAGS</div>
            <div className="mt-2 text-gray-400">City</div>
          </div>
        </div>
        <div className="font-bold text-2xl mt-12 text-gray-100">Attributes</div>
        <div className="w-full h-28 my-2 border-solid border border-gray-700 rounded-2xl flex bg-gray-800">
          <div className="py-6 px-8 flex">
            <div className="flex place-items-center">
              <div className="text-4xl text-blue-500">
                <i className="fi fi-radio-btn-active"></i>
              </div>
            </div>
            <div className="flex place-items-center">
              <div className="text-sm ml-2">
                <div className="mb-0.5 text-gray-500">Catalyst</div>
                <div className="font-bold text-blue-500">Rare</div>
              </div>
            </div>
          </div>
          <div className="p-6 px-8 flex place-items-center">
            <div className="mt-1">
              <div className="text-sm font-bold text-red-400">DEFENSE</div>
              <div className="flex">
                <div className="text-xl text-red-400 mr-1">
                  <i className="fi fi-radio-btn-active"></i>
                </div>
                <div className="text-lg text-gray-100 font-bold">38</div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl mt-4 text-gray-100">Description</div>
        <div className="text-gray-500">
          Not a single soul will mess with you while wearing the official Snoop
          Dogg OG Tactical Vest. And you'll look super fly. No doubt. Created by
          @voxelbunny.
        </div>
      </div>
    </div>
  );
}

export default App;
