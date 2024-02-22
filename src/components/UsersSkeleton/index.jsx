import "./style.scss";

export default function UsersSkeleton() {
  return (
    <ul className="skeleton">
      {Array.from(Array(5), (e, i) => {
        return (
          <li key={i} className="skeleton__wrapper">
            <div className="skeleton__circle"></div>
            <div className="element__box1"></div>
            <div className="element__box2"></div>
            <div className="element__box3"></div>
          </li>
        );
      })}
    </ul>
  );
}
