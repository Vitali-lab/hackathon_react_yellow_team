import PropTypes from "prop-types";
import styled from "styled-components";

const BadgeContainer = ({className , badge}) => {
    return <div className={className}>
        <div className={badge === 'Team Lead'? 'bageLead': 'bage' }>{badge}</div>
    </div>;
};

export const Badge = styled(BadgeContainer)`

    & .bage {
    width: fit-content;
    background: #ffd700;
    color: #333;
    padding: 4px 12px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 0.8rem;}

    & .bageLead {
    width: fit-content;
    background:rgba(216, 139, 234, 0.85);
    color: #333;
    padding: 4px 12px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 0.8rem;
    }
`

Badge.propTypes = {
    className: PropTypes.string,
    badge: PropTypes.string,
};