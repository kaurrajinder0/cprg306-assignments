import ItemList from "./item-list"; 

export default function Page(){
    return(
      <main className=" min-h-screen  bg-slate-950">
        <h2 className=" text-gray-50 text-3xl font-bold mt-0 m-2">Shopping List</h2>
        <label className=" text-gray-50 m-2" > Sort By:</label>
        <ItemList />
      </main>
    );
  }