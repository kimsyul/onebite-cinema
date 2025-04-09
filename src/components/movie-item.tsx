import { MovieData } from '@/types';
import Link from 'next/link';
import style from './movie-item.module.css';

export default function MovieItem({ id, posterImgUrl }: { id: number; posterImgUrl: string }) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} />
    </Link>
  );
}
