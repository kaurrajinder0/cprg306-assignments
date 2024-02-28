import ItemList from "./item-list"; 

export default function Page(){
    return(
      <main className=" min-h-screen  bg-slate-950">
        <h1 className=" text-gray-50 text-3xl font-bold  ">Shopping List</h1>
        <ItemList />
      </main>
    );
  }