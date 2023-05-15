import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/150/100`} />
      <div>{content}</div>
      <div className='actions' onClick={handleEdit}>
        <button className='edit'></button>
        <button className='delete' onClick={handleDelete}></button>
      </div>
    </div>
  );
}

export default BookShow;
