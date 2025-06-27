import LikeButton from "./like-button";
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// Add export default to your <HomePage> component to help Next.js distinguish which component to render as the main component of the page.
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}