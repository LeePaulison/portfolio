import { useMatches, NavLink } from "react-router-dom";

export const Navigation = () => {
  let matches = useMatches();

  return (
    <div className='flex flex-row self-start'>
      {matches.map((match, idx) => {
        return (
          <span key={idx}>
            <NavLink to={match.pathname} className='font-lg font-bold'>
              {match.handle.crumbs}
            </NavLink>
            {idx < matches.length - 1 && <span className='font-lg font-bold'>/</span>}
          </span>
        );
      })}
    </div>
  );
};
