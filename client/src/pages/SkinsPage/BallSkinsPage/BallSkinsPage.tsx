import React, { useEffect } from 'react';
import { BallCard } from '../../../entities/ball/ui/BallCard';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { fetchBallCards } from '../../../entities/ball/model/ballThunk';
import './BallSkinsPage.css';
import { Link } from 'react-router';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Импортируем стрелки
import { setCurrentPage } from '../../../entities/ball/model/ballSlice';

export default function BallSkinsPage(): React.JSX.Element {
  const { ball, loading, currentPage } = useAppSelector((state) => state.ball);
  const dispatch = useAppDispatch();
  const cardsPerPage = 10;

  useEffect(() => {
    void dispatch(fetchBallCards());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка к началу страницы
  }, [currentPage]);

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (!ball || ball.length === 0) {
    return <div style={{ color: 'white' }}>No balls available</div>;
  }

  const totalPages = Math.ceil(ball.length / cardsPerPage);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '50px' }}>
        {ball.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((card) => (
          <Link key={card.id} to={`/skins/ball/${card.id}`} style={{ textDecoration: 'none' }}>
            <div>
              <BallCard card={card} />
            </div>
          </Link>
        ))}
      </div>

      {/* Пользовательская пагинация с стрелками влево и вправо */}
      <div className='custom-pagination'>
        {currentPage > 1 && (
          <button 
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            className='pagination-button'
          >
            <FaChevronLeft style={{ color: 'white' }} />
          </button>
        )}

        {currentPage < totalPages && (
          <button 
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            className='pagination-button'
          >
            <FaChevronRight style={{ color: 'white' }} />
          </button>
        )}
      </div>
    </div>
  );
}
