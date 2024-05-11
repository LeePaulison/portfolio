import PropTypes from "prop-types";

export function Skill({ skill }) {
  return (
    <img src={skill.logo} width={"150px"} className='skill-logo' alt={skill.alt} aria-description={skill.description} />
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};
