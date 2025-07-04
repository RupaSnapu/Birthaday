// 'use client';

// import CheckAuth from '../Firebase/CheckAuth';
// import { useEffect, useState } from 'react';
// import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
// import { db } from '../Firebase/config';
// import {
//   FaAddressBook,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaRegComment,
//   FaCalendarAlt
// } from 'react-icons/fa';

// export default function ContactManagerPage() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, 'contact_messages'), orderBy('createdAt', 'desc'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const data = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setContacts(data);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <CheckAuth>
//       <main className="p-6 bg-gray-50 min-h-screen">
//         <div className="flex items-center gap-3 mb-6">
//           <FaAddressBook className="text-blue-700 text-3xl" />
//           <h1 className="text-3xl font-bold text-blue-700">Contact Submissions</h1>
//         </div>

//         {contacts.length === 0 ? (
//           <p className="text-gray-500">No submissions yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse bg-white rounded-xl shadow">
//               <thead className="bg-blue-100 text-left text-sm uppercase tracking-wider text-gray-700">
//                 <tr>
//                   <th className="p-4"><FaUser className="inline mr-2" />Name</th>
//                   <th className="p-4"><FaEnvelope className="inline mr-2" />Email</th>
//                   <th className="p-4"><FaPhone className="inline mr-2" />Phone</th>
//                   <th className="p-4"><FaRegComment className="inline mr-2" />Message</th>
//                   <th className="p-4"><FaCalendarAlt className="inline mr-2" />Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {contacts.map((item) => (
//                   <tr key={item.id} className="border-t hover:bg-blue-50">
//                     <td className="p-4">{item.name}</td>
//                     <td className="p-4">{item.email}</td>
//                     <td className="p-4">{item.phone || '-'}</td>
//                     <td className="p-4">{item.message}</td>
//                     <td className="p-4 text-sm text-gray-500">
//                       {item.createdAt?.toDate().toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>
//     </CheckAuth>
//   );
// }



// 'use client';

// import CheckAuth from '../Firebase/CheckAuth';
// import { useEffect, useState } from 'react';
// import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
// import { db } from '../Firebase/config';
// import {
//   FaAddressBook,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaRegComment,
//   FaCalendarAlt,
// } from 'react-icons/fa';

// export default function ContactManagerPage() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, 'contact_messages'), orderBy('createdAt', 'desc'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setContacts(data);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <CheckAuth>
//       <main className="p-4 sm:p-6 bg-gray-50 min-h-screen">
//         <div className="flex items-center gap-3 mb-6">
//           <FaAddressBook className="text-blue-700 text-2xl sm:text-3xl" />
//           <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Contact Submissions</h1>
//         </div>

//         {contacts.length === 0 ? (
//           <p className="text-gray-500 text-base sm:text-lg">No submissions yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse bg-white rounded-xl shadow text-sm sm:text-base">
//               <thead className="bg-blue-100 text-left uppercase tracking-wide text-gray-700 hidden sm:table-header-group">
//                 <tr>
//                   <th className="p-3"><FaUser className="inline mr-2" />Name</th>
//                   <th className="p-3"><FaEnvelope className="inline mr-2" />Email</th>
//                   <th className="p-3"><FaPhone className="inline mr-2" />Phone</th>
//                   <th className="p-3"><FaRegComment className="inline mr-2" />Message</th>
//                   <th className="p-3"><FaCalendarAlt className="inline mr-2" />Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {contacts.map((item) => (
//                   <tr
//                     key={item.id}
//                     className="border-t hover:bg-blue-50 flex flex-col sm:table-row sm:flex-none sm:border-0"
//                   >
//                     <td className="p-3 font-medium sm:table-cell">
//                       <span className="block sm:hidden font-semibold text-gray-500">Name:</span>
//                       {item.name}
//                     </td>
//                     <td className="p-3 sm:table-cell break-words">
//                       <span className="block sm:hidden font-semibold text-gray-500">Email:</span>
//                       {item.email}
//                     </td>
//                     <td className="p-3 sm:table-cell">
//                       <span className="block sm:hidden font-semibold text-gray-500">Phone:</span>
//                       {item.phone ? (
//                         <a href={`tel:${item.phone}`} className="text-blue-600 underline">
//                           {item.phone}
//                         </a>
//                       ) : (
//                         '-'
//                       )}
//                     </td>
//                     <td className="p-3 sm:table-cell break-words">
//                       <span className="block sm:hidden font-semibold text-gray-500">Message:</span>
//                       {item.message}
//                     </td>
//                     <td className="p-3 sm:table-cell text-gray-500 text-sm">
//                       <span className="block sm:hidden font-semibold text-gray-500">Date:</span>
//                       {item.createdAt?.toDate().toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>
//     </CheckAuth>
//   );
// }

'use client';

import CheckAuth from '../Firebase/CheckAuth';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/config';
import {
  FaAddressBook,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegComment,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function ContactManagerPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'contact_messages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CheckAuth>
      <main className="p-4 sm:p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <FaAddressBook className="text-blue-700 text-2xl sm:text-3xl" />
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Contact Submissions</h1>
        </div>

        {contacts.length === 0 ? (
          <p className="text-gray-500 text-base sm:text-lg">No submissions yet.</p>
        ) : (
          <>
            {/* ✅ Table for desktop */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full table-auto border-collapse bg-white rounded-xl shadow text-sm sm:text-base">
                <thead className="bg-blue-100 text-left uppercase tracking-wide text-gray-700">
                  <tr>
                    <th className="p-3"><FaUser className="inline mr-2" />Name</th>
                    <th className="p-3"><FaEnvelope className="inline mr-2" />Email</th>
                    <th className="p-3"><FaPhone className="inline mr-2" />Phone</th>
                    <th className="p-3"><FaRegComment className="inline mr-2" />Message</th>
                    <th className="p-3"><FaCalendarAlt className="inline mr-2" />Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((item) => (
                    <tr key={item.id} className="border-t hover:bg-blue-50">
                      <td className="p-3 font-medium">{item.name}</td>
                      <td className="p-3 break-words">{item.email}</td>
                      <td className="p-3">
                        {item.phone ? (
                          <a href={`tel:${item.phone}`} className="text-blue-600 underline">
                            {item.phone}
                          </a>
                        ) : '-'}
                      </td>
                      <td className="p-3 break-words">{item.message}</td>
                      <td className="p-3 text-gray-500 text-sm">
                        {item.createdAt?.toDate().toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Card layout for mobile */}
            {/* ✅ Card layout for mobile */}
<div className="sm:hidden space-y-4">
  {contacts.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-xl shadow-md p-4 space-y-1 text-sm"
    >
      <div className="flex justify-between">
        <span className="text-gray-500 font-semibold">Name:</span>
        <span className="text-gray-800 text-right">{item.name}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500 font-semibold">Email:</span>
        <span className="text-gray-800 text-right break-all">{item.email}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500 font-semibold">Phone:</span>
        <span className="text-gray-800 text-right">
          {item.phone ? (
            <a href={`tel:${item.phone}`} className="text-blue-600 underline">
              {item.phone}
            </a>
          ) : (
            '-'
          )}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500 font-semibold">Date:</span>
        <span className="text-gray-600 text-xs text-right">
          {item.createdAt?.toDate().toLocaleString()}
        </span>
      </div>

      <div className="mt-2">
        <div className="text-gray-500 font-semibold mb-1">Message:</div>
        <div className="text-gray-800 whitespace-pre-wrap break-words bg-gray-50 p-2 rounded-md border text-sm">
          {item.message || 'No message provided.'}
        </div>
      </div>
    </div>
  ))}
</div>

          </>
        )}
      </main>
    </CheckAuth>
  );
}
