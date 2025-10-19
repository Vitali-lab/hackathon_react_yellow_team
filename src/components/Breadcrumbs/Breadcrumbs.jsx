import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  color: #333;
`;

const CrumbLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const CrumbText = styled.span`
  color: #555;
  font-weight: 500;
`;

export const Breadcrumbs = ({ crumbs }) => {
  return (
    <CrumbsWrapper>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.path ? (
            <CrumbLink to={crumb.path}>{crumb.title}</CrumbLink>
          ) : (
            <CrumbText>{crumb.title}</CrumbText>
          )}
          {index < crumbs.length - 1 && <CrumbText> / </CrumbText>}
        </span>
      ))}
    </CrumbsWrapper>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
};
