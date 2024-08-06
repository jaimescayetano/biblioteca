import { IconStarFilled } from '@tabler/icons-react';

const CardBook = ({ title, poster, rating }) => {
  return (
    <div className="bg-white w-64 rounded-xl p-3 h-96">
      <img 
        src={poster} 
        alt={title} 
        className="w-full h-72 object-cover rounded-xl" 
      />
      <div className="flex items-center mt-2 h-14 overflow-hidden">
        <div className="flex items-center">
          <IconStarFilled color="#ffcb45" className="mr-1 w-4 h-4" />
          <span className="text-zinc-400 text-sm">{rating}</span>
        </div>
        <h3 className="flex-grow text-center text-zinc-400 text-xs">{title}</h3>
      </div>
    </div>
  );
};

export default CardBook;


