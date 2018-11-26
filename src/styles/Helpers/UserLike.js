import styled from "styled-components";

const UserLikeStyle = styled.div`
  position: relative;
  left: ${props => (props.left ? props.left : "unset")};
  right: ${props => (props.right ? props.right : "unset")};
  top: ${props => (props.top ? props.top : "unset")};
  bottom: ${props => (props.bottom ? props.bottom : "unset")};
`;

export default UserLikeStyle;
