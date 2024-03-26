export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-center">
      <ul className="text-slate-900 w-60 text-l list-none  border-slate-900  p-2 m-2">
        <li className="font-semibold">Item: {name}</li>
        <li className="font-semibold">Quantity: {quantity}</li>
        <li className="font-semibold">Category: {category}</li>
      </ul>
    </div>
  );
}