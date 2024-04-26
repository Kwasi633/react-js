export const Stats = ({ items }) => {
  if (!items.length) return <p className="stats">
    <em>Start adding some item to your packing list 🚀</em></p>;

  const numItems = items.length;

  return <footer className="stats">

    <em>💼 You have {numItems} items on your list
    </em>
  </footer>;
};
