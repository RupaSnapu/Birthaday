// 'use client';

// import { useEffect, useState } from 'react';
// import { auth } from './config';
// import { useRouter } from 'next/navigation';

// export default function CheckAuth({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
//       if (firebaseUser) {
//         setUser(firebaseUser);
//       } else {
//         router.push('/Admin/login');
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) {
//     return (
//       <main className="flex items-center justify-center h-screen">
//         <div className="text-lg font-medium">Checking authentication...</div>
//       </main>
//     );
//   }

//   return user ? <>{children}</> : null;
// }



'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './config';

export default function CheckAuth({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.replace('/Admin/login');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Checking authentication...</div>
      </main>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}
