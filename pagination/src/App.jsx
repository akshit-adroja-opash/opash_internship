import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const generateData = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past(),
  }));
};



const App = () => {
  const [data] = useState(generateData());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      width: 'min(720px, 90vw)',
      minHeight: '80vh',
      margin: 'auto',
      padding: '28px 26px 20px',
      background: 'rgba(255, 255, 255, 0.92)',
      borderRadius: '18px',
      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: '14px',
      background: 'white',
      flex: 1,
      overflowY: 'auto',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.03)',
    },
    listItem: {
      padding: '14px 18px',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      paddingTop: '10px',
    },
    button: {
      padding: '8px 14px',
      border: '1px solid #007bff',
      background: 'white',
      color: '#007bff',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'transform 0.15s ease, background 0.15s ease',
    },
    buttonDisabled: {
      borderColor: '#bbb',
      color: '#bbb',
      cursor: 'not-allowed',
      background: '#f8f9fb',
    },
    pageButtonActive: {
      background: '#007bff',
      color: 'white',
      borderColor: '#007bff',
    },
    pageNumbers: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Pagination Example (React)</h1>

      <ul style={styles.list}>
        {currentItems.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>{item.email}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>
                  Registered: {new Date(item.registeredAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div style={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            ...styles.button,
            ...(currentPage === 1 ? styles.buttonDisabled : {}),
          }}
        >
          Previous
        </button>

        <div style={styles.pageNumbers}>
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              style={{
                ...styles.button,
                ...(currentPage === number ? styles.pageButtonActive : {}),
              }}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={{
            ...styles.button,
            ...(currentPage === totalPages ? styles.buttonDisabled : {}),
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;