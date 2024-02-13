// export default function Page() {
//   return (
//     <main>
//       <h1>Shopping List</h1>
//       <StudentInfo />
//     </main>
//   );
// }

import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className=" min-h-screen h-screen "style={{ backgroundColor: 'black' }}>
    <div className=" text-gray-50">
      <h1>Shopping List</h1>
      <StudentInfo />
      </div>
    </main>
  );
}


