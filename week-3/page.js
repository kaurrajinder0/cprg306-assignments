import ItemList from "./item-list"; 

export default function Page(){
    return(
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
        <ItemList />
      </main>
    );
  }