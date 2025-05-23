import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import movies from '@/mock/dummy.json';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';

export default function Home() {
  const recommendMovies = movies.slice(0, 3);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_container}>
          {recommendMovies.map((movie) => (
            <MovieItem key={movie.id} id={movie.id} posterImgUrl={movie.posterImgUrl} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_container}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} id={movie.id} posterImgUrl={movie.posterImgUrl} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
