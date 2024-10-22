import { useEffect, useState } from 'react';
import { useAuth } from '../authentication/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ProtectedCourse = ({ courseId, children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      if (!currentUser) {
        navigate('/login'); // Redirect if not logged in
        return;
      }

      const userRef = doc(db, 'users', currentUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists() && userDoc.data().courses?.includes(courseId)) {
        setHasAccess(true);
      } else {
        navigate('/courses'); // Redirect if no access
      }
    };

    checkAccess();
  }, [currentUser, courseId, navigate]);

  if (!hasAccess) {
    return <div>Checking access...</div>;
  }

  return <>{children}</>; // Render the course content
};

export default ProtectedCourse;
