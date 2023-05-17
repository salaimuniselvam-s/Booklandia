import { BOOKS } from "./constants";
import BookCard from "./components/BookCard";

const Home = () => {
  return (
    <div className="flex gap-6 my-6 mx-3">
      {BOOKS.map((book, index) => {
        return <BookCard key={index} {...book} />;
      })}
    </div>
  );
};

export default Home;
