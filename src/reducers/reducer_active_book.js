export default function(state = null, { type, selectedBook }) {
  switch (type) {
    case 'SELECT_BOOK':
      return selectedBook;
    default:
      return state;
  }
}
