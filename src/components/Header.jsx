import { Navigation } from './Navigation';

export function Header({ tituloBlog }) {
  return (
    <header>
      <h1>{tituloBlog}</h1>
      <Navigation />
    </header>
  );
}