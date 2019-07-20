import ReactDOM from 'react-dom';

export default function Portal(props) {
  const {
    target = document.body,
    children,
  } = props;

  return ReactDOM.createPortal(
    children,
    target,
  );
}
