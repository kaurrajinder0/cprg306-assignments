import ItemList from "./item-list"; 

export default function Page(){
    return(
      <main className=" min-h-screen h-screen bg-slate-950">
        <h1 className=" text-gray-50 text-3xl font-bold m-3 ">Shopping List</h1>
        <ItemList />
      </main>
    );
  }