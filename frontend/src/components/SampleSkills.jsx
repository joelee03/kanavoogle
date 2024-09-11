import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebase'; 
import { db } from '../firebase/firebase';

const SampleSkills = () => {
  const [section1, setSection1] = useState({ title: '', description: '', link: '' });
  const [section2, setSection2] = useState({ title: '', description: '', link: '' });
  const [section3, setSection3] = useState({ title: '', description: '', link: '' });
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to check if the user is an admin
  useEffect(() => {
    const checkAdminRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdTokenResult();
        if (token.claims.admin) {
          setIsAdmin(true);
        }
      }
    };

    checkAdminRole();
  }, []);

  // Fetch section data from Firestore
  useEffect(() => {
    const fetchSections = async () => {
      const section1Doc = await getDoc(doc(db, 'projects', 's1'));
      const section2Doc = await getDoc(doc(db, 'projects', 's2'));
      const section3Doc = await getDoc(doc(db, 'projects', 's3'));

      if (section1Doc.exists()) setSection1(section1Doc.data());
      if (section2Doc.exists()) setSection2(section2Doc.data());
      if (section3Doc.exists()) setSection3(section3Doc.data());
    };

    fetchSections();
  }, []);

  // Update section data in Firestore
  const updateSection = async (sectionId, data) => {
    try {
      await setDoc(doc(db, 'projects', sectionId), data);
      alert('Section updated successfully!');
    } catch (error) {
      console.error('Error updating section: ', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4">
        {/* Section 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">{section1.title}</h2>
          <p>{section1.description}</p>
          <a href={section1.link}>View More</a>
        </div>

        {/* Section 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">{section2.title}</h2>
          <p>{section2.description}</p>
          <a href={section2.link}>View More</a>
        </div>

        {/* Section 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-webcolor">{section3.title}</h2>
          <p>{section3.description}</p>
          <a href={section3.link}>View More</a>
        </div>
      </div>

      {/* Admin editing section */}
      {isAdmin && (
        <div className="admin-controls p-4 bg-gray-100 mt-8">
          <h2>Edit Sections as Admin</h2>

          {/* Section 1 */}
          <div>
            <h3>Section 1</h3>
            <input
              type="text"
              value={section1.title}
              onChange={(e) => setSection1({ ...section1, title: e.target.value })}
              placeholder="Title"
              className="w-full p-2 border"
            />
            <textarea
              value={section1.description}
              onChange={(e) => setSection1({ ...section1, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border"
            />
            <input
              type="text"
              value={section1.link}
              onChange={(e) => setSection1({ ...section1, link: e.target.value })}
              placeholder="Link"
              className="w-full p-2 border"
            />
            <button onClick={() => updateSection('s1', section1)} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Save Section 1
            </button>
          </div>

          {/* Section 2 */}
          <div>
            <h3>Section 2</h3>
            <input
              type="text"
              value={section2.title}
              onChange={(e) => setSection2({ ...section2, title: e.target.value })}
              placeholder="Title"
              className="w-full p-2 border"
            />
            <textarea
              value={section2.description}
              onChange={(e) => setSection2({ ...section2, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border"
            />
            <input
              type="text"
              value={section2.link}
              onChange={(e) => setSection2({ ...section2, link: e.target.value })}
              placeholder="Link"
              className="w-full p-2 border"
            />
            <button onClick={() => updateSection('s2', section2)} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Save Section 2
            </button>
          </div>

          {/* Section 3 */}
          <div>
            <h3>Section 3</h3>
            <input
              type="text"
              value={section3.title}
              onChange={(e) => setSection3({ ...section3, title: e.target.value })}
              placeholder="Title"
              className="w-full p-2 border"
            />
            <textarea
              value={section3.description}
              onChange={(e) => setSection3({ ...section3, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border"
            />
            <input
              type="text"
              value={section3.link}
              onChange={(e) => setSection3({ ...section3, link: e.target.value })}
              placeholder="Link"
              className="w-full p-2 border"
            />
            <button onClick={() => updateSection('s3', section3)} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Save Section 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleSkills;