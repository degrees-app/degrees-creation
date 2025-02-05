import React, { useEffect, useState } from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { BallCard } from '../../../entities/ball/ui/BallCard';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { fetchBallCards } from '../../../entities/ball/model/ballThunk';
import './BallSkinsPage.css';

export default function BallSkinsPage(): React.JSX.Element {
  const { ball, loading } = useAppSelector((state) => state.ball);
  const dispatch = useAppDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    void dispatch(fetchBallCards());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка к началу страницы
  }, [currentPage]);

  if (!ball) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = ball.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(ball.length / cardsPerPage);

  return (
    <div >
      <div style ={{display:'flex', justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'50px'}}>
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <div key={card.id} >
              <BallCard card={card} />
            </div>
          ))
        ) : (
          <Col>
            <div>No sounds available</div>
          </Col>
        )}
      </div>

      {/* Пагинация */}
      <Pagination className='pagination'>
        <Pagination.Prev 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        
        {/* Отображение страниц с многоточием */}
        {totalPages > 10 ? (
          <>
            {currentPage > 1 && <Pagination.Item onClick={() => setCurrentPage(1)}>1</Pagination.Item>}
            {currentPage > 4 && <Pagination.Ellipsis />}
            
            {/* Отображаем 5 страниц вокруг текущей */}
            {Array.from({ length: 5 }, (_, index) => {
              const pageNumber = currentPage > 3 ? currentPage - 2 + index : index + 1;
              if (pageNumber <= totalPages) {
                return (
                  <Pagination.Item 
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </Pagination.Item>
                );
              }
              return null;
            })}

            {currentPage < totalPages - 4 && <Pagination.Ellipsis />}
            {currentPage < totalPages && (
              <Pagination.Item onClick={() => setCurrentPage(totalPages)}>
                {totalPages}
              </Pagination.Item>
            )}
          </>
        ) : (
          Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item 
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))
        )}

        <Pagination.Next
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}